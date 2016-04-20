Template.backdrop.events({
  'click [data-action=showBackdrop]': function (event, template) {
    $ionicBackdrop.retain();

    Meteor.setTimeout(function () {
      $ionicBackdrop.release();
    }, 1000);
  }
});
