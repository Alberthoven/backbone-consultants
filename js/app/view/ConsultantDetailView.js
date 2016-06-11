var app = app || {};

app.ConsultantDetailView = Backbone.View.extend({

    className: 'consultant',

    template: _.template($('#consultant-template').html()),

    events: {
        'click #cb-del': 'delete',
        'click #cb-edit': 'edit',
        'mouseover': 'onOver',
        'mouseout': 'onOut'
    },

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.$btns = this.$('.consultant-minibtn');
        this.$btns.hide();

        return this;
    },

    delete: function () {
        this.model.destroy();
        this.remove();
    },

    edit: function () {
        Backbone.history.navigate('edit/' + this.model.id, {trigger: true});
    },

    onOver: function () {
        this.$btns.show();
    },

    onOut: function () {
        this.$btns.hide();
    }
});