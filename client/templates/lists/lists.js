Template.lists.onCreated(function(){
  this.times = new ReactiveVar([]);
  _(20).times((n) => this.times.get().push(n + 1));  // 0 based counting is causing errors for some reason.
});

Template.lists.helpers({
  times: function () {
    return Template.instance().times.get();
  }
});
