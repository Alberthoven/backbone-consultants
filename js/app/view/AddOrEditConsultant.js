var app = app || {};

app.AddOrEditConsultant = Backbone.View.extend({

    id: 'consultant-edit',

    template: _.template($('#edit-template').html()),

    events: {
        'keyup .consultant-edit-input': 'onInputModification',
        'click #add-save-button': 'onAddSaveClick',
        'click #cancel-button': 'onCancelClick'
    },

    initialize: function (opts) {
        this.model = (opts && opts.model) || new app.ConsultantModel();
        this.render();
    },

    render: function () {
        this.model.setI18n();
        this.$el.html(this.template(this.model.toJSON()));
        this.$okbutton = this.$('#add-save-button');

        this.doValidation();
        return this;
    },

    onAddSaveClick: function () {
        if (!this.$okbutton.hasClass('cb-disabled') && this.model.isValid()) {
            if (this.model.isNew()) {
                app.collection.create(this.model);
            } else {
                app.collection.get(this.model.id).set(this.model.attributes);
                app.collection.get(this.model.id).save();
            }
            Backbone.history.navigate('list', {trigger: true});
        }
    },

    onCancelClick: function () {
        Backbone.history.navigate('list', {trigger: true});
    },

    onInputModification: function () {
        this.model.set({
            name: this.$('#name-field').val(),
            surname: this.$('#surname-field').val(),
            age: parseInt(this.$('#age-field').val()),
            project: this.$('#project-field').val()
        });
        this.doValidation();
    },

    doValidation: function () {
        this.$('.consultant-edit-validation').removeClass('invalid').addClass('valid');

        if (this.model.isValid()) {
            this.$okbutton.removeClass('cb-disabled');
        } else {
            this.$okbutton.addClass('cb-disabled');
            var errors = this.model.validationError;
            _.each(_.keys(errors), function (key) {
                this.$('#' + key + '-validation').removeClass('valid').addClass('invalid');
            }, this);
        }
    }
});