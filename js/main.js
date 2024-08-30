jQuery(document).ready(function() {	
	var timeObj=new Object();
	//-------error message---------
	setting_message_show = function(str, cclasss, oobj){
		oobj.removeClass("err_message").removeClass("scss_message") ;
		oobj.addClass(cclasss).html(str).show() ;
		clearTimeout(timeObj);
		if(cclasss == "err_message"){jQuery(".save-action input").attr("disabled", false) ;}
		timeObj=setTimeout(function(){setting_message_hide(oobj);}, 2000);
	}
	
	setting_message_hide = function(oobj){
		oobj.animate({height:"toggle"}, 500, function() {jQuery(".save-action input").attr("disabled", false) ;});
	}
	
	//---------default text------------
	jQuery(".default-txt").blur(function(){
		if(jQuery(this).val() == ""){
			var txt = jQuery(this).attr('alt');
			jQuery(this).val(txt).css("color", "#a4a4a4") ;
		}		
	}) ;
	
	jQuery(".default-txt").focus(function(){
		if(jQuery(this).val() == jQuery(this).attr("alt")){
			jQuery(this).val("") ;
		}
		jQuery(this).css("color", "#464646") ;
	}) ;
	
	jQuery(".default-txt").each(function(){
		if( !jQuery(this).val() || jQuery(this).val() == jQuery(this).attr("alt")){
			jQuery(this).val(jQuery(this).attr("alt")).css("color", "#a4a4a4") ;
		}		
	}) ;
	
	//---------postbox close/open content--------- 
	jQuery(".handlediv").on("click", function(){
		var obj = jQuery(this).parent() ;
		if(obj.hasClass("closed"))
			obj.removeClass("closed");
		else
			obj.addClass("closed");
	});
});