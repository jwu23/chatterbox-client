var MessagesView = {

  $chats: $('#chats'),


  initialize: function() {
  },

  renderMessage: function(message) {

    for (var key in message) {
      var currentMessage = '';
      var fixedMessage = {
        username: message[key].username || 'Guest',
        text: message[key].text,
        createdAt: message[key].createdAt
      };

      if (fixedMessage.text === undefined || fixedMessage.text === '') {
        continue;
      } else {
        currentMessage += MessageView.render(fixedMessage);
      }
      $('#chats').append(currentMessage);
    }
  }
};