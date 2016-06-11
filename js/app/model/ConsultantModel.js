var app = app || {};

app.ConsultantModel = Backbone.Model.extend({
    defaults: {
        name: '',
        surname: '',
        age: '',
        project: 'No project'
    },

    validate: function(attrs, options){
        
        this.omit('header', 'labelButton');
        
        var validationErrors = {};
        validationErrors = this._notEmptyTypedAndValid(validationErrors, attrs, 'age', _.isNumber, this._validateAdult);
        validationErrors = this._notEmptyTypedAndValid(validationErrors, attrs, 'name', _.isString);
        validationErrors = this._notEmptyTypedAndValid(validationErrors, attrs, 'surname', _.isString);
        validationErrors = this._notEmptyTypedAndValid(validationErrors, attrs, 'project', _.isString);
        if (_.keys(validationErrors).length) return validationErrors;
    },

    _notEmptyTypedAndValid: function(validation, attrs, attr, typeF, validF){
        var v = _.has(attrs, attr)? attrs[attr] : null;
        
        if (!v){
            validation[attr] = "Empty " + attr;
        }else if (!typeF(v)){
            validation[attr] = "Not valid " + attr;
        }else if (validF){
            var err = validF.apply(this, [v]);
            if (err){
                validation[attr] = err + attr;
            }

        }
        return validation;
    },

    _validateAdult: function(v){
        if (v < this.constructor.MINIMUM_AGE){
            return 'Not adult ';
        }
    },

    setI18n: function() {
        var header = this.isNew() ? 'NUEVO CONSULTOR' : 'EDITAR CONSULTOR',
            labelButton = this.isNew() ? 'AÑADIR' : 'GUARDAR';
        this.set('header', header);
        this.set('labelButton', labelButton);
    }
    
}, {
    MINIMUM_AGE: 18
});
