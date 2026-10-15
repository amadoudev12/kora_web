/* Page Contact : préparation du message du formulaire. */

handleFormSubmit(document.getElementById('contact-form'), (data) => 'Message depuis le site\n' + formatFields([
  ['Nom', data.get('nom')],
  ['Email', data.get('email')],
  ['Téléphone', data.get('telephone')],
  ['Sujet', data.get('sujet')],
  ['Message', data.get('message')],
]));
