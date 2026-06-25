// ============================================
// EXERCIȚII - Atelier A2: Anleitung am Computer (Sie-Imperativ)
// Claudia Toth · 5 exerciții cu rezolvări complete
// Sie-Imperativ · separabile · forma corectă · du-Imperativ · traducere
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}

function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

function answerExact(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    if (!user) return false;
    return acceptList.some(a => normalizeAnswer(a) === user);
}

// ============================================
// EX 1: Sie-Imperativ — Verb + Sie (inversiune) (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', prompt: '____ auf OK.', hint: 'imperativ Sie de la klicken (Verb + Sie)', correct: 'Klicken Sie', accept: ['klicken sie'] },
    { id: 'b', prompt: '____ bitte einen Moment.', hint: 'imperativ Sie de la warten', correct: 'Warten Sie', accept: ['warten sie'] },
    { id: 'c', prompt: '____ herein!', hint: 'imperativ Sie de la kommen', correct: 'Kommen Sie', accept: ['kommen sie'] },
    { id: 'd', prompt: '____ geradeaus.', hint: 'imperativ Sie de la gehen', correct: 'Gehen Sie', accept: ['gehen sie'] },
    { id: 'e', prompt: '____ Platz.', hint: 'imperativ Sie de la nehmen', correct: 'Nehmen Sie', accept: ['nehmen sie'] },
    { id: 'f', prompt: '____ den Text.', hint: 'imperativ Sie de la lesen', correct: 'Lesen Sie', accept: ['lesen sie'] },
    { id: 'g', prompt: '____ Ihren Namen.', hint: 'imperativ Sie de la schreiben', correct: 'Schreiben Sie', accept: ['schreiben sie'] },
    { id: 'h', prompt: '____ auf Enter.', hint: 'imperativ Sie de la drücken', correct: 'Drücken Sie', accept: ['drücken sie'] },
    { id: 'i', prompt: '____ bitte den Satz.', hint: 'imperativ Sie de la wiederholen', correct: 'Wiederholen Sie', accept: ['wiederholen sie'] },
    { id: 'j', prompt: '____ hier, bitte.', hint: 'imperativ Sie de la unterschreiben (a semna)', correct: 'Unterschreiben Sie', accept: ['unterschreiben sie'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Formează imperativul politicos: Verb + Sie.</strong><br>
        Iei forma „Sie" de la prezent și pui verbul în față: Sie klicken → Klicken Sie!
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex1-${it.id}" placeholder="Verb + Sie...">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: Imperativ Sie cu verbe separabile — prefixul la final (8 itemi)
// ============================================
const ex2Data = [
    { id: 'a', prompt: 'Schalten Sie den Computer ____!', hint: 'einschalten', correct: 'ein', accept: ['ein'] },
    { id: 'b', prompt: 'Schalten Sie das Gerät ____!', hint: 'ausschalten', correct: 'aus', accept: ['aus'] },
    { id: 'c', prompt: 'Laden Sie die Datei ____!', hint: 'herunterladen', correct: 'herunter', accept: ['herunter'] },
    { id: 'd', prompt: 'Laden Sie die Fotos ____!', hint: 'hochladen', correct: 'hoch', accept: ['hoch'] },
    { id: 'e', prompt: 'Klicken Sie das Symbol ____!', hint: 'anklicken', correct: 'an', accept: ['an'] },
    { id: 'f', prompt: 'Geben Sie das Passwort ____!', hint: 'eingeben', correct: 'ein', accept: ['ein'] },
    { id: 'g', prompt: 'Füllen Sie das Formular ____!', hint: 'ausfüllen', correct: 'aus', accept: ['aus'] },
    { id: 'h', prompt: 'Bringen Sie Ihren Ausweis ____!', hint: 'mitbringen', correct: 'mit', accept: ['mit'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🔌 Completează prefixul separabil la finalul comenzii.</strong><br>
        Verbul + Sie e deja la început; prefixul (ein-, aus-, herunter-…) zboară la final.
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">verb: ${it.hint}</em></p>
                <input type="text" id="ex2-${it.id}" placeholder="prefixul...">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Care e imperativul Sie corect? (MC) (8 itemi)
// ============================================
const ex3Data = [
    { id: 'a', text: 'kommen', a: 'Kommen Sie!', b: 'Sie kommen.', correct: 'Kommen Sie!', expl: 'Imperativ Sie = verbul în față + Sie.' },
    { id: 'b', text: 'das Passwort eingeben', a: 'Geben Sie das Passwort ein!', b: 'Sie geben das Passwort ein.', correct: 'Geben Sie das Passwort ein!', expl: 'Verb + Sie + … + prefixul (ein) la final.' },
    { id: 'c', text: 'sein (ruhig)', a: 'Seien Sie ruhig!', b: 'Sind Sie ruhig!', correct: 'Seien Sie ruhig!', expl: 'sein are imperativ Sie neregulat: Seien Sie!' },
    { id: 'd', text: 'warten', a: 'Warten Sie!', b: 'Wartet Sie!', correct: 'Warten Sie!', expl: 'Forma Sie = ca infinitivul: warten Sie.' },
    { id: 'e', text: 'einschalten', a: 'Schalten Sie ein!', b: 'Einschalten Sie!', correct: 'Schalten Sie ein!', expl: 'Separabil: verbul în față, prefixul (ein) la final.' },
    { id: 'f', text: 'Platz nehmen', a: 'Nehmen Sie Platz!', b: 'Nehmt Sie Platz!', correct: 'Nehmen Sie Platz!', expl: 'Sie-form = nehmen Sie (nu nehmt, acela e ihr).' },
    { id: 'g', text: 'klicken', a: 'Klicken Sie!', b: 'Klick Sie!', correct: 'Klicken Sie!', expl: 'Cu Sie folosim forma -en: Klicken Sie. „Klick" e pentru du.' },
    { id: 'h', text: 'herunterladen', a: 'Laden Sie herunter!', b: 'Herunterladen Sie!', correct: 'Laden Sie herunter!', expl: 'Verbul (laden) în față, prefixul (herunter) la final.' }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>✅ Alege imperativul Sie corect.</strong>
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;"><strong>${it.text}</strong></p>
                <label style="display:block; margin-bottom:5px;"><input type="radio" name="ex3-${it.id}" value="${it.a}"> ${it.a}</label>
                <label style="display:block;"><input type="radio" name="ex3-${it.id}" value="${it.b}"> ${it.b}</label>
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex3-${it.id}"]:checked`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (sel && sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.expl}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.expl}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: du-Imperativ (contrast) (8 itemi)
// ============================================
const ex4Data = [
    { id: 'a', prompt: '____ das Fenster!', hint: 'du-Imperativ de la machen', correct: 'Mach', accept: ['mach', 'mache'] },
    { id: 'b', prompt: '____ schnell!', hint: 'du-Imperativ de la kommen', correct: 'Komm', accept: ['komm', 'komme'] },
    { id: 'c', prompt: '____ einen Moment!', hint: 'du-Imperativ de la warten', correct: 'Warte', accept: ['warte'] },
    { id: 'd', prompt: '____ mir das Buch!', hint: 'du-Imperativ de la geben (e→i)', correct: 'Gib', accept: ['gib'] },
    { id: 'e', prompt: '____ den Stift!', hint: 'du-Imperativ de la nehmen (e→i)', correct: 'Nimm', accept: ['nimm'] },
    { id: 'f', prompt: '____ den Text!', hint: 'du-Imperativ de la lesen (e→ie)', correct: 'Lies', accept: ['lies'] },
    { id: 'g', prompt: '____ langsam!', hint: 'du-Imperativ de la fahren (a NU primește umlaut)', correct: 'Fahr', accept: ['fahr', 'fahre'] },
    { id: 'h', prompt: '____ nicht nervös!', hint: 'du-Imperativ de la sein (neregulat)', correct: 'Sei', accept: ['sei'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>👋 Formează imperativul informal (du).</strong><br>
        du: forma fără -st (Komm! Warte!). Verbele tari e→i/ie păstrează schimbarea (Gib! Nimm! Lies!).
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#5A5147; font-size:0.9rem;">${it.hint}</em></p>
                <input type="text" id="ex4-${it.id}" placeholder="du-Imperativ...">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        if (answerExact(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}!`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}!`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Traduce în germană (imperative) (10 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Faceți clic pe OK.', correct: 'Klicken Sie auf OK.', accept: ['klicken sie auf ok'] },
    { id: 'b', ro: 'Așteptați un moment, vă rog.', correct: 'Warten Sie bitte einen Moment.', accept: ['warten sie bitte einen moment', 'warten sie einen moment bitte'] },
    { id: 'c', ro: 'Porniți computerul.', correct: 'Schalten Sie den Computer ein.', accept: ['schalten sie den computer ein'] },
    { id: 'd', ro: 'Introduceți parola.', correct: 'Geben Sie das Passwort ein.', accept: ['geben sie das passwort ein'] },
    { id: 'e', ro: 'Descărcați fișierul.', correct: 'Laden Sie die Datei herunter.', accept: ['laden sie die datei herunter'] },
    { id: 'f', ro: 'Intrați, vă rog!', correct: 'Kommen Sie bitte herein!', accept: ['kommen sie bitte herein', 'kommen sie herein bitte'] },
    { id: 'g', ro: 'Luați loc.', correct: 'Nehmen Sie Platz.', accept: ['nehmen sie platz'] },
    { id: 'h', ro: 'Fiți calm!', correct: 'Seien Sie ruhig!', accept: ['seien sie ruhig'] },
    { id: 'i', ro: 'Vino repede! (du)', correct: 'Komm schnell!', accept: ['komm schnell', 'komme schnell'] },
    { id: 'j', ro: 'Completați formularul.', correct: 'Füllen Sie das Formular aus.', accept: ['füllen sie das formular aus'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🗣️ Traduce comanda în germană.</strong> Folosește imperativul Sie (sau du, unde se cere). Atenție la prefixul separabil la final!
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie comanda în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
