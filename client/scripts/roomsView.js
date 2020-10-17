var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.createRoom);
    RoomsView.$select.on('change', RoomsView.selectRoom);
  },

  renderRoom: function(roomData) {
    var roomsArray = [];

    for (let key in roomData) {
      var newRoom = '';
      let fixedRoom = {
        roomName: roomData[key].roomname || 'lobby'
      };
      if (roomsArray.indexOf(fixedRoom.roomName) > -1) {
        continue;
      }
      roomsArray.push(fixedRoom.roomName);
      newRoom += RoomView.render(fixedRoom);

      $('#rooms select').append(newRoom);
    }
  },

  createRoom: function() {
    var userPrompt = prompt('What would you like to name your room?');
    var newRoom = '';
    let room = {
      roomName: userPrompt
    };
    if (room.roomName === '') {
      return;
    }
    newRoom += RoomView.render(room);
    $('#rooms select').append(newRoom);
    RoomsView.$select.val(room.roomName);

  },

  selectRoom: function() {
    let selectedRoom = RoomsView.$select.val();
    $('#chats').html('');

    for (var key in Messages) {
      let newSlots = '';
      if (Messages[key].roomname === selectedRoom) {

        let fixedSlots = {
          username: Messages[key].username || 'Guest',
          text: Messages[key].text,
          createdAt: Messages[key].createdAt,
          roomname: Messages[key].roomname
        };

        newSlots += MessageView.render(fixedSlots);
        $('#chats').append(newSlots);
      }
    }
  }
};