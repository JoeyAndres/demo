Template.listsSortable.onCreated(function(){
    this.times = new ReactiveVar([]);
    _(20).times((n) => this.times.get().push(n + 1));  // 0 based counting is causing errors for some reason.
});

Template.listsSortable.helpers({
    times: function () {
        return Template.instance().times.get();
    },

    onReorder: function() {
        let template = Template.instance();
        return (item, fromIndex, toIndex) => {
            let newTimes = template.times.get();
            newTimes.splice(fromIndex, 1);
            newTimes.splice(toIndex, 0, item.data.index);
            template.times.set(newTimes);
        }
    }
});
