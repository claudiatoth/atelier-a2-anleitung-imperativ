// ============================================
// FLASHCARDS - Atelier A2: Anleitung am Computer (Sie-Imperativ)
// Claudia Toth · 32 carduri: concept + comenzi Sie + du-Imperativ + fraze
// REGULĂ: NICIODATĂ ghilimele interne ASCII — emfază cu CAPS; EXACT 6 ghilimele ASCII per linie
// ============================================

const flashcardsData = [
    // === Concept (4) ===
    { de: "Sie-Imperativ: Verb + Sie", ro: "comandă politicoasă (Klicken Sie!)", audio: "audio/letters/konzept-sie.wav" },
    { de: "du-Imperativ: fără -st", ro: "informal (Komm! Warte!)", audio: "audio/letters/konzept-du.wav" },
    { de: "trennbar im Imperativ", ro: "prefixul la final (Schalten Sie ... ein!)", audio: "audio/letters/konzept-trennbar.wav" },
    { de: "bitte", ro: "înmoaie comanda (Warten Sie bitte)", audio: "audio/letters/konzept-bitte.wav" },

    // === Comenzi Sie (14) ===
    { de: "Klicken Sie auf OK.", ro: "Faceți clic pe OK.", audio: "audio/letters/i-klicken-ok.wav" },
    { de: "Warten Sie bitte.", ro: "Așteptați, vă rog.", audio: "audio/letters/i-warten.wav" },
    { de: "Kommen Sie herein.", ro: "Intrați.", audio: "audio/letters/i-kommen.wav" },
    { de: "Nehmen Sie Platz.", ro: "Luați loc.", audio: "audio/letters/i-platz.wav" },
    { de: "Geben Sie das Passwort ein.", ro: "Introduceți parola.", audio: "audio/letters/i-passwort.wav" },
    { de: "Schalten Sie den PC ein.", ro: "Porniți PC-ul.", audio: "audio/letters/i-pc-ein.wav" },
    { de: "Laden Sie die Datei herunter.", ro: "Descărcați fișierul.", audio: "audio/letters/i-herunterladen.wav" },
    { de: "Füllen Sie das Formular aus.", ro: "Completați formularul.", audio: "audio/letters/i-formular.wav" },
    { de: "Drücken Sie Enter.", ro: "Apăsați Enter.", audio: "audio/letters/i-enter.wav" },
    { de: "Lesen Sie den Text.", ro: "Citiți textul.", audio: "audio/letters/i-lesen.wav" },
    { de: "Wiederholen Sie bitte.", ro: "Repetați, vă rog.", audio: "audio/letters/i-wiederholen.wav" },
    { de: "Seien Sie vorsichtig!", ro: "Fiți atent / prudent!", audio: "audio/letters/i-vorsichtig.wav" },
    { de: "Drucken Sie das Dokument aus.", ro: "Tipăriți documentul.", audio: "audio/letters/i-drucken.wav" },
    { de: "Melden Sie sich an.", ro: "Conectați-vă (logați-vă).", audio: "audio/letters/i-anmelden.wav" },

    // === du-Imperativ (6) ===
    { de: "Komm!", ro: "Vino! (du, de la kommen)", audio: "audio/letters/du-komm.wav" },
    { de: "Warte!", ro: "Așteaptă! (du)", audio: "audio/letters/du-warte.wav" },
    { de: "Nimm!", ro: "Ia! (du, de la nehmen — e→i)", audio: "audio/letters/du-nimm.wav" },
    { de: "Gib!", ro: "Dă! (du, de la geben — e→i)", audio: "audio/letters/du-gib.wav" },
    { de: "Lies!", ro: "Citește! (du, de la lesen — e→ie)", audio: "audio/letters/du-lies.wav" },
    { de: "Sei!", ro: "Fii! (du, de la sein)", audio: "audio/letters/du-sei.wav" },

    // === Fraze model (8) ===
    { de: "Klicken Sie bitte auf Speichern.", ro: "Faceți clic pe Salvează, vă rog.", audio: "audio/letters/s-speichern.wav" },
    { de: "Schalten Sie zuerst den Computer ein.", ro: "Mai întâi porniți computerul.", audio: "audio/letters/s-zuerst.wav" },
    { de: "Geben Sie Ihr Passwort ein.", ro: "Introduceți parola dumneavoastră.", audio: "audio/letters/s-passwort.wav" },
    { de: "Warten Sie einen Moment, bitte.", ro: "Așteptați un moment, vă rog.", audio: "audio/letters/s-moment.wav" },
    { de: "Kommen Sie bitte herein!", ro: "Intrați, vă rog!", audio: "audio/letters/s-herein.wav" },
    { de: "Sei nicht nervös!", ro: "Nu fi nervos! (du)", audio: "audio/letters/s-nervoes.wav" },
    { de: "Nimm den Stift!", ro: "Ia pixul! (du)", audio: "audio/letters/s-stift.wav" },
    { de: "Laden Sie das Foto hoch.", ro: "Încărcați poza.", audio: "audio/letters/s-hochladen.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    const fc = document.getElementById('flashcard');
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = card.ro;
    if (fc) fc.classList.toggle('flipped', isFlipped);
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
