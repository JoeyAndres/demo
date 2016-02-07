Template.listsComplex.onCreated(function(){
    this.times = new ReactiveVar([]);
    this.sortable = new ReactiveVar(false);
    this.deletable = new ReactiveVar(false);
    _(20).times((n) => this.times.get().push(n + 1));  // 0 based counting is causing errors for some reason.
});

Template.listsComplex.onRendered(function(){
    $("#button-delete").click(() => this.deletable.set(!this.deletable.get()));
    $("#button-reorder").click(() => this.sortable.set(!this.sortable.get()));
});

Template.listsComplex.helpers({
    times: function () {
        return Template.instance().times.get();
    },

    onReorder: function() {
        let template = Template.instance();
        return (item, fromIndex, toIndex) => {
            let newTimes = template.times.get();
            let oldFrom = newTimes[fromIndex];
            newTimes[fromIndex] = newTimes[toIndex];
            newTimes[toIndex] = oldFrom;
            template.times.set(newTimes);
        }
    },

    sortable: function() {
        return Template.instance().sortable.get();
    },

    deletable: function () {
        return Template.instance().deletable.get();
    }
});