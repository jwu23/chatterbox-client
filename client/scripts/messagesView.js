var MessagesView = {

  $chats: $('#chats'),


  initialize: function() {
  },

  renderMessage: function(message) {
    // console.log(message.text);
    // var currentMessage = MessageView.render();
    // console.log("curr", currentMessage)

    for (var key in message) {
      var currentMessage = '';
      currentMessage += message[key].text;
      $('#chats').append(MessageView.render(currentMessage));
    }
  }
};