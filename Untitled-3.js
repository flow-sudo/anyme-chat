// script.js

// Sélectionner les éléments du DOM
const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');

// Écouter l'événement de soumission du formulaire
chatForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Obtenir le message de l'utilisateur
    const messageText = messageInput.value.trim();

    // Vérifier si le message n'est pas vide
    if (messageText !== '') {
        // Créer un nouvel élément pour le message
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        messageElement.className = 'message';

        // Ajouter le message au chat
        chatBox.appendChild(messageElement);

        // Scroller vers le bas du chat
        chatBox.scrollTop = chatBox.scrollHeight;

        // Effacer le champ de saisie
        messageInput.value = '';
    }
});