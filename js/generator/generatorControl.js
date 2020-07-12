define([
	'text!../../html/generator/generator.html',
	'./wordsSelector'
], function(ViewTemplate, WordsSelector) {
	'user strict';
	
	var Generator = {
		
		initialize: function() {
			this.setTemplate();
			this.eventListener();
		},
		
		setTemplate: function() {
			this.compiled = _.template(ViewTemplate);
			$('#content-panel').append(this.compiled());	
		},
		
		eventListener: function(){
			$('#btn-nick-gen').on("click", function(){
				this.nickBtnClick();
			}.bind(this));
			
			$('#btn-adjective-gen').on("click", function(){
				this.adjBtnClick();
			}.bind(this));
			
			$('#btn-noun-gen').on("click", function(){
				this.nounBtnClick();
			}.bind(this));
		},
		
		nickBtnClick: function(){
			var nickname = WordsSelector.combine();
			$('#text-nickname').val(nickname);
		},
		
		adjBtnClick: function(){
			var adj = WordsSelector.getAdj();
			$('#text-adjective').val(adj);
		},
		
		nounBtnClick: function(){
			var noun = WordsSelector.getNoun();
			$('#text-noun').val(noun);
		}
	};
	
	return Generator;
	
})