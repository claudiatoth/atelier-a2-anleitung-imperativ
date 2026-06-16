// ============================================
// TEORIE - Atelier A2: Anleitung am Computer (Sie-Imperativ)
// Claudia Toth · Annettes Deutschkurs · Atelier de aprofundare
// Imperativul (mai ales Sie) pentru a da instrucțiuni pas-cu-pas
// Aprofundează A2 Lecția 12 (Trennbare Verben) — context digital
// ============================================

const theoryHTML = `
    <!-- 0: Intro -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🖱️ 1. Cum dai instrucțiuni politicos</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele Atelierului</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Dă instrucțiuni 🖱️</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Urmează pașii</span></div>
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Notează tot 🇷🇴</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Fotografă · Berlin</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · Potsdam</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 Imperativul = comenzi, sfaturi, instrucțiuni</h4>
                <p>Când explici cuiva <strong>ce să facă</strong> (la computer, la telefon, în viața de zi cu zi), folosești <strong>Imperativul</strong>. Forma politicoasă cu <strong>Sie</strong> e cea mai utilă pentru instrucțiuni pas-cu-pas.</p>
                <div class="example-box">
                    <p class="de"><strong>Klicken Sie</strong> auf „OK". · <strong>Warten Sie</strong> einen Moment.</p>
                    <p class="ro">Faceți clic pe „OK". · Așteptați un moment.</p>
                </div>
            </div>

            <div class="theory-box info-box">
                <h4>🗺️ Ce vezi în atelier</h4>
                <ul>
                    <li><strong>2.</strong> Sie-Imperativ: <strong>Verb + Sie</strong> (inversiune) + „bitte"</li>
                    <li><strong>3.</strong> Cu verbe separabile: prefixul la final (Schalten Sie … ein!)</li>
                    <li><strong>4.</strong> du & ihr Imperativ (contrast) + neregulatul „Seien Sie!"</li>
                    <li><strong>5.</strong> Recap + dialog (instrucțiuni la computer)</li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Vestea bună: imperativul Sie e <strong>identic cu infinitivul</strong> — doar pui <strong>Sie</strong> imediat după verb: „Kommen Sie!", „Warten Sie!". Plus „bitte" și ești foarte politicos. 🦋</em>
                </div>
            </div>

            <!-- ===== SCHREIBWERKSTATT — Trimite textul Claudiei ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    Scrie o mică <strong>instrucțiune pas-cu-pas</strong> (ex: cum trimiți un e-mail) cu cel puțin <strong>6 imperative la Sie</strong> (Schalten Sie … ein, Klicken Sie …, Geben Sie … ein). <strong>Min. 60 cuvinte.</strong> Îți răspund personal pe email. 🦋
                </p>
                <a href="https://forms.gle/St6KPr1AjEdN9KwB6" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #5A5147; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: Sie-Imperativ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📋 2. Sie-Imperativ: Verb + Sie</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-sie.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Regula</h4>
                <p style="margin:0;">Iei forma „Sie" de la prezent și <strong>inversezi</strong>: verbul în față, apoi <strong>Sie</strong>.<br>
                Sie klicken → <strong>Klicken Sie!</strong> · Sie warten → <strong>Warten Sie!</strong> · Sie kommen → <strong>Kommen Sie!</strong></p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Infinitiv</th><th>Imperativ Sie</th><th>Română</th></tr>
                </thead>
                <tbody>
                    <tr><td>klicken</td><td><strong>Klicken Sie</strong> auf OK.</td><td><em>Faceți clic pe OK.</em></td></tr>
                    <tr><td>warten</td><td><strong>Warten Sie</strong> bitte.</td><td><em>Așteptați, vă rog.</em></td></tr>
                    <tr><td>kommen</td><td><strong>Kommen Sie</strong> herein.</td><td><em>Intrați.</em></td></tr>
                    <tr><td>geben</td><td><strong>Geben Sie</strong> das Passwort ein.</td><td><em>Introduceți parola.</em></td></tr>
                    <tr><td>nehmen</td><td><strong>Nehmen Sie</strong> Platz.</td><td><em>Luați loc.</em></td></tr>
                </tbody>
            </table>

            <div class="theory-box info-box">
                <h4>🙏 „bitte" înmoaie comanda</h4>
                <p style="margin:0;">Adaugă <strong>bitte</strong> (de obicei după verb+Sie) ca să suni politicos:<br>
                „<strong>Warten Sie bitte</strong> einen Moment." · „<strong>Klicken Sie bitte</strong> auf „Speichern"."</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>La Sie-Imperativ NU schimbi verbul: rămâne ca infinitivul (kommen Sie, geben Sie). Spre deosebire de du, unde uneori se schimbă vocala (vezi secțiunea 4)! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Cu verbe separabile -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🔌 3. Imperativ cu verbe separabile</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-separabile.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="background:#F5F0E8; border-left-color:#D4A574;">
                <h4>⚡ Prefixul zboară la final</h4>
                <p style="margin:0;">Ca în Präsens, la verbele separabile prefixul merge la <strong>finalul propoziției</strong>:<br>
                einschalten → <strong>Schalten Sie</strong> den PC <strong>ein</strong>! · herunterladen → <strong>Laden Sie</strong> die Datei <strong>herunter</strong>!</p>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Verb separabil</th><th>Imperativ Sie</th><th>Română</th></tr>
                </thead>
                <tbody>
                    <tr><td>einschalten</td><td>Schalten Sie den PC <strong>ein</strong>.</td><td><em>Porniți PC-ul.</em></td></tr>
                    <tr><td>ausschalten</td><td>Schalten Sie das Gerät <strong>aus</strong>.</td><td><em>Opriți aparatul.</em></td></tr>
                    <tr><td>anklicken</td><td>Klicken Sie das Symbol <strong>an</strong>.</td><td><em>Faceți clic pe simbol.</em></td></tr>
                    <tr><td>ausfüllen</td><td>Füllen Sie das Formular <strong>aus</strong>.</td><td><em>Completați formularul.</em></td></tr>
                    <tr><td>herunterladen</td><td>Laden Sie die Datei <strong>herunter</strong>.</td><td><em>Descărcați fișierul.</em></td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Schema instrucțiunilor la computer: <strong>Verb + Sie + … + prefix</strong>. „Schalten Sie den Computer <strong>ein</strong>." Prefixul stă mereu la coadă! 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: du & ihr + neregulate -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>👋 4. du & ihr Imperativ (+ Seien Sie!)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-du-ihr.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <table class="grammar-table">
                <thead>
                    <tr><th>Verb</th><th>du!</th><th>ihr!</th><th>Sie!</th></tr>
                </thead>
                <tbody>
                    <tr><td>kommen</td><td>Komm!</td><td>Kommt!</td><td>Kommen Sie!</td></tr>
                    <tr><td>warten</td><td>Warte!</td><td>Wartet!</td><td>Warten Sie!</td></tr>
                    <tr><td>nehmen <em>(e→i)</em></td><td><strong>Nimm!</strong></td><td>Nehmt!</td><td>Nehmen Sie!</td></tr>
                    <tr><td>geben <em>(e→i)</em></td><td><strong>Gib!</strong></td><td>Gebt!</td><td>Geben Sie!</td></tr>
                    <tr><td>sein <em>(neregulat)</em></td><td><strong>Sei!</strong></td><td>Seid!</td><td><strong>Seien Sie!</strong></td></tr>
                </tbody>
            </table>

            <div class="theory-box info-box">
                <h4>💡 du-Imperativ pe scurt</h4>
                <ul>
                    <li><strong>du</strong>: iei forma „du", scoți <strong>-st</strong>: du wartest → <strong>Warte!</strong> (azi de obicei fără -e: Komm!).</li>
                    <li>Verbele tari cu <strong>e→i/ie</strong> PĂSTREAZĂ schimbarea la du: du gibst → <strong>Gib!</strong>, du nimmst → <strong>Nimm!</strong>, du liest → <strong>Lies!</strong></li>
                    <li><strong>ihr</strong>: identic cu forma „ihr": ihr kommt → <strong>Kommt!</strong></li>
                    <li>Neregulatul <strong>sein</strong>: Sei! / Seid! / <strong>Seien Sie!</strong></li>
                </ul>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Pentru instrucțiuni oficiale (computer, birou, formulare) folosește <strong>Sie</strong>. Cu prietenii sau copiii — <strong>du</strong> (Komm! Gib! Nimm!). 🦋</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: Recap + dialog -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🗣️ 5. Recap + dialog (instrucțiuni la computer)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-recap-dialog.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="border-left-color:#047857;">
                <h4>📝 Recap rapid</h4>
                <ul>
                    <li><strong>Sie-Imperativ:</strong> Verb + Sie (Klicken Sie!) — politicos, ideal pentru instrucțiuni.</li>
                    <li><strong>+ bitte</strong> = și mai politicos (Warten Sie bitte).</li>
                    <li><strong>Separabile:</strong> prefixul la final (Schalten Sie … ein!).</li>
                    <li><strong>du:</strong> fără -st (Komm! Warte!); tari e→i păstrează (Gib! Nimm!). <strong>sein:</strong> Sei! / Seien Sie!</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>💬 Dialog: Annette îl ghidează pe Acar</h4>
                <p><strong style="color:#065f46;">Annette:</strong> So, Acar. <strong>Schalten Sie</strong> bitte zuerst den Computer <strong>ein</strong>.<br><span class="ro-translation">Așa, Acar. Mai întâi porniți computerul, vă rog.</span></p>
                <p><strong style="color:#065f46;">Acar:</strong> Erledigt. Und jetzt?<br><span class="ro-translation">Gata. Și acum?</span></p>
                <p><strong style="color:#065f46;">Annette:</strong> <strong>Geben Sie</strong> Ihr Passwort <strong>ein</strong> und <strong>klicken Sie</strong> auf das Symbol.<br><span class="ro-translation">Introduceți parola și faceți clic pe simbol.</span></p>
                <p><strong style="color:#065f46;">Acar:</strong> Und die Rechnung?<br><span class="ro-translation">Și factura?</span></p>
                <p><strong style="color:#065f46;">Annette:</strong> <strong>Laden Sie</strong> die Datei <strong>herunter</strong> und <strong>drucken Sie</strong> sie <strong>aus</strong>. <strong>Seien Sie</strong> ganz ruhig — Sie machen das super!<br><span class="ro-translation">Descărcați fișierul și tipăriți-l. Fiți calm — vă descurcați excelent!</span></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Vezi schema? <strong>Schalten Sie … ein, Geben Sie … ein, Laden Sie … herunter, drucken Sie … aus</strong> — verb + Sie, prefixul la final. Așa dai instrucțiuni clare! Mult succes! 🦋</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
