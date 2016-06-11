var app = app || {};

app.ConsultantsContainer = Backbone.View.extend({
    
    id: 'consultant-list',
    
    template: _.template($('#container-template').html()),

    events: {
        'click #add-new-consultant': '_addNewConsultant'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        
        this.$el.html(this.template({}));
        
        var $body = this.$('#consultant-list-body'),
            consultants = new app.ConsultantsListView({collection: this.collection});
        
        consultants.setElement($body[0]);
        consultants.render();

        return this;
    },

    _addNewConsultant: function () {
        Backbone.history.navigate('add', {trigger: true});
    }
    
});
