const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');

function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        appendMessage('You', message);
        messageInput.value = '';
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = `${sender}: ${message}`;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}