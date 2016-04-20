Template.loading.events({
  'click [data-action=showLoading]': function (event, template) {
    $ionicLoading.show({
      duration: 3000
    });
  },

  'click [data-action=showLoadingWithBackdrop]': function (event, template) {
    $ionicLoading.show({
      duration: 3000,
      backdrop: true
    });
  },

  'click [data-action=showLoadingCustomTemplate]': function (event, template) {
    $ionicLoading.show({
      customTemplate: '<h3>Loading…</h3><p>Please wait while we upload your image.</p>',
      duration: 3000
    });
  }
});
