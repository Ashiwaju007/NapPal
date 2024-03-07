function toggleChat() {
    const chatPopup = document.getElementById("chatPopup");
    chatPopup.style.display = chatPopup.style.display === "block" ? "none" : "block";
}

document.getElementById("openChatBtn").onclick = toggleChat;

async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (message === '') return; // Prevent sending empty messages

    displayMessage(message, 'user');
    userInput.value = ''; // Clear input after sending
    document.getElementById('loader').style.display = "block";

    // Simulate API call
    setTimeout(() => {
        displayMessage("This is a response from the chatbot.", 'bot');
        document.getElementById('loader').style.display = "none";
    }, 1000); // Replace with your actual fetch call
}

function displayMessage(message, sender) {
    const chatbox = document.getElementById('chatbox');
    const msgElement = document.createElement('p');
    msgElement.textContent = message;
    msgElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    chatbox.appendChild(msgElement);

    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the latest message
}

document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
