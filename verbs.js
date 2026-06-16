// ============================================
// VERB-KONJUGATION - Atelier A2: Anleitung am Computer (Sie-Imperativ)
// 6 verbe utile pentru instrucțiuni: klicken · warten · nehmen · geben · einschalten · sein
// (în Notă: forma de Imperativ du / ihr / Sie)
// ============================================

const verbsData = [
    {
        inf: 'klicken', ro: 'a face click', typ: 'regulat', aux: 'haben', part: 'geklickt',
        praes: [
            ['ich','klicke','fac click'],['du','klickst','faci click'],['er/sie/es','klickt','face click'],
            ['wir','klicken','facem click'],['ihr','klickt','faceți click'],['sie/Sie','klicken','fac click / faceți click']
        ],
        praet: [
            ['ich','klickte','făceam click'],['du','klicktest','făceai click'],['er/sie/es','klickte','făcea click'],
            ['wir','klickten','făceam click'],['ihr','klicktet','făceați click'],['sie/Sie','klickten','făceau click']
        ],
        perf: [
            ['ich','habe geklickt','am făcut click'],['du','hast geklickt','ai făcut click'],['er/sie/es','hat geklickt','a făcut click'],
            ['wir','haben geklickt','am făcut click'],['ihr','habt geklickt','ați făcut click'],['sie/Sie','haben geklickt','au făcut click']
        ],
        note: '🖱️ Imperativ: Klick! / Klickt! / Klicken Sie! Cere auf + Akk: Klicken Sie auf OK.'
    },
    {
        inf: 'warten', ro: 'a aștepta', typ: 'regulat', aux: 'haben', part: 'gewartet',
        praes: [
            ['ich','warte','aștept'],['du','wartest','aștepți'],['er/sie/es','wartet','așteaptă'],
            ['wir','warten','așteptăm'],['ihr','wartet','așteptați'],['sie/Sie','warten','așteaptă / așteptați']
        ],
        praet: [
            ['ich','wartete','așteptam'],['du','wartetest','așteptai'],['er/sie/es','wartete','aștepta'],
            ['wir','warteten','așteptam'],['ihr','wartetet','așteptați'],['sie/Sie','warteten','așteptau']
        ],
        perf: [
            ['ich','habe gewartet','am așteptat'],['du','hast gewartet','ai așteptat'],['er/sie/es','hat gewartet','a așteptat'],
            ['wir','haben gewartet','am așteptat'],['ihr','habt gewartet','ați așteptat'],['sie/Sie','haben gewartet','au așteptat']
        ],
        note: '⏳ Imperativ: Warte! / Wartet! / Warten Sie (bitte)! Cere auf + Akk: Ich warte auf dich.'
    },
    {
        inf: 'nehmen', ro: 'a lua', typ: 'tare (neregulat)', aux: 'haben', part: 'genommen',
        praes: [
            ['ich','nehme','iau'],['du','nimmst','iei'],['er/sie/es','nimmt','ia'],
            ['wir','nehmen','luăm'],['ihr','nehmt','luați'],['sie/Sie','nehmen','iau / luați']
        ],
        praet: [
            ['ich','nahm','luam'],['du','nahmst','luai'],['er/sie/es','nahm','lua'],
            ['wir','nahmen','luam'],['ihr','nahmt','luați'],['sie/Sie','nahmen','luau']
        ],
        perf: [
            ['ich','habe genommen','am luat'],['du','hast genommen','ai luat'],['er/sie/es','hat genommen','a luat'],
            ['wir','haben genommen','am luat'],['ihr','habt genommen','ați luat'],['sie/Sie','haben genommen','au luat']
        ],
        note: '🚨 TARE (e→i: du nimmst). Imperativ du PĂSTREAZĂ schimbarea: Nimm! / Nehmt! / Nehmen Sie! (Nehmen Sie Platz!)'
    },
    {
        inf: 'geben', ro: 'a da', typ: 'tare (neregulat)', aux: 'haben', part: 'gegeben',
        praes: [
            ['ich','gebe','dau'],['du','gibst','dai'],['er/sie/es','gibt','dă'],
            ['wir','geben','dăm'],['ihr','gebt','dați'],['sie/Sie','geben','dau / dați']
        ],
        praet: [
            ['ich','gab','dădeam'],['du','gabst','dădeai'],['er/sie/es','gab','dădea'],
            ['wir','gaben','dădeam'],['ihr','gabt','dădeați'],['sie/Sie','gaben','dădeau']
        ],
        perf: [
            ['ich','habe gegeben','am dat'],['du','hast gegeben','ai dat'],['er/sie/es','hat gegeben','a dat'],
            ['wir','haben gegeben','am dat'],['ihr','habt gegeben','ați dat'],['sie/Sie','haben gegeben','au dat']
        ],
        note: '🚨 TARE (e→i: du gibst). Imperativ du: Gib! / Gebt! / Geben Sie! (Geben Sie das Passwort ein!)'
    },
    {
        inf: 'einschalten', ro: 'a porni / a aprinde', typ: 'regulat / TRENNBAR', aux: 'haben', part: 'eingeschaltet',
        praes: [
            ['ich','schalte ein','pornesc'],['du','schaltest ein','pornești'],['er/sie/es','schaltet ein','pornește'],
            ['wir','schalten ein','pornim'],['ihr','schaltet ein','porniți'],['sie/Sie','schalten ein','pornesc / porniți']
        ],
        praet: [
            ['ich','schaltete ein','porneam'],['du','schaltetest ein','porneai'],['er/sie/es','schaltete ein','pornea'],
            ['wir','schalteten ein','porneam'],['ihr','schaltetet ein','porneați'],['sie/Sie','schalteten ein','porneau']
        ],
        perf: [
            ['ich','habe eingeschaltet','am pornit'],['du','hast eingeschaltet','ai pornit'],['er/sie/es','hat eingeschaltet','a pornit'],
            ['wir','haben eingeschaltet','am pornit'],['ihr','habt eingeschaltet','ați pornit'],['sie/Sie','haben eingeschaltet','au pornit']
        ],
        note: '🔌 SEPARABIL. Imperativ: Schalt … ein! / Schalten Sie … ein! Prefixul la final: Schalten Sie den PC ein.'
    },
    {
        inf: 'sein', ro: 'a fi', typ: 'neregulat', aux: 'sein', part: 'gewesen',
        praes: [
            ['ich','bin','sunt'],['du','bist','ești'],['er/sie/es','ist','este'],
            ['wir','sind','suntem'],['ihr','seid','sunteți'],['sie/Sie','sind','sunt / sunteți']
        ],
        praet: [
            ['ich','war','eram'],['du','warst','erai'],['er/sie/es','war','era'],
            ['wir','waren','eram'],['ihr','wart','erați'],['sie/Sie','waren','erau']
        ],
        perf: [
            ['ich','bin gewesen','am fost'],['du','bist gewesen','ai fost'],['er/sie/es','ist gewesen','a fost'],
            ['wir','sind gewesen','am fost'],['ihr','seid gewesen','ați fost'],['sie/Sie','sind gewesen','au fost']
        ],
        note: '🚨 NEREGULAT. Imperativ special: Sei! / Seid! / Seien Sie! (Seien Sie vorsichtig! / Sei nicht nervös!)'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#5A5147;">' + exampleRow[2] + '</em></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe utile pentru instrucțiuni</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb. În <strong>Notă</strong> găsești forma de <strong>Imperativ</strong> (du / ihr / Sie).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Imperativul Sie = ca infinitivul (Klicken Sie!, Warten Sie!). La du, verbele tari e→i păstrează schimbarea: <strong>Gib! Nimm!</strong> Iar sein e special: <strong>Seien Sie!</strong> 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
