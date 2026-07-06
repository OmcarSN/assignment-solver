/**
 * app.js — Main application controller.
 * Handles three output modes (Digital / Handwritten / Documentation),
 * content source switching, cover page upload, and rendering.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==== DOM refs ==== */
    const outputModes     = document.getElementById('output-modes');
    const srcQuick        = document.getElementById('src-quick');
    const srcPaste        = document.getElementById('src-paste');
    const topicInput      = document.getElementById('topic');
    const studentSection  = document.getElementById('student-text-section');
    const studentText     = document.getElementById('student-text');
    const formatInstr     = document.getElementById('format-instructions');
    const extraSection    = document.getElementById('extra-prompt-section');
    const extraPrompt     = document.getElementById('extra-prompt');
    const editModeGroup   = document.getElementById('edit-mode-group');
    const editModeSelect  = document.getElementById('edit-mode');

    // Handwritten options
    const hwOptions       = document.getElementById('hw-options');
    const inkColor        = document.getElementById('ink-color');
    const hwMistakes      = document.getElementById('hw-mistakes');
    const gallery         = document.getElementById('style-gallery');

    // Documentation options
    const docOptions      = document.getElementById('doc-options');
    const coverToggle     = document.getElementById('cover-page-toggle');
    const coverUploadSec  = document.getElementById('cover-upload-section');
    const uploadZone      = document.getElementById('upload-zone');
    const coverFileInput  = document.getElementById('cover-file');
    const coverPreview    = document.getElementById('cover-preview');
    const coverPreviewImg = document.getElementById('cover-preview-img');
    const removeCoverBtn  = document.getElementById('remove-cover');

    const generateBtn     = document.getElementById('generate-btn');

    // Output
    const outputSection   = document.getElementById('output-section');
    const loadingEl       = document.getElementById('loading');
    const loadingText     = document.getElementById('loading-text');
    const errorBar        = document.getElementById('error-bar');
    const warningBar      = document.getElementById('warning-bar');
    const digitalOutput   = document.getElementById('digital-output');
    const hwOutput        = document.getElementById('handwritten-output');
    const outputActions   = document.getElementById('output-actions');
    const downloadBtn     = document.getElementById('download-pdf');
    const regenerateBtn   = document.getElementById('regenerate-btn');
    const copyBtn         = document.getElementById('copy-btn');

    /* ==== State ==== */
    let outputMode    = 'digital';   // digital | handwritten | documentation
    let contentSource = 'quick';     // quick | paste
    let selectedStyle = 'normal';
    let currentBlocks = null;
    let coverPageData = null;        // base64 image string
    const engine      = new HandwritingEngine();

    /* ============ OUTPUT MODE SWITCHING ============ */
    outputModes.addEventListener('click', (e) => {
        const card = e.target.closest('.mode-card');
        if (!card) return;
        outputModes.querySelectorAll('.mode-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        outputMode = card.dataset.output;
        updateUI();
    });

    function updateUI() {
        // Show/hide mode-specific options
        toggle(hwOptions,  outputMode === 'handwritten');
        toggle(docOptions, outputMode === 'documentation');

        // Update generate button text
        if (outputMode === 'digital')       generateBtn.textContent = '📄 Generate Digital PDF';
        if (outputMode === 'handwritten')   generateBtn.textContent = '✍️ Generate Handwritten Notes';
        if (outputMode === 'documentation') generateBtn.textContent = '📋 Generate Documentation';

        // Update regenerate visibility based on mode
        updateSourceUI();
    }

    /* ============ CONTENT SOURCE SWITCHING ============ */
    function setSource(src) {
        contentSource = src;
        srcQuick.classList.toggle('active',  src === 'quick');
        srcPaste.classList.toggle('active',  src === 'paste');
        updateSourceUI();
    }

    function updateSourceUI() {
        toggle(extraSection,   contentSource === 'quick');
        toggle(studentSection, contentSource === 'paste');
        toggle(editModeGroup,  contentSource === 'paste');
    }

    srcQuick.addEventListener('click', () => setSource('quick'));
    srcPaste.addEventListener('click', () => setSource('paste'));

    /* ============ HANDWRITING GALLERY ============ */
    gallery.addEventListener('click', (e) => {
        const card = e.target.closest('.style-card');
        if (!card) return;
        gallery.querySelectorAll('.style-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedStyle = card.dataset.style;
    });

    /* ============ COVER PAGE UPLOAD ============ */
    coverToggle.addEventListener('change', () => {
        toggle(coverUploadSec, coverToggle.checked);
    });

    // Click to browse
    uploadZone.addEventListener('click', () => coverFileInput.click());

    // Drag & Drop
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });
    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });
    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        if (e.dataTransfer.files[0]) loadCoverImage(e.dataTransfer.files[0]);
    });

    coverFileInput.addEventListener('change', () => {
        if (coverFileInput.files[0]) loadCoverImage(coverFileInput.files[0]);
    });

    function loadCoverImage(file) {
        if (!file.type.startsWith('image/')) {
            showError('Please upload an image file (JPG, PNG).');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            coverPageData = e.target.result;
            coverPreviewImg.src = coverPageData;
            toggle(coverPreview, true);
            toggle(uploadZone, false);
        };
        reader.readAsDataURL(file);
    }

    removeCoverBtn.addEventListener('click', () => {
        coverPageData = null;
        coverFileInput.value = '';
        toggle(coverPreview, false);
        toggle(uploadZone, true);
    });

    /* ============ GENERATE ============ */
    generateBtn.addEventListener('click', async () => {
        hideUI();
        const topic = topicInput.value.trim();

        // Validation
        if (contentSource === 'quick') {
            if (!topic) return showError('Please enter a topic.');
        } else {
            if (!studentText.value.trim()) return showError('Please paste your text.');
        }

        showLoading(true);
        outputSection.classList.remove('hidden');

        try {
            let blocks;

            // Step 1: Get content
            if (contentSource === 'quick') {
                loadingText.textContent = 'Generating your assignment…';
                blocks = new TemplateGenerator()
                    .generate(topic, formatInstr.value.trim(), extraPrompt.value.trim()).blocks;
            } else {
                loadingText.textContent = 'Formatting your text…';
                const r = formatDocument(studentText.value, formatInstr.value.trim(), editModeSelect.value, topic);
                blocks = r.blocks;
                if (r.warning) showWarning(r.warning);
            }

            currentBlocks = blocks;
            if (!blocks || !blocks.length) return showError('No content generated.');

            // Step 2: Render based on output mode
            if (outputMode === 'handwritten') {
                await renderHandwritten(blocks);
            } else if (outputMode === 'documentation') {
                await renderDocumentation(blocks);
            } else {
                renderDigital(blocks);
            }

            outputActions.classList.remove('hidden');
        } catch (err) {
            console.error(err);
            showError(err.message || 'Something went wrong.');
        } finally { showLoading(false); }
    });

    /* ============ RENDER: HANDWRITTEN ============ */
    async function renderHandwritten(blocks) {
        loadingText.textContent = 'Rendering handwriting…';
        engine.setInkColor(inkColor.value);
        engine.setStyle(selectedStyle);
        engine.setMistakeLevel(hwMistakes.value);
        await engine.render(blocks, hwOutput);
        toggle(hwOutput, true);
        toggle(digitalOutput, false);
        downloadBtn.classList.remove('hidden');
        regenerateBtn.classList.remove('hidden');
        copyBtn.classList.add('hidden');
    }

    /* ============ RENDER: DIGITAL ============ */
    function renderDigital(blocks) {
        digitalOutput.innerHTML = '';
        for (const b of blocks) {
            let el;
            if (b.type === 'heading') { el = document.createElement(`h${b.level || 1}`); el.textContent = b.content; }
            else if (b.type === 'paragraph') { el = document.createElement('p'); el.textContent = b.content; }
            else if (b.type === 'list') {
                el = document.createElement(b.ordered ? 'ol' : 'ul');
                for (const it of b.items) { const li = document.createElement('li'); li.textContent = it; el.appendChild(li); }
            }
            if (el) digitalOutput.appendChild(el);
        }
        toggle(digitalOutput, true);
        toggle(hwOutput, false);
        downloadBtn.classList.remove('hidden');
        regenerateBtn.classList.add('hidden');
        copyBtn.classList.remove('hidden');
    }

    /* ============ RENDER: DOCUMENTATION ============ */
    async function renderDocumentation(blocks) {
        loadingText.textContent = 'Creating documentation…';

        // Render as digital content first
        renderDigital(blocks);

        // For documentation, enable PDF download
        downloadBtn.classList.remove('hidden');
        copyBtn.classList.remove('hidden');
        regenerateBtn.classList.add('hidden');
    }

    /* ============ REGENERATE ============ */
    regenerateBtn.addEventListener('click', async () => {
        if (!currentBlocks) return;
        hideUI();
        showLoading(true);
        outputSection.classList.remove('hidden');
        try {
            await renderHandwritten(currentBlocks);
            outputActions.classList.remove('hidden');
        } catch (err) { showError(err.message); }
        finally { showLoading(false); }
    });

    /* ============ PDF DOWNLOAD ============ */
    downloadBtn.addEventListener('click', async () => {
        const filename = (topicInput.value.trim() || 'assignment').replace(/\s+/g, '_') + '.pdf';

        if (outputMode === 'handwritten') {
            // Handwritten: canvas pages to PDF
            exportToPDF(engine.getCanvases(), filename, coverPageData);
        } else {
            // Digital / Documentation: generate clean PDF from blocks
            await exportDigitalPDF(currentBlocks, filename,
                outputMode === 'documentation' ? coverPageData : null,
                outputMode);
        }
    });

    /* ============ COPY ============ */
    copyBtn.addEventListener('click', () => {
        const text = digitalOutput.innerText;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.textContent = '✅ Copied!';
                setTimeout(() => copyBtn.textContent = '📋 Copy Text', 2000);
            }).catch(() => {
                _fallbackCopy(text);
            });
        } else {
            _fallbackCopy(text);
        }
    });

    function _fallbackCopy(text) {
        const ta = document.createElement('textarea');
        ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); copyBtn.textContent = '✅ Copied!'; }
        catch(e) { copyBtn.textContent = '❌ Copy failed'; }
        document.body.removeChild(ta);
        setTimeout(() => copyBtn.textContent = '📋 Copy Text', 2000);
    }

    /* ============ HELPERS ============ */
    function toggle(el, show) { if (el) el.classList.toggle('hidden', !show); }
    function hideUI() {
        errorBar.classList.add('hidden');
        warningBar.classList.add('hidden');
        digitalOutput.classList.add('hidden');
        hwOutput.classList.add('hidden');
        outputActions.classList.add('hidden');
    }
    function showLoading(s) { loadingEl.classList.toggle('hidden', !s); generateBtn.disabled = s; }
    function showError(m) {
        showLoading(false);
        errorBar.textContent = '⚠️ ' + m;
        errorBar.classList.remove('hidden');
        outputSection.classList.remove('hidden');
    }
    function showWarning(m) { warningBar.textContent = '💡 ' + m; warningBar.classList.remove('hidden'); }

    /* ==== Init ==== */
    updateUI();
    setSource('quick');
});
