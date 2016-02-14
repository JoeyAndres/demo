Template.lists.onCreated(function(){
  this.items = new ReactiveVar([]);
  _(20).times((n) => this.items.get().push(n + 1));  // 0 based counting is causing errors for some reason.
});

Template.lists.helpers({
  items: function () {
    return Template.instance().items.get();
  }
});
