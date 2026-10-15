/* Recherche vocale (Web Speech API).
   Le dictionnaire corrige les références produits souvent mal comprises par la reconnaissance vocale. */

const VOICE_CORRECTIONS = {
  // Imprimantes et consommables
  "j'ai 34 10": 'G3410',
  'j ai 34 10': 'G3410',
  'jai 34 10': 'G3410',
  "j'ai 3410": 'G3410',
  'j ai 3410': 'G3410',
  'g 34 10': 'G3410',
  'g34 10': 'G3410',
  'gé 34 10': 'G3410',
  'g 3430': 'G3430',
  'gé 3430': 'G3430',
  'g 2410': 'G2410',
  'gé 2410': 'G2410',
  'g x 1040': 'GX1040',
  'gx 1040': 'GX1040',
  'g x 1020': 'GX1020',
  'gx 1020': 'GX1020',
  'l 15 150': 'L15150',
  'elle 15 150': 'L15150',
  'l15 150': 'L15150',
  'l 15150': 'L15150',
  'ail 15 150': 'L15150',
  'l 14 150': 'L14150',
  'elle 14 150': 'L14150',
  'l 3250': 'L3250',
  'elle 3250': 'L3250',
  'l 8050': 'L8050',
  'elle 8050': 'L8050',
  '108 w': '108W',
  'cent 8 w': '108W',
  '137 f n w': '137fnw',
  '4103 d w': '4103dw',
  '4 103 d w': '4103dw',
  '3303 f d w': '3303fdw',
  '3 303 f d w': '3303fdw',
  '527 s f': '527sf',
  '5 27 s f': '527sf',
  '222 a': '222A',
  '222 ah': '222A',
  'deux 22 a': '222A',
  '230 a': '230A',
  '230 ah': '230A',
  '150 a': '150A',
  '150 ah': '150A',
  '9 38': '938',
  'neuf 38': '938',
  '953 xl': '953XL',
  '9 53 xl': '953XL',
  '3 05': '305',
  'trois 05': '305',
  '6 52': '652',
  'six 52': '652',
  '6 53': '653',
  'six 53': '653',

  // Marque HP
  'acheter': 'HP',
  'hache p': 'HP',
  'acheter p': 'HP',
  'h p': 'HP',
  'hache pé': 'HP',

  // Réseau et Wi-Fi
  'est ce 650': 'EAP650',
  'est-ce 650': 'EAP650',
  'est 650': 'EAP650',
  'i ap 650': 'EAP650',
  'ap 650': 'EAP650',
  'est ce 110': 'EAP110',
  'est-ce 110': 'EAP110',
  'ap 110': 'EAP110',
  'a x 23': 'AX23',
  'ax 23': 'AX23',
  'a x 3000': 'AX3000',
  'ax 3000': 'AX3000',
  'a x 1800': 'AX1800',
  'ax 1800': 'AX1800',
  'b e 9300': 'BE9300',
  'be 9300': 'BE9300',
  'b e 3600': 'BE3600',
  'be 3600': 'BE3600',
  'a c 1200': 'AC1200',
  'ac 1200': 'AC1200',
  'a c 1750': 'AC1750',
  'ac 1750': 'AC1750',

  // Téléphonie
  'x 6 u': 'X6U',
  'x6 u': 'X6U',
  'v 67': 'V67',
  'vé 67': 'V67',
  's 20': 'S20',
  'esse 20': 'S20',
  'g s c 3516': 'GSC3516',
  'gsc 3516': 'GSC3516',
  'g r p 2670': 'GRP2670',
  'grp 2670': 'GRP2670',
  'g r p 2634': 'GRP2634',
  'grp 2634': 'GRP2634',
  'g r p 2650': 'GRP2650',
  'grp 2650': 'GRP2650',
  'g r p 2636': 'GRP2636',
  'grp 2636': 'GRP2636',
  'g x p 2140': 'GXP2140',
  'gxp 2140': 'GXP2140',
  'g x p 2160': 'GXP2160',
  'gxp 2160': 'GXP2160',
  'g x p 1630': 'GXP1630',
  'gxp 1630': 'GXP1630',

  // Onduleurs
  '1000 va': '1000VA',
  'mille va': '1000VA',
  '2000 va': '2000VA',
  'deux mille va': '2000VA',
  '3000 va': '3000VA',
  'trois mille va': '3000VA',

  // Divers
  'ecran': 'écran',
};

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function correctVoiceText(text) {
  const lowerText = text.toLowerCase().trim();

  if (VOICE_CORRECTIONS[lowerText]) {
    return VOICE_CORRECTIONS[lowerText];
  }

  let correctedText = text;
  for (const [heard, correction] of Object.entries(VOICE_CORRECTIONS)) {
    if (lowerText.includes(heard)) {
      correctedText = correctedText.replace(new RegExp(escapeRegExp(heard), 'gi'), correction);
    }
  }
  return correctedText.replace(/\s+/g, ' ').trim();
}

const VOICE_ERROR_MESSAGES = {
  'no-speech': 'Aucune parole détectée. Parlez plus fort ou rapprochez-vous du micro.',
  'audio-capture': 'Aucun microphone détecté. Vérifiez votre micro.',
  'not-allowed': 'Accès au microphone refusé. Autorisez-le dans votre navigateur.',
  'network': 'Erreur réseau. Vérifiez votre connexion.',
};

function initVoiceSearch() {
  const button = document.querySelector('.voice-search-btn');
  if (!button) return;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  // Navigateur non compatible ou page non sécurisée (HTTPS requis) : on masque simplement le bouton
  if (!SpeechRecognition || !window.isSecureContext) {
    button.hidden = true;
    return;
  }

  const form = button.closest('form');
  const input = form.querySelector('input[type="search"]');
  const defaultPlaceholder = input.placeholder;
  let recognition = null;

  function stopListeningUi() {
    recognition = null;
    button.classList.remove('is-listening');
    button.setAttribute('aria-pressed', 'false');
    input.placeholder = defaultPlaceholder;
  }

  button.addEventListener('click', () => {
    // Un second clic arrête l'écoute
    if (recognition) {
      recognition.stop();
      return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'fr-FR';
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.addEventListener('start', () => {
      button.classList.add('is-listening');
      button.setAttribute('aria-pressed', 'true');
      input.placeholder = 'Parlez maintenant…';
    });

    recognition.addEventListener('result', (event) => {
      const transcript = Array.from(event.results).map((result) => result[0].transcript).join('');
      input.value = correctVoiceText(transcript);

      if (event.results[0].isFinal) {
        setTimeout(() => form.requestSubmit(), 500);
      }
    });

    recognition.addEventListener('end', stopListeningUi);

    recognition.addEventListener('error', (event) => {
      if (event.error === 'aborted') return;
      showToast(VOICE_ERROR_MESSAGES[event.error] || 'Erreur de reconnaissance vocale. Réessayez.');
    });

    try {
      recognition.start();
    } catch (error) {
      stopListeningUi();
    }
  });
}

initVoiceSearch();
