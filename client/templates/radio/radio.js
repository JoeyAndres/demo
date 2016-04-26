Template.radio.onCreated(function() {
    this.radioModel = new ReactiveVar(null);
});

Template.radio.helpers({
    radioModel() {
        return Template.instance().radioModel;
    },

    radioModel_value() {
        return Template.instance().radioModel.get();
    }
});