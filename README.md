# Assignment Solver

Generate student assignments as **Digital PDF**, **Realistic Handwritten Notes**, or **Formal Documentation** — all from your browser, no server needed.

## ✨ Features

- **3 Output Modes**: Digital PDF, Handwritten Notes, Documentation
- **Quick Generate**: 22-topic knowledge base with accurate content
- **Paste Text**: Auto-format your own text
- **10 Handwriting Styles**: Normal, Neat, Messy, Round, Small, Bold, Light, Cursive, Left Slant, Print
- **13-Layer Realistic Paper**: Paper fibers, aging, fingerprint smudges, punch holes, ink pooling
- **Professional PDF Export**: Times New Roman, justified text, page numbers, A4 standard
- **Documentation Mode**: Table of Contents, per-section page breaks, cover page upload
- **Page Count Support**: Type "20 pages" in instructions to get 20 pages of content

## 🚀 Live Demo

[View on Vercel →](https://assignments-nine-blue.vercel.app)

## 🛠️ Tech Stack

- Vanilla HTML, CSS, JavaScript (no frameworks)
- Canvas API for handwriting rendering
- jsPDF for PDF generation
- Google Fonts for handwriting styles

## 📁 Project Structure

```
assignments/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── app.js                  # Main controller
    ├── formatter.js            # Paste text formatter
    ├── template-generator.js   # Knowledge base + content generation
    ├── handwriting.js          # Canvas handwriting engine
    └── pdf-export.js           # PDF export (digital + handwritten)
```

## 📄 License

MIT
