var app = app || {};
app.collection = app.collection || {};

$(function() {

    app.router = new app.AppRouter();
    app.controller = new app.ConsultantController();
    app.collection = new app.ConsultantsCollection();

    Backbone.history.start();
});
