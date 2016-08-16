var util={
	setFocus:function(e){
		e.addClass('active').siblings().removeClass('active')
	},
	aa:function(){
		console.log("master");
	}
}
module.exports=util;