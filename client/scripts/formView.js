var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('.submit').on('click', function() {
      location.reload();
    });
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log('room', RoomsView.$select.val());

    let newMessage = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      roomname: RoomsView.$select.val()
    };

    Parse.create(newMessage);



  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};