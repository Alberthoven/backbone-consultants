var app = app || {};

app.AppRouter = Backbone.Router.extend({

	routes: {
		'':         'index',   
        'add':      'add',      
        'list':     'list',     
		'edit/:id': 'edit'      
	},

    index: function(){
		console.log('en index');
        Backbone.history.navigate('list', {trigger: true});
    },

	list: function() {
		console.log('en listado');
		app.controller.showListView();
	},

	edit: function(id) {
		console.log('en editar', id);
		app.controller.showAddOrEditView(id);
	},

	add: function() {
		console.log('en agregar');
		app.controller.showAddOrEditView();
	}
	
});