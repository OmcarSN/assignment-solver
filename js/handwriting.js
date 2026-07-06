/**
 * HandwritingEngine v8 — Multi-font mixing + 10 styles + human mistakes.
 *
 * KEY REALISM: Each style uses 2-3 fonts. Different WORDS randomly use
 * different fonts from the pool, so the same letter looks different
 * each time — just like real handwriting where no two 'a's are identical.
 */

class HandwritingEngine {

    static STYLES = {
        normal: {
            fonts: ['Kalam', 'Caveat', 'Handlee'], fontSize: 18,
            slant: [0.07,0.12], charRotMax: [0.018,0.035],
            charSzVar: [0.28,0.55], charXVar: [0.20,0.40], charYVar: [0.15,0.35],
            charScXVar: [0.015,0.035], charScYVar: [0.008,0.020],
            inkBase: [0.92,0.98], charSpAdd: [-0.3,0.1], charSpVar: [0.18,0.40],
            wordYShift: [0.20,0.50], wordSzVar: [0.12,0.28], wordSpVar: [1.5,3.0],
            wordSpStretch: [0.45,1.65],
            lineMarVar: [1.2,2.5], strokeW: [0.12,0.28], strokeOp: [0.12,0.25],
            mistakes: 0.015,
        },
        neat: {
            fonts: ['Architects Daughter', 'Patrick Hand'], fontSize: 16,
            slant: [0.02,0.05], charRotMax: [0.004,0.012],
            charSzVar: [0.06,0.16], charXVar: [0.06,0.16], charYVar: [0.04,0.12],
            charScXVar: [0.005,0.015], charScYVar: [0.003,0.010],
            inkBase: [0.93,0.99], charSpAdd: [-0.05,0.20], charSpVar: [0.06,0.18],
            wordYShift: [0.05,0.15], wordSzVar: [0.04,0.12], wordSpVar: [0.3,0.8],
            wordSpStretch: [0.70,1.30],
            lineMarVar: [0.5,1.2], strokeW: [0.10,0.20], strokeOp: [0.10,0.18],
            mistakes: 0.003,
        },
        messy: {
            fonts: ['Caveat', 'Kalam', 'Handlee'], fontSize: 20,
            slant: [0.10,0.18], charRotMax: [0.035,0.065],
            charSzVar: [0.50,0.95], charXVar: [0.35,0.60], charYVar: [0.25,0.55],
            charScXVar: [0.025,0.055], charScYVar: [0.015,0.035],
            inkBase: [0.85,0.95], charSpAdd: [-0.7,-0.1], charSpVar: [0.30,0.60],
            wordYShift: [0.40,0.90], wordSzVar: [0.25,0.50], wordSpVar: [2.5,5.0],
            wordSpStretch: [0.30,1.85],
            lineMarVar: [2.0,4.0], strokeW: [0.15,0.35], strokeOp: [0.15,0.30],
            mistakes: 0.04,
        },
        round: {
            fonts: ['Coming Soon', 'Indie Flower'], fontSize: 17,
            slant: [0.01,0.04], charRotMax: [0.006,0.018],
            charSzVar: [0.12,0.30], charXVar: [0.10,0.25], charYVar: [0.08,0.22],
            charScXVar: [0.010,0.025], charScYVar: [0.008,0.018],
            inkBase: [0.90,0.97], charSpAdd: [0.0,0.35], charSpVar: [0.10,0.28],
            wordYShift: [0.10,0.30], wordSzVar: [0.08,0.22], wordSpVar: [0.8,1.8],
            wordSpStretch: [0.55,1.50],
            lineMarVar: [0.8,1.8], strokeW: [0.10,0.22], strokeOp: [0.10,0.20],
            mistakes: 0.008,
        },
        small: {
            fonts: ['Kalam', 'Patrick Hand'], fontSize: 14,
            slant: [0.05,0.10], charRotMax: [0.010,0.025],
            charSzVar: [0.12,0.28], charXVar: [0.10,0.22], charYVar: [0.06,0.18],
            charScXVar: [0.010,0.025], charScYVar: [0.006,0.015],
            inkBase: [0.90,0.97], charSpAdd: [-0.5,-0.15], charSpVar: [0.12,0.30],
            wordYShift: [0.10,0.25], wordSzVar: [0.08,0.18], wordSpVar: [0.8,1.5],
            wordSpStretch: [0.50,1.45],
            lineMarVar: [0.8,1.8], strokeW: [0.08,0.18], strokeOp: [0.08,0.18],
            mistakes: 0.01,
        },
        bold: {
            fonts: ['Handlee', 'Kalam'], fontSize: 19,
            slant: [0.06,0.11], charRotMax: [0.014,0.030],
            charSzVar: [0.22,0.48], charXVar: [0.16,0.35], charYVar: [0.12,0.28],
            charScXVar: [0.012,0.030], charScYVar: [0.008,0.020],
            inkBase: [0.94,1.0], charSpAdd: [-0.15,0.15], charSpVar: [0.15,0.35],
            wordYShift: [0.15,0.40], wordSzVar: [0.12,0.25], wordSpVar: [1.0,2.5],
            wordSpStretch: [0.50,1.55],
            lineMarVar: [1.0,2.2], strokeW: [0.30,0.60], strokeOp: [0.20,0.40],
            mistakes: 0.012,
        },
        light: {
            fonts: ['Shadows Into Light', 'Indie Flower'], fontSize: 19,
            slant: [0.04,0.08], charRotMax: [0.008,0.022],
            charSzVar: [0.18,0.38], charXVar: [0.12,0.28], charYVar: [0.08,0.22],
            charScXVar: [0.010,0.025], charScYVar: [0.006,0.016],
            inkBase: [0.72,0.85], charSpAdd: [0.1,0.45], charSpVar: [0.12,0.30],
            wordYShift: [0.10,0.30], wordSzVar: [0.08,0.22], wordSpVar: [0.8,1.8],
            wordSpStretch: [0.55,1.50],
            lineMarVar: [0.8,1.8], strokeW: [0.04,0.10], strokeOp: [0.05,0.12],
            mistakes: 0.005,
        },
        cursive: {
            fonts: ['Shadows Into Light', 'Caveat'], fontSize: 20,
            slant: [0.08,0.15], charRotMax: [0.010,0.026],
            charSzVar: [0.18,0.42], charXVar: [0.12,0.30], charYVar: [0.10,0.26],
            charScXVar: [0.012,0.028], charScYVar: [0.008,0.018],
            inkBase: [0.85,0.95], charSpAdd: [-0.6,-0.15], charSpVar: [0.15,0.35],
            wordYShift: [0.15,0.40], wordSzVar: [0.10,0.25], wordSpVar: [1.0,2.5],
            wordSpStretch: [0.40,1.60],
            lineMarVar: [1.0,2.2], strokeW: [0.12,0.25], strokeOp: [0.12,0.22],
            mistakes: 0.01,
        },
        leftSlant: {
            fonts: ['Kalam', 'Handlee'], fontSize: 18,
            slant: [-0.13,-0.06], charRotMax: [0.015,0.032],
            charSzVar: [0.25,0.50], charXVar: [0.18,0.38], charYVar: [0.12,0.30],
            charScXVar: [0.015,0.035], charScYVar: [0.008,0.020],
            inkBase: [0.86,0.95], charSpAdd: [-0.3,0.1], charSpVar: [0.18,0.40],
            wordYShift: [0.20,0.50], wordSzVar: [0.12,0.28], wordSpVar: [1.5,3.0],
            wordSpStretch: [0.45,1.65],
            lineMarVar: [1.2,2.5], strokeW: [0.12,0.28], strokeOp: [0.12,0.25],
            mistakes: 0.015,
        },
        print: {
            fonts: ['Patrick Hand', 'Architects Daughter'], fontSize: 16,
            slant: [-0.01,0.02], charRotMax: [0.003,0.010],
            charSzVar: [0.06,0.18], charXVar: [0.06,0.18], charYVar: [0.04,0.14],
            charScXVar: [0.005,0.015], charScYVar: [0.003,0.010],
            inkBase: [0.92,0.98], charSpAdd: [0.2,0.55], charSpVar: [0.08,0.20],
            wordYShift: [0.05,0.18], wordSzVar: [0.04,0.14], wordSpVar: [0.5,1.2],
            wordSpStretch: [0.65,1.35],
            lineMarVar: [0.5,1.2], strokeW: [0.10,0.20], strokeOp: [0.10,0.18],
            mistakes: 0.004,
        },
    };

    constructor() {
        this.PAGE_W=794; this.PAGE_H=1123; this.DPR=3;
        this.MARGIN_LEFT=100; this.MARGIN_RIGHT=50;
        this.MARGIN_TOP=80; this.MARGIN_BOTTOM=40;
        this.LINE_HEIGHT=32; this.PARAGRAPH_INDENT=28;
        this.MAX_LINES=Math.floor((this.PAGE_H-this.MARGIN_TOP-this.MARGIN_BOTTOM)/this.LINE_HEIGHT);
        this.inkColor='blue'; this.currentStyle='normal'; this.mistakeLevel='few';
        this.personality=null; this.charBiasMap=null; this.pages=[];
        this.fontPool=[];
    }

    setStyle(n)       { this.currentStyle=n; }
    setMistakeLevel(l){ this.mistakeLevel=l; }
    setInkColor(c)    { this.inkColor=c; }
    _r(a,b)           { return a+Math.random()*(b-a); }
    _lineY(i)         { return this.MARGIN_TOP+i*this.LINE_HEIGHT; }

    /** Pick a random font from the pool — primary 65%, alternates share 35% */
    _pickFont() {
        if (this.fontPool.length <= 1) return this.fontPool[0];
        return Math.random() < 0.65
            ? this.fontPool[0]
            : this.fontPool[Math.floor(Math.random() * this.fontPool.length)];
    }

    _buildCharBias() {
        this.charBiasMap={};
        for(const ch of 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,;:!?\'-"()'){
            const c=ch.charCodeAt(0);
            this.charBiasMap[ch]={
                rot:((c*7+13)%17-8)*0.004, sz:((c*11+5)%13-6)*0.055,
                x:((c*3+7)%11-5)*0.045, y:((c*13+3)%9-4)*0.035,
                scX:((c*5+11)%15-7)*0.004, scY:((c*9+2)%11-5)*0.003,
            };
        }
    }
    _cb(ch){return this.charBiasMap[ch]||{rot:0,sz:0,x:0,y:0,scX:0,scY:0};}

    _genPersonality() {
        const s=HandwritingEngine.STYLES[this.currentStyle]||HandwritingEngine.STYLES.normal;
        this.fontPool=s.fonts;
        const R=(a)=>this._r(a[0],a[1]);
        let mR=s.mistakes;
        if(this.mistakeLevel==='none') mR=0;
        else if(this.mistakeLevel==='some') mR*=2.5;

        this.personality={
            fontSize:s.fontSize, slant:R(s.slant),
            charRotMax:R(s.charRotMax), charSzVar:R(s.charSzVar),
            charXVar:R(s.charXVar), charYVar:R(s.charYVar),
            charScXVar:R(s.charScXVar), charScYVar:R(s.charScYVar),
            inkBase:R(s.inkBase), inkVar:this._r(0.015,0.045),
            charSpAdd:R(s.charSpAdd), charSpVar:R(s.charSpVar),
            wordYShift:R(s.wordYShift), wordSzVar:R(s.wordSzVar),
            wordSpVar:R(s.wordSpVar), wordSpStretchMin:s.wordSpStretch[0], wordSpStretchMax:s.wordSpStretch[1],
            lineMarVar:R(s.lineMarVar),
            lineAngle:this._r(-0.0008,0.0008),
            strokeW:R(s.strokeW), strokeOp:R(s.strokeOp),
            strikeRate:mR, overwriteRate:mR*0.6, blobRate:mR*0.2,
        };
        this._buildCharBias();
    }

    /**
     * Ink color — calibrated to match real Indian ballpoint pens.
     * Blue: Reynolds/Cello navy (HSL ~228, 75%, 18%)
     * Black: Warm near-black (not pure black — real pens have warm tone)
     * Each call has micro-variations in hue/sat/light for natural ink inconsistency.
     */
    _ink(op){
        if(this.inkColor==='blue'){
            // Reynolds blue: deep navy with natural variation
            const h = 228 + this._r(-5, 5);       // hue wobble
            const s = 75 + this._r(-8, 6);         // saturation shift (ink pooling)
            const l = 18 + this._r(-3, 3);         // lightness (pressure = darker)
            return `hsla(${h},${s}%,${l}%,${op})`;
        }
        // Black pen: warm near-black (like Cello Gripper)
        const h = 220 + this._r(-10, 10);
        const s = 8 + this._r(-4, 4);
        const l = 6 + this._r(-2, 3);
        return `hsla(${h},${s}%,${l}%,${op})`;
    }

    _drawPaper(ctx){
        const W = this.PAGE_W, H = this.PAGE_H;

        /* ---- 1. Base paper — realistic off-white with warm gradient ---- */
        const baseGrad = ctx.createRadialGradient(W*0.45, H*0.4, 80, W*0.5, H*0.5, W*0.9);
        baseGrad.addColorStop(0, '#faf8f3');
        baseGrad.addColorStop(0.3, '#f8f6f0');
        baseGrad.addColorStop(0.7, '#f5f2eb');
        baseGrad.addColorStop(1, '#eeeae2');
        ctx.fillStyle = baseGrad;
        ctx.fillRect(0, 0, W, H);

        /* ---- 2. Uneven yellowing (natural paper aging) ---- */
        for (let i = 0; i < 6; i++) {
            const gx = this._r(W*0.1, W*0.9), gy = this._r(H*0.1, H*0.9);
            const gr = ctx.createRadialGradient(gx, gy, 0, gx, gy, this._r(60, 200));
            gr.addColorStop(0, `rgba(${210+this._r(0,20)},${195+this._r(0,15)},${160+this._r(0,20)},${this._r(0.01,0.03)})`);
            gr.addColorStop(1, 'rgba(200,190,160,0)');
            ctx.fillStyle = gr;
            ctx.fillRect(0, 0, W, H);
        }

        /* ---- 3. Dense paper fiber texture (horizontal + diagonal) ---- */
        for(let i = 0; i < 3500; i++){
            const x = Math.random() * W, y = Math.random() * H;
            const r = 155+Math.random()*45, g = 145+Math.random()*40, b = 125+Math.random()*35;
            ctx.fillStyle = `rgba(${r},${g},${b},${Math.random()*0.022})`;
            ctx.fillRect(x, y, this._r(0.5, 3.5), this._r(0.1, 0.5));
        }
        // Diagonal micro-fibers (paper grain)
        for(let i = 0; i < 1200; i++){
            ctx.save();
            ctx.globalAlpha = this._r(0.005, 0.016);
            ctx.strokeStyle = `rgb(${165+this._r(0,30)},${155+this._r(0,25)},${135+this._r(0,20)})`;
            ctx.lineWidth = this._r(0.1, 0.4);
            const fx = Math.random()*W, fy = Math.random()*H;
            ctx.beginPath();
            ctx.moveTo(fx, fy);
            ctx.lineTo(fx + this._r(-3, 3), fy + this._r(0.5, 2.5));
            ctx.stroke();
            ctx.restore();
        }

        /* ---- 4. Cellulose speckles & impurities ---- */
        for(let i = 0; i < 700; i++){
            const op = this._r(0.008, 0.028);
            const sz = this._r(0.2, 1.2);
            ctx.fillStyle = `rgba(${135+this._r(0,55)},${125+this._r(0,45)},${95+this._r(0,45)},${op})`;
            ctx.beginPath();
            ctx.arc(Math.random()*W, Math.random()*H, sz, 0, Math.PI*2);
            ctx.fill();
        }

        /* ---- 5. Edge shadows (paper thickness visible in xerox) ---- */
        const topGrad = ctx.createLinearGradient(0, 0, 0, 45);
        topGrad.addColorStop(0, 'rgba(175,165,145,0.07)');
        topGrad.addColorStop(0.4, 'rgba(175,165,145,0.02)');
        topGrad.addColorStop(1, 'rgba(175,165,145,0)');
        ctx.fillStyle = topGrad; ctx.fillRect(0, 0, W, 45);

        const btmGrad = ctx.createLinearGradient(0, H-50, 0, H);
        btmGrad.addColorStop(0, 'rgba(170,160,140,0)');
        btmGrad.addColorStop(0.5, 'rgba(170,160,140,0.03)');
        btmGrad.addColorStop(1, 'rgba(170,160,140,0.09)');
        ctx.fillStyle = btmGrad; ctx.fillRect(0, H-50, W, 50);

        const leftGrad = ctx.createLinearGradient(0, 0, 28, 0);
        leftGrad.addColorStop(0, 'rgba(155,145,125,0.07)');
        leftGrad.addColorStop(0.3, 'rgba(155,145,125,0.03)');
        leftGrad.addColorStop(1, 'rgba(155,145,125,0)');
        ctx.fillStyle = leftGrad; ctx.fillRect(0, 0, 28, H);

        const rightGrad = ctx.createLinearGradient(W-22, 0, W, 0);
        rightGrad.addColorStop(0, 'rgba(155,145,125,0)');
        rightGrad.addColorStop(0.6, 'rgba(155,145,125,0.02)');
        rightGrad.addColorStop(1, 'rgba(155,145,125,0.06)');
        ctx.fillStyle = rightGrad; ctx.fillRect(W-22, 0, 22, H);

        /* ---- 6. Subtle corner dog-ear shadow (random corner) ---- */
        if (Math.random() < 0.6) {
            ctx.save();
            const corner = Math.random() < 0.5 ? 'br' : 'tr';
            const csz = this._r(12, 25);
            if (corner === 'br') {
                const cg = ctx.createRadialGradient(W - csz*0.5, H - csz*0.5, 0, W-csz*0.5, H-csz*0.5, csz*1.5);
                cg.addColorStop(0, 'rgba(160,150,130,0.06)');
                cg.addColorStop(1, 'rgba(160,150,130,0)');
                ctx.fillStyle = cg;
                ctx.beginPath();
                ctx.moveTo(W, H); ctx.lineTo(W - csz, H); ctx.lineTo(W, H - csz);
                ctx.fill();
            } else {
                const cg = ctx.createRadialGradient(W - csz*0.5, csz*0.5, 0, W-csz*0.5, csz*0.5, csz*1.5);
                cg.addColorStop(0, 'rgba(160,150,130,0.05)');
                cg.addColorStop(1, 'rgba(160,150,130,0)');
                ctx.fillStyle = cg;
                ctx.beginPath();
                ctx.moveTo(W, 0); ctx.lineTo(W - csz, 0); ctx.lineTo(W, csz);
                ctx.fill();
            }
            ctx.restore();
        }

        /* ---- 7. Fold crease (vertical, slightly off center) ---- */
        ctx.save();
        ctx.globalAlpha = 0.028;
        ctx.strokeStyle = 'rgba(140,130,110,1)';
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        const cx = W * 0.5 + this._r(-4, 4);
        ctx.moveTo(cx, 0);
        for(let yy = 0; yy < H; yy += 15) {
            ctx.lineTo(cx + this._r(-0.5, 0.5), yy);
        }
        ctx.stroke();
        ctx.restore();

        /* ---- 8. Hand oil / fingerprint smudges (very subtle) ---- */
        const smudges = Math.floor(this._r(1, 4));
        for (let i = 0; i < smudges; i++) {
            ctx.save();
            const sx = this._r(W*0.15, W*0.85);
            const sy = this._r(H*0.1, H*0.9);
            const sr = this._r(15, 40);
            const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
            sg.addColorStop(0, `rgba(${185+this._r(0,15)},${175+this._r(0,10)},${155+this._r(0,10)},${this._r(0.012, 0.025)})`);
            sg.addColorStop(0.5, `rgba(185,175,155,${this._r(0.005, 0.012)})`);
            sg.addColorStop(1, 'rgba(185,175,155,0)');
            ctx.fillStyle = sg;
            ctx.beginPath();
            ctx.ellipse(sx, sy, sr * this._r(0.8, 1.3), sr * this._r(0.6, 1.0), this._r(0, Math.PI), 0, Math.PI*2);
            ctx.fill();
            ctx.restore();
        }

        /* ---- 9. Ruled lines (realistic blue ink with pooling) ---- */
        for(let i = 0; i < this.MAX_LINES; i++){
            const y = this._lineY(i);
            if(y > H - 20) break;
            const opacity = 0.24 + Math.random() * 0.08;
            const thickness = 0.4 + Math.random() * 0.22;
            ctx.strokeStyle = `rgba(42,105,200,${opacity})`;
            ctx.lineWidth = thickness;
            ctx.beginPath();
            ctx.moveTo(0, y + this._r(-0.12, 0.12));
            const segments = 16;
            for(let s = 1; s <= segments; s++){
                const sx = (W / segments) * s;
                const sy = y + this._r(-0.2, 0.2);
                ctx.lineTo(sx, sy);
            }
            ctx.stroke();

            // Ink pooling at margin intersection
            const poolX = this.MARGIN_LEFT - 12;
            if (Math.random() < 0.35) {
                ctx.save();
                ctx.fillStyle = `rgba(42,105,200,${this._r(0.04, 0.10)})`;
                ctx.beginPath();
                ctx.arc(poolX, y, this._r(0.6, 1.5), 0, Math.PI*2);
                ctx.fill();
                ctx.restore();
            }
        }

        /* ---- 10. Red margin lines (authentic look) ---- */
        const mx = this.MARGIN_LEFT - 12;
        ctx.strokeStyle = `rgba(192,48,48,${0.32 + Math.random()*0.10})`;
        ctx.lineWidth = 0.8 + Math.random() * 0.2;
        ctx.beginPath();
        ctx.moveTo(mx + this._r(-0.15, 0.15), 0);
        for(let yy = 0; yy < H; yy += 25){
            ctx.lineTo(mx + this._r(-0.2, 0.2), yy);
        }
        ctx.lineTo(mx + this._r(-0.15, 0.15), H);
        ctx.stroke();

        ctx.strokeStyle = `rgba(192,48,48,${0.14 + Math.random()*0.07})`;
        ctx.lineWidth = 0.45 + Math.random() * 0.15;
        ctx.beginPath();
        const mx2 = mx - 4.5 + this._r(-0.3, 0.3);
        ctx.moveTo(mx2, 0);
        for(let yy = 0; yy < H; yy += 30){
            ctx.lineTo(mx2 + this._r(-0.12, 0.12), yy);
        }
        ctx.lineTo(mx2, H);
        ctx.stroke();

        /* ---- 11. Punch holes (realistic with depth) ---- */
        const holeX = 28;
        const holePositions = [H * 0.18, H * 0.5, H * 0.82];
        for(const hy of holePositions){
            ctx.save();
            // Outer shadow (hole pressed into paper)
            ctx.beginPath();
            ctx.arc(holeX + 1.5, hy + 1.5, 10, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(145,135,115,0.06)';
            ctx.fill();
            // Hole cutout (lighter than paper — shows desk underneath)
            ctx.beginPath();
            ctx.arc(holeX, hy, 8.5, 0, Math.PI * 2);
            ctx.fillStyle = '#e5e2d8';
            ctx.fill();
            // Raised edge ring (paper slightly bent at hole)
            ctx.beginPath();
            ctx.arc(holeX, hy, 8.5, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(155,145,125,0.22)';
            ctx.lineWidth = 1.3;
            ctx.stroke();
            // Inner shadow gradient
            const hg = ctx.createRadialGradient(holeX - 1, hy - 1, 4, holeX, hy, 8.5);
            hg.addColorStop(0, 'rgba(130,120,100,0.08)');
            hg.addColorStop(1, 'rgba(130,120,100,0)');
            ctx.fillStyle = hg;
            ctx.fill();
            ctx.restore();
        }

        /* ---- 12. Aging marks, tiny stains, paper dust ---- */
        const spots = 3 + Math.floor(Math.random() * 4);
        for(let i = 0; i < spots; i++){
            const sx = 80 + Math.random() * (W - 160);
            const sy = 50 + Math.random() * (H - 100);
            const sr = this._r(1.0, 4.0);
            ctx.fillStyle = `rgba(${165+this._r(0,20)},${150+this._r(0,15)},${115+this._r(0,20)},${this._r(0.012, 0.025)})`;
            ctx.beginPath();
            ctx.arc(sx, sy, sr, 0, Math.PI * 2);
            ctx.fill();
        }

        /* ---- 13. Very faint pencil eraser smudge (1 random) ---- */
        if (Math.random() < 0.4) {
            ctx.save();
            const ex = this._r(W*0.2, W*0.8), ey = this._r(H*0.2, H*0.8);
            ctx.globalAlpha = this._r(0.008, 0.018);
            ctx.fillStyle = '#c8c0b0';
            ctx.beginPath();
            ctx.ellipse(ex, ey, this._r(10, 30), this._r(5, 12), this._r(-0.3, 0.3), 0, Math.PI*2);
            ctx.fill();
            ctx.restore();
        }
    }

    _createPage(){
        const c=document.createElement('canvas');
        c.width=this.PAGE_W*this.DPR;c.height=this.PAGE_H*this.DPR;
        c.style.width=this.PAGE_W+'px';c.style.height=this.PAGE_H+'px';
        c.className='hw-page-canvas';
        const ctx=c.getContext('2d');ctx.scale(this.DPR,this.DPR);
        ctx.textBaseline='alphabetic';
        this._drawPaper(ctx);
        return{canvas:c,ctx,line:0};
    }

    _wrap(ctx,text,maxW,fs){
        ctx.font=`${fs}px "${this.fontPool[0]}",cursive`;
        const w=text.split(/\s+/).filter(Boolean),lines=[];let cur='';
        for(const word of w){const t=cur?cur+' '+word:word;
            if(ctx.measureText(t).width>maxW&&cur){lines.push(cur);cur=word;}
            else cur=t;}
        if(cur)lines.push(cur);return lines;
    }

    /* ---- Mistakes ---- */
    _strikeThrough(ctx,x,y,width,fs){
        ctx.save();ctx.strokeStyle=this._ink(0.72);
        ctx.lineWidth=0.7+this._r(0,0.5);ctx.beginPath();
        const sy=y-fs*0.28;
        ctx.moveTo(x-2,sy+this._r(-1,1));
        const st=Math.max(3,Math.ceil(width/8));
        for(let i=1;i<=st;i++)ctx.lineTo(x-2+(width+4)*i/st,sy+this._r(-1.5,1.5));
        ctx.stroke();ctx.restore();
    }
    _inkBlob(ctx,x,y){
        ctx.save();ctx.fillStyle=this._ink(0.55);ctx.beginPath();
        ctx.arc(x+this._r(-1,1),y+this._r(0,2),this._r(0.4,1.2),0,Math.PI*2);
        ctx.fill();ctx.restore();
    }

    /* ---- Render character with real pen physics ---- */
    _renderChar(ctx, ch, x, y, fontSize, ci, wYOff, wSzOff, wordFont, pressure){
        const p = this.personality, cb = this._cb(ch);
        pressure = pressure || 1.0;

        const sz = Math.max(fontSize * 0.84,
            fontSize + wSzOff + cb.sz + this._r(-p.charSzVar, p.charSzVar));
        const dx = x + cb.x + this._r(-p.charXVar, p.charXVar);
        const dy = y + wYOff + cb.y + this._r(-p.charYVar, p.charYVar) + ci * p.lineAngle * 6;
        const rot = cb.rot + this._r(-p.charRotMax, p.charRotMax);

        let op = p.inkBase + this._r(-p.inkVar, p.inkVar);
        op = Math.max(0.55, Math.min(1, op)) * pressure;

        /* --- Pass 1: Main ink stroke --- */
        ctx.save();
        ctx.font = `${sz}px "${wordFont}",cursive`;
        ctx.translate(dx, dy);
        ctx.scale(1 + cb.scX + this._r(-p.charScXVar, p.charScXVar),
                  1 + cb.scY + this._r(-p.charScYVar, p.charScYVar));
        ctx.transform(1, 0, p.slant, 1, 0, 0);
        ctx.rotate(rot);
        ctx.fillStyle = this._ink(op);
        ctx.fillText(ch, 0, 0);
        // Pen stroke texture
        ctx.strokeStyle = this._ink(op * p.strokeOp);
        ctx.lineWidth = p.strokeW * pressure;
        ctx.strokeText(ch, 0, 0);
        ctx.restore();

        /* --- Pass 2: Ink bleeding (faint offset copy) --- */
        ctx.save();
        ctx.font = `${sz * (1 + this._r(-0.003, 0.003))}px "${wordFont}",cursive`;
        ctx.translate(dx + this._r(-0.35, 0.35), dy + this._r(-0.25, 0.25));
        ctx.scale(1 + cb.scX, 1 + cb.scY);
        ctx.transform(1, 0, p.slant, 1, 0, 0);
        ctx.rotate(rot);
        ctx.globalAlpha = 0.08 + pressure * 0.04;
        ctx.fillStyle = this._ink(op * 0.7);
        ctx.fillText(ch, 0, 0);
        ctx.restore();

        /* --- Pass 3: Paper fiber ink seep (tiny directional marks) --- */
        if (Math.random() < 0.15) {
            ctx.save();
            ctx.globalAlpha = 0.04 + Math.random() * 0.03;
            ctx.fillStyle = this._ink(0.5);
            const fx = dx + this._r(-2, sz * 0.6);
            const fy = dy + this._r(-1, 1);
            ctx.fillRect(fx, fy, this._r(0.8, 2.0), this._r(0.1, 0.3));
            ctx.restore();
        }

        /* --- Overwrite mistake --- */
        if (Math.random() < p.overwriteRate) {
            ctx.save();
            ctx.font = `${sz + this._r(-0.3, 0.3)}px "${wordFont}",cursive`;
            ctx.translate(dx + this._r(-1.2, 1.2), dy + this._r(-0.8, 0.8));
            ctx.transform(1, 0, p.slant, 1, 0, 0);
            ctx.rotate(rot + this._r(-0.02, 0.02));
            ctx.fillStyle = this._ink(op * 0.85);
            ctx.fillText(ch, 0, 0);
            ctx.restore();
        }

        ctx.font = `${sz}px "${wordFont}",cursive`;
        return ctx.measureText(ch).width + p.charSpAdd + this._r(-p.charSpVar, p.charSpVar);
    }

    /* ---- Render word with pen pressure curve ---- */
    _renderWord(ctx, word, x, baseY, fontSize, gCi){
        const p = this.personality;
        const wY = this._r(-p.wordYShift, p.wordYShift);
        const wS = this._r(-p.wordSzVar, p.wordSzVar);
        const wordFont = this._pickFont();
        const len = word.length;

        /* Pen start dot — small ink blob where pen first touches paper */
        if (Math.random() < 0.12) {
            ctx.save();
            ctx.fillStyle = this._ink(0.20 + Math.random() * 0.15);
            ctx.beginPath();
            ctx.arc(x + this._r(-0.5, 1.5), baseY + this._r(-1, 0.5),
                this._r(0.3, 0.8), 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        /* Ink blob (mistake type) */
        if (Math.random() < p.blobRate) this._inkBlob(ctx, x + this._r(-3, 0), baseY);

        let cx = x;
        for (let i = 0; i < len; i++) {
            /* Pressure curve: heavier at word start & end, lighter in middle */
            let pressure;
            if (len <= 2) {
                pressure = 1.05 + this._r(0, 0.08);
            } else {
                const t = i / (len - 1); // 0 at start, 1 at end
                // U-shaped curve: heavier at edges, lighter in middle
                pressure = 0.92 + 0.18 * (1 - Math.sin(t * Math.PI)) + this._r(-0.04, 0.04);
            }

            cx += this._renderChar(ctx, word[i], cx, baseY, fontSize,
                gCi + i, wY, wS, wordFont, pressure);
        }

        /* Pen lift mark — faint trail when lifting pen */
        if (Math.random() < 0.08) {
            ctx.save();
            ctx.strokeStyle = this._ink(0.06 + Math.random() * 0.06);
            ctx.lineWidth = 0.3 + Math.random() * 0.3;
            ctx.beginPath();
            ctx.moveTo(cx, baseY + this._r(-2, 1));
            ctx.lineTo(cx + this._r(1, 4), baseY + this._r(-4, -1));
            ctx.stroke();
            ctx.restore();
        }

        const ww = cx - x;
        if (Math.random() < p.strikeRate) this._strikeThrough(ctx, x, baseY, ww, fontSize);
        return ww;
    }

    _renderLine(ctx, text, startX, baseY, fontSize){
        const p = this.personality;
        let x = startX + this._r(-p.lineMarVar, p.lineMarVar);

        /* Per-line ink consistency shift — simulates ink flow variation */
        const lineInkShift = this._r(-0.03, 0.03);
        const origInkBase = p.inkBase;
        p.inkBase = Math.max(0.55, Math.min(1, origInkBase + lineInkShift));

        let ci = 0;
        const words = text.split(' ');
        for (let w = 0; w < words.length; w++) {
            if (!words[w]) continue;
            x += this._renderWord(ctx, words[w], x, baseY, fontSize, ci);
            ci += words[w].length;
            if (w < words.length - 1) {
                ctx.font = `${fontSize}px "${this.fontPool[0]}",cursive`;
                const naturalSp = ctx.measureText(' ').width;
                const stretch = this._r(p.wordSpStretchMin, p.wordSpStretchMax);
                x += naturalSp * stretch + this._r(-p.wordSpVar, p.wordSpVar);
                ci++;
            }
        }

        p.inkBase = origInkBase; // restore
    }

    _underline(ctx,sx,y,w){
        ctx.save();ctx.strokeStyle=this._ink(0.30);
        ctx.lineWidth=0.6+this._r(0,0.4);ctx.beginPath();
        ctx.moveTo(sx,y+3+this._r(-0.3,0.3));
        const st=Math.ceil(w/6);
        for(let i=1;i<=st;i++)ctx.lineTo(sx+w*i/st,y+3+this._r(-0.6,0.6));
        ctx.stroke();ctx.restore();
    }

    /* Page numbers removed — real notebook pages don't have them */
    _pageNum(ctx,n){ /* no-op */ }

    /** Wrap with different width for first line (indent) vs rest */
    _wrapPara(ctx, text, firstW, restW, fs) {
        ctx.font = `${fs}px "${this.fontPool[0]}",cursive`;
        const words = text.split(/\s+/).filter(Boolean);
        const lines = []; let cur = ''; let lineIdx = 0;
        for (const word of words) {
            const maxW = lineIdx === 0 ? firstW : restW;
            const t = cur ? cur + ' ' + word : word;
            if (ctx.measureText(t).width > maxW && cur) {
                lines.push(cur); cur = word; lineIdx++;
            } else { cur = t; }
        }
        if (cur) lines.push(cur);
        return lines;
    }

    async render(blocks, container) {
        await document.fonts.ready;
        this._genPersonality();
        this.pages = []; container.innerHTML = '';
        let page = this._createPage(); this.pages.push(page);
        let pageNum = 1; const p = this.personality;
        const cw = this.PAGE_W - this.MARGIN_LEFT - this.MARGIN_RIGHT;

        const needPage = async (n) => {
            if (page.line + n > this.MAX_LINES) {
                this._pageNum(page.ctx, pageNum++);
                await new Promise(r => setTimeout(r, 0));
                page = this._createPage(); this.pages.push(page);
            }
        };

        /** How many lines are left on current page */
        const linesLeft = () => this.MAX_LINES - page.line;

        for (const block of blocks) {

            /* ---- HEADING ---- */
            if (block.type === 'heading') {
                const lvl = block.level || 1;
                const fs = lvl === 1 ? p.fontSize + 4 : lvl === 2 ? p.fontSize + 2 : p.fontSize;

                // Calculate how many lines this heading needs:
                // pre-spacing + heading line + post-gap + minimum 3 body lines
                const preGap = page.line > 0 ? (lvl === 1 ? 2 : 1) : 0;
                const minNeeded = preGap + 1 + 1 + 3; // gap + heading + gap + 3 body lines

                // WIDOW/ORPHAN RULE: if not enough room for heading + 3 body lines,
                // push heading to a fresh page
                if (page.line > 0 && linesLeft() < minNeeded) {
                    this._pageNum(page.ctx, pageNum++);
                    await new Promise(r => setTimeout(r, 0));
                    page = this._createPage(); this.pages.push(page);
                }

                // Add spacing before heading (only if not at page start)
                if (page.line > 0) {
                    page.line += lvl === 1 ? 2 : 1;
                }

                const lines = this._wrap(page.ctx, block.content, cw, fs);
                for (const ln of lines) {
                    await needPage(1);
                    const y = this._lineY(page.line);
                    this._renderLine(page.ctx, ln, this.MARGIN_LEFT, y, fs);
                    if (lvl <= 2) {
                        page.ctx.font = `${fs}px "${this.fontPool[0]}",cursive`;
                        this._underline(page.ctx, this.MARGIN_LEFT + this._r(-1, 1), y,
                            page.ctx.measureText(ln).width + 4);
                    }
                    page.line++;
                }
                // Gap after heading
                if (linesLeft() >= 2) page.line++;

            /* ---- PARAGRAPH ---- */
            } else if (block.type === 'paragraph') {
                const fs = p.fontSize;
                // Better wrapping: first line uses indent width, rest use full width
                const lines = this._wrapPara(page.ctx, block.content,
                    cw - this.PARAGRAPH_INDENT, cw, fs);

                for (let i = 0; i < lines.length; i++) {
                    await needPage(1);
                    const ind = i === 0 ? this.MARGIN_LEFT + this.PARAGRAPH_INDENT : this.MARGIN_LEFT;
                    this._renderLine(page.ctx, lines[i], ind, this._lineY(page.line), fs);
                    page.line++;
                }
                // No blank line gap — students write continuously, indent marks paragraph
                // (this fills pages completely)

            /* ---- LIST ---- */
            } else if (block.type === 'list') {
                const fs = p.fontSize; const ordered = block.ordered || false;
                for (let idx = 0; idx < block.items.length; idx++) {
                    const bullet = ordered ? `${idx + 1}) ` : '\u2022 ';
                    const full = bullet + block.items[idx];
                    const lines = this._wrap(page.ctx, full, cw - 22, fs);
                    for (let j = 0; j < lines.length; j++) {
                        await needPage(1);
                        const ind = this.MARGIN_LEFT + (j === 0 ? 14 : 28);
                        this._renderLine(page.ctx, lines[j], ind, this._lineY(page.line), fs);
                        page.line++;
                    }
                }
                // No extra gap — fill pages completely
            }
        }

        this._pageNum(page.ctx, pageNum);
        for (const pg of this.pages) {
            const w = document.createElement('div'); w.className = 'page-wrapper';
            w.appendChild(pg.canvas); container.appendChild(w);
        }
        return this.pages;
    }

    getCanvases() { return this.pages.map(p => p.canvas); }
}
