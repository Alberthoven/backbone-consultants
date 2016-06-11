var app = app || {};

app.ConsultantsListView = Backbone.View.extend({

    initialize: function () {
        this.listenTo(this.collection, 'add remove reset', this.render);
        this.render();
    },

    render: function () {
        this.$el.empty();
        this.collection.each(function (model) {
            var view = new app.ConsultantDetailView({model: model});
            this.el.appendChild(view.el);
        }, this);

        return this;
    }
});