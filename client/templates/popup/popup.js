Template.popup.events({
  'click [data-action="showPopup"]': function(event, template) {
    $ionicPopup.show({
      title: 'A Popup',
      template: 'Here\'s a quick popup.',
      buttons: [{
        text: 'Close me',
        type: 'button-assertive',
        onTap: function() {
          $ionicPopup.close();
        }
      }]
    });
  },

  'click [data-action="showAlert"]': function(event, template) {
    $ionicPopup.alert({
      title: 'An Alert',
      template: 'This is an alert!',
      okText: 'Got It.'
    });
  },

  'click [data-action="showConfirm"]': function(event, template) {
    $ionicPopup.confirm({
      title: 'Are you sure?',
      template: 'Are you <strong>really</strong> sure?',
      onOk: function() {
        console.log('Confirmed');
      },
      onCancel: function() {
        console.log('Cancelled');
      }
    });
  },

  'click [data-action="showPrompt"]': function(event, template) {
    $ionicPopup.prompt({
      title: 'Security Check',
      template: 'Please enter your password',
      okText: 'Submit',
      inputType: 'password',
      inputPlaceholder: 'Your Password'
    });
  }
});
