/* script.js */

document.addEventListener("DOMContentLoaded", () => {
    const dialogBox = document.getElementById("dialogBox");
    const userInput = document.getElementById("userInput");

    // Function to add a message to the dialog box
    const addMessageToDialogBox = (message, isUser = false) => {
        const messageDiv = document.createElement("div");
        messageDiv.className = isUser ? "user-message" : "bot-message";
        messageDiv.innerText = message;
        dialogBox.appendChild(messageDiv);

        // Scroll to the bottom of the dialog box to show the latest messages
        dialogBox.scrollTop = dialogBox.scrollHeight;
    };

    // Function to handle user input and chatbot response
    const handleUserInput = () => {
        const userMessage = userInput.value;
        if (userMessage.trim() !== "") {
            // Display user message
            addMessageToDialogBox(userMessage, true);

            // Your chatbot logic here
            // For demonstration purposes, let's add a simple bot response
            setTimeout(() => {
                const botResponse = "Hello! I am your chatbot. How can I assist you?";
                addMessageToDialogBox(botResponse);
            }, 1000);

            // Clear the input field after sending the message
            userInput.value = "";
        }
    };

    // Event listener for user input form submission
    document.getElementById("userInput").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleUserInput();
        }
    });

    // For demonstration purposes, let's add an initial bot greeting message
    setTimeout(() => {
        const botGreeting = "Hello! I am your chatbot. How can I assist you?";
        addMessageToDialogBox(botGreeting);
    }, 1000);
});

