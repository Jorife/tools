define([
	'./datas/kor/words'
], function(Words){
	
	'user strict';
	
	var Combiner = {
		
		combine: function(){
			var str = "";

			str = this.combineMultiple()
			
			return str;
		},
		
		combineMultiple: function(){
			var str = "";
			
			str += this.selectStr(Words.adjective);
			str += " " + this.selectStr(Words.noun);
			
			return str;
		},
			
		selectStr: function(arr){
			var random = Math.floor(Math.random() * 100 % arr.length);
			
			return arr[random];
		},
		
		getAdj: function(){
			return this.selectStr(Words.adjective);
		},
		
		getNoun: function(){
			return this.selectStr(Words.noun);
		}
		
		
	};
	
	return Combiner;
})