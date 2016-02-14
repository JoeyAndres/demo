Template.listsComplex.onCreated(function(){
    this.items = new ReactiveVar([]);
    this.sortable = new ReactiveVar(false);
    this.deletable = new ReactiveVar(false);
    _(20).times((n) => this.items.get().push(n + 1));  // 0 based counting is causing errors for some reason.
});

Template.listsComplex.onRendered(function(){
    $("#button-delete").click(() => this.deletable.set(!this.deletable.get()));
    $("#button-reorder").click(() => this.sortable.set(!this.sortable.get()));
});

Template.listsComplex.helpers({
    items: function () {
        return Template.instance().items.get();
    },

    onReorder: function() {
        let template = Template.instance();
        return (item, fromIndex, toIndex) => {
            let newTimes = template.items.get();
            newTimes.splice(toIndex, 0, newTimes.splice(fromIndex, 1)[0]);
            template.items.set(newTimes);
        }
    },

    sortable: function() {
        return Template.instance().sortable.get();
    },

    deletable: function () {
        return Template.instance().deletable.get();
    }
});