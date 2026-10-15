/* Envoi des formulaires (contact, devis, avis).

   - Si le <form> possède un attribut action (ex. action="contact.php" method="post"),
     il est envoyé normalement au serveur : ce script ne fait rien.
   - Sinon (site statique), le contenu est mis en forme puis ouvert dans WhatsApp,
     le canal de commande déjà utilisé par l'entreprise. */

function handleFormSubmit(form, buildMessage) {
  form.addEventListener('submit', (event) => {
    if (form.getAttribute('action')) return;

    event.preventDefault();
    const url = whatsappUrl(buildMessage(new FormData(form)));
    window.open(url, '_blank', 'noopener');
    showFormStatus(form, url);
  });
}

function showFormStatus(form, url) {
  const status = form.querySelector('.form-status');
  if (!status) return;

  status.querySelector('a').href = url;
  status.hidden = false;
  status.focus();
}

// Construit des lignes "Libellé : valeur" en ignorant les champs vides
function formatFields(fields) {
  return fields
    .filter(([, value]) => value && value.trim())
    .map(([label, value]) => label + ' : ' + value.trim())
    .join('\n');
}
