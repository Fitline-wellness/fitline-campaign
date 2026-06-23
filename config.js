/* ============================================================================
   Fitline Italia — CONFIGURAZIONE CENTRALE
   ----------------------------------------------------------------------------
   Modifica solo i valori qui sotto per cambiare numero WhatsApp, email,
   link di integrazione (Google Sheets, Formspree) e messaggi.
   Tutti i file HTML della campagna (index.html, landing.html, assessment.html)
   leggono da qui — non c'è bisogno di toccare il resto.
   ============================================================================ */

window.FITLINE_CONFIG = {

  // ─── Consulente ────────────────────────────────────────────────────────────
  consultantName: "Francesco Zaino",   // nome visualizzato nei messaggi e WhatsApp
  consultantBrand: "Fitline Italia",   // nome brand/etichetta

  // ─── Contatti (formato INTERNAZIONALE senza "+" né spazi) ─────────────────
  whatsapp: "393496440824",            // usato per wa.me/ — niente +
  whatsappDisplay: "+39 349 6440824",  // formattato per UI
  email: "francesco.zaino82@gmail.com",
  phoneDisplay: "WhatsApp +39 349 6440824",

  // ─── Link prodotti ────────────────────────────────────────────────────────
  eShopUrl: "https://20942218.fitline.com",
  eShopDisplayName: "eShop Fitline personale",

  // ─── Assessment ───────────────────────────────────────────────────────────
  // Path relativo: l'assessment si apre nella stessa cartella della landing.
  // Se metti il pacchetto online, cambia in un URL assoluto.
  assessmentUrl: "assessment.html",
  assessmentAnchor: "#assessment",  // anchor interno se embedded nella landing

  // ─── Destinazioni form (3 in parallelo) ───────────────────────────────────
  // Imposta gli URL dopo aver seguito le istruzioni in INSTRUCTIONS.md.
  // Lascia vuoto ("") per disabilitare una destinazione specifica.
  destinations: {
    localStorage: true,                          // sempre attivo, no server
    googleSheets: {
      enabled: true,                            // ← metti true dopo aver deployato l'Apps Script
      url: "https://script.google.com/macros/s/AKfycbybwVfsYjWddc45TZ4tnd3D5tU-spabiq6IFCWBCszfrgpFXchOAvqI9pPDAkkNJpr3Yw/exec",                                   // es: https://script.google.com/macros/s/AKfy.../exec
      label: "Google Sheets"
    },
    formspree: {
      enabled: true,                            // ← metti true dopo aver creato il form Formspree
      url: "https://formspree.io/f/mgobdnyz",                                   // es: https://formspree.io/f/abcd1234
      label: "Email (Formspree)"
    }
  },

  // ─── Compliance / GDPR ────────────────────────────────────────────────────
  consentText: "Acconsento a ricevere comunicazioni WhatsApp/email ai sensi del GDPR per ricevere il mio percorso personalizzato. Posso revocare il consenso in qualsiasi momento scrivendo 'stop'.",
  optOutKeyword: "stop",

  // ─── Power Cocktail — info commerciali ────────────────────────────────────
  powerCocktail: {
    name: "Fitline Power Cocktail",
    priceSingle: "107,00 €",
    priceSet: "128,70 €",
    setName: "Optimal-Set (Power Cocktail + Restorate)",
    note: "Made in Germany · NTC® brevettato · 30+ anni di ricerca · claim EFSA"
  },

  // ─── Versioning ───────────────────────────────────────────────────────────
  version: "1.1.0",
  generatedAt: "2026-06-12",

  // ─── Helper: genera link WhatsApp con messaggio pre-compilato ────────────
  waLink: function(message) {
    return "https://wa.me/" + this.whatsapp + "?text=" + encodeURIComponent(message);
  }
};
