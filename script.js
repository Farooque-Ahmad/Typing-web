function sendMessage() {
    var messageInput = document.getElementById("newtext");
    var message = messageInput.value;
    if (message.trim() !== "") {
        displayMessage(message);
        messageInput.value = "";
    }
}

function displayMessage(message) {
    var chatBox = document.getElementById("box");
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to bottom
}
