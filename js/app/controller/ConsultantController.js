var app = app || {};
app.controller = app.controller || {};

app.ConsultantController = function () {

    var currentView = null,

        _showListView = function () {
            _showView(new app.ConsultantsContainer({collection: app.collection}));
        },

        _showAddOrEditView = function (id) {
            var model = id ? (app.collection.get(id).clone()) : null;
            _showView(new app.AddOrEditConsultant({model: model}));
        },

        _showView = function (view) {
            var $appBody = $('#consultant-body');

            if (view != currentView) {
                if (currentView) {
                    //currentView.$el.fadeOut();
                    currentView.remove();
                }
                currentView = view;
                $appBody.append(currentView.el);
                currentView.$el.delay(400).fadeIn();
            }
        };

    return {
        showListView: _showListView,
        showAddOrEditView: _showAddOrEditView
    };
}