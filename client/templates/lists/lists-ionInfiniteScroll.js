Template.demoListsionInfiniteScroll.onCreated(function(){
    this.items = new ReactiveVar([]);
    this.sortable = new ReactiveVar(false);
    this.deletable = new ReactiveVar(false);
    this.maxNum = 1;  // 0 based counting is causing errors for some reason.
});

Template.demoListsionInfiniteScroll.onRendered(function(){
    $("#button-delete").click(() => this.deletable.set(!this.deletable.get()));
    $("#button-reorder").click(() => this.sortable.set(!this.sortable.get()));
});

Template.demoListsionInfiniteScroll.helpers({
    onInfinite: function() {
        let templateInstance = Template.instance();
        return () => {
            Meteor.setTimeout(() => {
                let new_items = templateInstance.items.get();
                _(1).times((n) => {
                    if (templateInstance.maxNum <= 30) {
                        new_items.push(templateInstance.maxNum);
                        templateInstance.maxNum++;
                    }
                });
                templateInstance.items.set(new_items);
                $(window).trigger('scroll.infiniteScrollComplete');
            }, 100);
        };
    },

    hasMore: function() {
        return Template.instance().items.get().length < 30;
    },

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