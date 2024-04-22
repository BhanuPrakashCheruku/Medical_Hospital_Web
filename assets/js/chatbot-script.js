$(document).ready(function() {
    // Variables to track the chatbot state
    var chatbotOpen = false;
    var chatbotButton = $('#chatbot-button');
    var chatContainer = $('#chat-container'); // You'll need to add this element later
  
    // Function to open or close the chatbot
    function toggleChatbot() {
      if (chatbotOpen) {
        // Close the chatbot
        chatContainer.css('right', '-350px');
      } else {
        // Open the chatbot
        chatContainer.css('right', '0');
      }
      chatbotOpen = !chatbotOpen;
    }
  
    // Click event handler for the chatbot button
    chatbotButton.click(function() {
      toggleChatbot();
    });
  });
  