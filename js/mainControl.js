define([
	'text!../html/main_template.html',
	'generator/generatorControl'
], function(ViewTemplate, GeneratorCtrl) {
	'user strict';
	
	var Control = {
		initialize: function(){
			this.setTemplate();
			this.addListener();
			GeneratorCtrl.initialize();
		},

		setTemplate: function() {
			this.compiled = _.template(ViewTemplate);
			$('body').append(this.compiled());	
		},
		 
		 addListener: function() {
			 
		 }
	};
	
	return Control;
})