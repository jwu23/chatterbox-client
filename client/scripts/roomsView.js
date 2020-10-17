var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', console.log('test'));
  },

  renderRoom: function() {

    $('#rooms').append(rooms.render());
  }

};
