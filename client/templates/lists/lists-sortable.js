Template.listsSortable.onCreated(function(){
    this.times = new ReactiveVar([]);
    this.sortable = new ReactiveVar(false);
    this.deletable = new ReactiveVar(false);
    _(20).times((n) => this.times.get().push(n + 1));  // 0 based counting is causing errors for some reason.
});

Template.listsSortable.onRendered(function(){
    $("#button-delete").click(() => this.deletable.set(!this.deletable.get()));
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
    },

    sortable: function() {
        return Template.instance().sortable.get();
    },

    deletable: function () {
        return Template.instance().deletable.get();
    }
});

Template.listsSortable.events({
    "change #sortable-checkbox": function(e, template) {
        let sortable = e.target.checked;
        template.sortable.set(sortable);
    }
});