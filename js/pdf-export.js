/**
 * PDF Exporter — Converts pages to downloadable A4 PDF.
 * Supports: handwritten canvas pages, digital text blocks, and cover page.
 * Uses jsPDF (loaded from CDN in index.html).
 */

/* ---- Handwritten PDF (canvas pages) ---- */
async function exportToPDF(canvases, filename, coverPageData) {
    if (!canvases || canvases.length === 0) {
        alert('No pages to export. Generate an assignment first.');
        return;
    }

    if (typeof window.jspdf === 'undefined') {
        alert('PDF library is still loading. Please wait a moment and try again.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // Cover page first (if provided)
    if (coverPageData) {
        pdf.addImage(coverPageData, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
        pdf.addPage();
    }

    for (let i = 0; i < canvases.length; i++) {
        if (i > 0) pdf.addPage();
        // Convert canvas to PNG (lossless — no JPEG artifacts when xeroxed)
        const imgData = canvases[i].toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
    }

    pdf.save(filename || 'assignment.pdf');
}

/* ---- Digital / Documentation PDF (typed text) ---- */
async function exportDigitalPDF(blocks, filename, coverPageData, outputMode) {
    if (!blocks || blocks.length === 0) {
        alert('No content to export. Generate an assignment first.');
        return;
    }

    if (typeof window.jspdf === 'undefined') {
        alert('PDF library is still loading. Please wait a moment and try again.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    /* ======== DOCUMENT CONSTANTS (ISO A4: 210×297mm) ======== */
    const ML = 25;         // left margin
    const MR = 25;         // right margin
    const MT = 28;         // top margin
    const MB = 25;         // bottom margin (above footer)
    const FOOTER_Y = 289;  // footer text y-position
    const PW = 210 - ML - MR;  // printable width = 160mm
    const BODY_BOTTOM = 297 - MB;  // content stops here

    /* Spacing constants */
    const LINE_H = 5.8;   // ~1.5 line spacing at 11pt
    const PARA_GAP = 4;   // gap after paragraph
    const H1_SIZE = 18;   // title
    const H2_SIZE = 14;   // section heading
    const H3_SIZE = 12;   // sub-section
    const BODY_SIZE = 11; // body text
    const LIST_INDENT = 8; // list left indent
    const LIST_HANG = 6;   // hanging indent for wrapped lines

    let y = MT;
    let pageNum = 1;       // tracks content page numbers (jsPDF creates page 1 automatically)
    const isDoc = outputMode === 'documentation';
    const totalBlocks = blocks.length;

    /* ======== HELPERS ======== */
    function startNewPage() {
        pdf.addPage();
        y = MT;
        pageNum++;
    }

    function ensureSpace(needed) {
        if (y + needed > BODY_BOTTOM) {
            addFooter();
            startNewPage();
            addHeader();
        }
    }

    function addFooter() {
        // Thin line above footer
        pdf.setDrawColor(180, 180, 180);
        pdf.setLineWidth(0.2);
        pdf.line(ML, FOOTER_Y - 4, ML + PW, FOOTER_Y - 4);

        // Page number centered
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(120, 120, 120);
        pdf.text(`Page ${pageNum}`, 105, FOOTER_Y, { align: 'center' });
    }

    function addHeader() {
        // Thin line below header area (only on content pages, not page 1)
        if (pageNum > 1 || isDoc) {
            pdf.setDrawColor(200, 200, 200);
            pdf.setLineWidth(0.15);
            pdf.line(ML, MT - 5, ML + PW, MT - 5);
        }
    }

    /* ======== PASS 1: Build section list for Index ======== */
    const sections = [];
    if (isDoc) {
        for (const b of blocks) {
            if (b.type === 'heading' && (b.level === 1 || b.level === 2)) {
                sections.push({ title: b.content, level: b.level, page: 0 });
            }
        }
    }

    /* ======== Cover Page ======== */
    if (coverPageData) {
        // Cover page uses the default first page
        pdf.addImage(coverPageData, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
        pageNum = 0; // reset — cover isn't a content page
    }

    /* ======== Index Page (Documentation only) ======== */
    if (isDoc && sections.length > 0) {
        if (coverPageData) {
            // Cover took page 1, so TOC goes on a new page
            startNewPage();
        } else {
            // No cover — use the default first page for TOC
            pageNum = 1;
        }
        addHeader();
        const indexPageNum = pageNum;

        // Predict page numbers
        let predictedPage = indexPageNum + 1;
        let firstSection = true;
        for (const sec of sections) {
            if (sec.level === 1) {
                sec.page = predictedPage;
                predictedPage++;
            } else {
                if (!firstSection) predictedPage++;
                sec.page = predictedPage;
                firstSection = false;
            }
        }

        // Title
        pdf.setFontSize(20);
        pdf.setFont('times', 'bold');
        pdf.setTextColor(25, 25, 25);
        pdf.text('Table of Contents', 105, y, { align: 'center' });
        y += 4;
        pdf.setDrawColor(60, 60, 60);
        pdf.setLineWidth(0.6);
        pdf.line(ML + PW*0.2, y, ML + PW*0.8, y);
        y += 14;

        // Entries
        for (const sec of sections) {
            pdf.setFontSize(sec.level === 1 ? 13 : 11);
            pdf.setFont('times', sec.level === 1 ? 'bold' : 'normal');
            pdf.setTextColor(30, 30, 30);

            const indent = sec.level === 1 ? 0 : 10;
            const title = sec.content || sec.title;
            const pageStr = String(sec.page);

            pdf.text(title, ML + indent, y);

            // Dotted leader
            pdf.setFontSize(10);
            pdf.setFont('times', 'normal');
            pdf.setTextColor(140, 140, 140);
            const titleW = pdf.getTextWidth(title) + indent;
            const pageNumW = pdf.getTextWidth(pageStr);
            let dx = ML + titleW + 5;
            const dotsEnd = ML + PW - pageNumW - 3;
            while (dx < dotsEnd) {
                pdf.text('.', dx, y);
                dx += 2.2;
            }

            pdf.setTextColor(30, 30, 30);
            pdf.setFontSize(sec.level === 1 ? 13 : 11);
            pdf.text(pageStr, ML + PW - pageNumW, y);

            y += sec.level === 1 ? 10 : 7.5;
            if (y > 265) { addFooter(); startNewPage(); addHeader(); }
        }

        addFooter();
    }

    /* ======== PASS 2: Render Content ======== */
    let isFirstContent = true;

    for (let bi = 0; bi < totalBlocks; bi++) {
        const block = blocks[bi];

        /* ---- HEADING ---- */
        if (block.type === 'heading') {
            const lvl = block.level || 1;
            let fSize, fontStyle;

            if (lvl === 1) { fSize = H1_SIZE; fontStyle = 'bold'; }
            else if (lvl === 2) { fSize = H2_SIZE; fontStyle = 'bold'; }
            else { fSize = H3_SIZE; fontStyle = 'bold'; }

            // Documentation mode: each h1/h2 starts a new page
            if (isDoc && (lvl === 1 || lvl === 2)) {
                if (!isFirstContent) addFooter();
                startNewPage();
                addHeader();
                isFirstContent = false;
            } else {
                const spaceBefore = lvl === 1 ? 12 : lvl === 2 ? 10 : 6;
                if (y > MT + 5) y += spaceBefore;
                ensureSpace(fSize * 0.6 + 12);
            }

            pdf.setFontSize(fSize);
            pdf.setFont('times', fontStyle);
            pdf.setTextColor(20, 20, 20);

            const lines = pdf.splitTextToSize(block.content, PW);
            for (const line of lines) {
                ensureSpace(fSize * 0.5);
                if (lvl === 1) {
                    pdf.text(line, 105, y, { align: 'center' });
                } else {
                    pdf.text(line, ML, y);
                }
                y += fSize * 0.5;
            }

            // Decorative line under heading
            if (lvl === 1) {
                y += 2;
                pdf.setDrawColor(50, 50, 50);
                pdf.setLineWidth(0.5);
                pdf.line(ML + PW*0.15, y, ML + PW*0.85, y);
                y += 8;
            } else if (lvl === 2) {
                y += 1.5;
                pdf.setDrawColor(150, 150, 150);
                pdf.setLineWidth(0.3);
                pdf.line(ML, y, ML + PW * 0.35, y);
                y += 6;
            } else {
                y += 4;
            }

        /* ---- PARAGRAPH ---- */
        } else if (block.type === 'paragraph') {
            ensureSpace(LINE_H + 4);
            pdf.setFontSize(BODY_SIZE);
            pdf.setFont('times', 'normal');
            pdf.setTextColor(35, 35, 35);

            const lines = pdf.splitTextToSize(block.content, PW);
            for (let li = 0; li < lines.length; li++) {
                ensureSpace(LINE_H);

                // Justify text (except last line of paragraph)
                if (li < lines.length - 1) {
                    // Calculate justified spacing
                    const words = lines[li].split(/\s+/).filter(Boolean);
                    const lineTextWidth = words.reduce((sum, w) => sum + pdf.getTextWidth(w), 0);
                    if (words.length > 1 && lineTextWidth > PW * 0.65) {
                        const totalGap = PW - lineTextWidth;
                        const gapPerSpace = totalGap / (words.length - 1);
                        let wx = ML;
                        for (let wi = 0; wi < words.length; wi++) {
                            pdf.text(words[wi], wx, y);
                            wx += pdf.getTextWidth(words[wi]) + gapPerSpace;
                        }
                    } else {
                        pdf.text(lines[li], ML, y);
                    }
                } else {
                    pdf.text(lines[li], ML, y);
                }
                y += LINE_H;
            }
            y += PARA_GAP;

        /* ---- LIST ---- */
        } else if (block.type === 'list') {
            ensureSpace(LINE_H + 4);
            pdf.setFontSize(BODY_SIZE);
            pdf.setFont('times', 'normal');
            pdf.setTextColor(35, 35, 35);

            for (let i = 0; i < block.items.length; i++) {
                ensureSpace(LINE_H + 2);

                const bullet = block.ordered ? `${i + 1}.` : '\u2022';
                const bulletW = pdf.getTextWidth(bullet + '  ');

                // Bullet/number
                pdf.text(bullet, ML + LIST_INDENT, y);

                // Item text with hanging indent
                const itemLines = pdf.splitTextToSize(block.items[i], PW - LIST_INDENT - bulletW - 2);
                for (let j = 0; j < itemLines.length; j++) {
                    ensureSpace(LINE_H);
                    const xPos = ML + LIST_INDENT + bulletW + (j === 0 ? 0 : LIST_HANG);
                    pdf.text(itemLines[j], xPos, y);
                    y += LINE_H;
                }
                y += 1; // small gap between list items
            }
            y += PARA_GAP - 1;
        }
    }

    // Final page footer
    addFooter();

    pdf.save(filename || 'assignment.pdf');
}
