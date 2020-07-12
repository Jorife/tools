(function(root) {
	requirejs.config({

		shim : {
			'underscore' : ['bootstrap'],
			'bootstrap' : ['jquery']
		},

		paths : {
			'text' : './libs/requirejs/2.1.2/plugins/text.min',
			'underscore' : './libs/underscore/underscore',
			'jquery' : 'http://code.jquery.com/jquery-latest.min',
			'bootstrap' : './libs/bootstrap/bootstrap',
		}
	});

	require(['underscore'], function() {
		require([ 'modify.min', 'mainControl'], function(
			ModifyCtrl, MainControl) {
				ModifyCtrl.initialize();
				MainControl.initialize();
				
			});
		});
})();