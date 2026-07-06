/**
 * Document Formatter
 *
 * Restructures student-provided text into academic format blocks.
 * STRICT RULES:
 *   1. Uses ONLY text present in studentText — never adds new content.
 *   2. Job is purely structural: headings, numbering, paragraphs, lists.
 *   3. Preserves original wording unless editMode === 'polish'.
 *   4. Reports a warning when content is too thin for the requested format.
 *
 * Returns { warning: string|null, blocks: Block[] }
 *   Block = { type:'heading', level:1|2|3, content:string }
 *         | { type:'paragraph', content:string }
 *         | { type:'list', items:string[], ordered:boolean }
 */

/* ============================================================
   POLISH helpers (only used when editMode === 'polish')
   ============================================================ */

function _capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function _polishText(text) {
    let t = text;
    // collapse multiple spaces
    t = t.replace(/ {2,}/g, ' ');
    // capitalise after sentence-ending punctuation
    t = t.replace(/([.!?])\s+([a-z])/g, (_, p, c) => p + ' ' + c.toUpperCase());
    // capitalise first char
    t = _capitalize(t.trim());
    // ensure trailing period
    if (t && !/[.!?]$/.test(t)) t += '.';
    return t;
}

/* ============================================================
   Detect raw structure inside student text
   ============================================================ */

function _parseRawSegments(text) {
    // Split on blank lines → raw paragraphs
    const rawParagraphs = text.split(/\n{2,}/).map(s => s.trim()).filter(Boolean);
    const segments = [];

    for (const para of rawParagraphs) {
        const lines = para.split('\n').map(l => l.trim()).filter(Boolean);

        // Detect list block: every line starts with - / * / •  or  1. 2. etc.
        const isBulletList  = lines.every(l => /^[-*•]\s/.test(l));
        const isNumberList  = lines.every(l => /^\d+[.)]\s/.test(l));

        if (isBulletList) {
            segments.push({
                type: 'list',
                ordered: false,
                items: lines.map(l => l.replace(/^[-*•]\s+/, ''))
            });
        } else if (isNumberList) {
            segments.push({
                type: 'list',
                ordered: true,
                items: lines.map(l => l.replace(/^\d+[.)]\s+/, ''))
            });
        } else if (lines.length === 1 && lines[0].length < 80 &&
                   !/[.!?]$/.test(lines[0])) {
            // Short line without sentence-ending punctuation → treat as heading
            segments.push({ type: 'heading', content: lines[0] });
        } else {
            segments.push({ type: 'paragraph', content: lines.join(' ') });
        }
    }
    return segments;
}

/* ============================================================
   Format-instruction parser — detect requested academic style
   ============================================================ */

function _detectFormat(instruction) {
    if (!instruction) return 'default';
    const low = instruction.toLowerCase();

    if (/\bessay\b/.test(low))                     return 'essay';
    if (/\breport\b/.test(low))                    return 'report';
    if (/\bnotes?\b/.test(low))                    return 'notes';
    if (/\bletter\b/.test(low))                    return 'letter';
    if (/\bq\s*[&/]\s*a\b|\bquestion.answer/.test(low)) return 'qa';
    if (/\bsummar/.test(low))                      return 'summary';
    if (/\bresearch/.test(low))                    return 'research';
    if (/\bparagraph/.test(low))                   return 'paragraph';
    if (/\bpresentation\b/.test(low))              return 'presentation';
    if (/\bproject\b/.test(low))                   return 'project';

    return 'default';
}

/* ============================================================
   Apply academic format templates
   ============================================================ */

function _applyFormat(segments, formatType, topic) {
    const blocks = [];
    const paras  = segments.filter(s => s.type === 'paragraph');
    const lists  = segments.filter(s => s.type === 'list');
    const heads  = segments.filter(s => s.type === 'heading');

    const addTitle = () => {
        if (topic) blocks.push({ type: 'heading', level: 1, content: topic });
    };

    /* Fallback: just output segments as-is with a title */
    const outputRaw = () => {
        addTitle();
        for (const seg of segments) {
            if (seg.type === 'heading') {
                blocks.push({ type: 'heading', level: 2, content: seg.content });
            } else {
                blocks.push(seg);
            }
        }
    };

    switch (formatType) {

        case 'essay': {
            addTitle();
            const sections = ['Introduction', 'Discussion', 'Conclusion'];
            if (paras.length === 0 && segments.length > 0) { outputRaw(); break; }

            const perSection = Math.max(1, Math.ceil(paras.length / sections.length));
            let idx = 0;
            for (const sec of sections) {
                blocks.push({ type: 'heading', level: 2, content: sec });
                const end = Math.min(idx + perSection, paras.length);
                for (; idx < end; idx++) blocks.push(paras[idx]);
                if (idx >= paras.length) break;
            }
            // Remaining lists / inline heads
            for (const l of lists) blocks.push(l);
            break;
        }

        case 'report': {
            addTitle();
            const secs = ['Introduction', 'Methodology', 'Findings', 'Conclusion'];
            if (paras.length === 0) { outputRaw(); break; }

            const per = Math.max(1, Math.ceil(paras.length / secs.length));
            let idx = 0;
            for (const sec of secs) {
                blocks.push({ type: 'heading', level: 2, content: sec });
                const end = Math.min(idx + per, paras.length);
                for (; idx < end; idx++) blocks.push(paras[idx]);
                if (idx >= paras.length) break;
            }
            for (const l of lists) blocks.push(l);
            break;
        }

        case 'notes': {
            addTitle();
            // Convert all paragraphs into list items
            if (paras.length > 0) {
                blocks.push({
                    type: 'list',
                    ordered: false,
                    items: paras.map(p => p.content)
                });
            }
            for (const l of lists) blocks.push(l);
            break;
        }

        case 'summary': {
            addTitle();
            blocks.push({ type: 'heading', level: 2, content: 'Summary' });
            for (const p of paras) blocks.push(p);
            for (const l of lists) blocks.push(l);
            break;
        }

        case 'qa': {
            addTitle();
            // Pair paragraphs as question / answer
            for (let i = 0; i < paras.length; i += 2) {
                blocks.push({ type: 'heading', level: 3, content: `Q${Math.floor(i/2)+1}: ${paras[i].content}` });
                if (paras[i + 1]) {
                    blocks.push({ type: 'paragraph', content: `Ans: ${paras[i + 1].content}` });
                }
            }
            for (const l of lists) blocks.push(l);
            break;
        }

        case 'letter': {
            if (topic) blocks.push({ type: 'heading', level: 2, content: 'Subject: ' + topic });
            blocks.push({ type: 'paragraph', content: 'Respected Sir/Madam,' });
            for (const p of paras) blocks.push(p);
            blocks.push({ type: 'paragraph', content: 'Yours faithfully,' });
            // Note: the salutation lines are structural, not new content
            break;
        }

        case 'project':
        case 'research': {
            addTitle();
            const secs = ['Introduction', 'Objective', 'Literature Review', 'Analysis', 'Conclusion'];
            if (paras.length === 0) { outputRaw(); break; }
            const per = Math.max(1, Math.ceil(paras.length / secs.length));
            let idx = 0;
            for (const sec of secs) {
                blocks.push({ type: 'heading', level: 2, content: sec });
                const end = Math.min(idx + per, paras.length);
                for (; idx < end; idx++) blocks.push(paras[idx]);
                if (idx >= paras.length) break;
            }
            for (const l of lists) blocks.push(l);
            break;
        }

        case 'presentation': {
            addTitle();
            // Each paragraph becomes a slide heading + content
            for (let i = 0; i < paras.length; i++) {
                blocks.push({ type: 'heading', level: 2, content: `Slide ${i + 1}` });
                blocks.push(paras[i]);
            }
            for (const l of lists) blocks.push(l);
            break;
        }

        default:
            outputRaw();
    }

    return blocks;
}

/* ============================================================
   PUBLIC API
   ============================================================ */

/**
 * @param {string} studentText   — raw text written by the student
 * @param {string} formatInstr   — e.g. "essay format with intro & conclusion"
 * @param {string} editMode      — 'preserve' | 'polish'
 * @param {string} topic         — assignment title / topic
 * @returns {{ warning: string|null, blocks: object[] }}
 */
function formatDocument(studentText, formatInstr, editMode, topic) {
    const result = { warning: null, blocks: [] };

    if (!studentText || !studentText.trim()) {
        result.warning = 'No student text provided. Please paste your content.';
        return result;
    }

    let text = studentText.trim();

    /* Polish mode */
    if (editMode === 'polish') {
        // Polish each paragraph independently
        text = text.split(/\n{2,}/)
            .map(p => _polishText(p.trim()))
            .join('\n\n');
    }

    const segments   = _parseRawSegments(text);
    const formatType = _detectFormat(formatInstr);

    result.blocks = _applyFormat(segments, formatType, topic);

    /* Thin-content warning */
    const wordCount = text.split(/\s+/).length;
    if (wordCount < 40) {
        result.warning = `The provided text is quite short (${wordCount} words). The formatted output may appear sparse for the requested format.`;
    }

    return result;
}
