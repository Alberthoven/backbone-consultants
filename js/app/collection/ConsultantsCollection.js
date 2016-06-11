var app = app || {};

app.ConsultantsCollection = Backbone.Collection.extend({

    initialize: function(){
        this.fetch();       
    },

    model: app.ConsultantModel,

    localStorage: new Backbone.LocalStorage('consultant')

});