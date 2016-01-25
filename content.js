
console.log("Quora Opened.");


	var quora = {
		init      : function(){
					jQuery('.layout_3col_center').width('948px');
					jQuery('.LoggedInSiteHeader,.layout_3col_left,.layout_3col_right,.HomeMainFeedHeader').hide();
					jQuery('html').css("font-family","calibri");
					jQuery('.threaded_comments').css("font-size","16px");
					jQuery('.feed_item').css("border-bottom","0px");
					jQuery('.ActionBar .primary_action').css('border','0px');
					quora.imgReplac();
					setInterval(function(){ quora.domParser(); }, 3000);	
					},
		domParser : function() {		
					jQuery('.ActionBar .primary_action').css('border','0px');
					jQuery('.EventHeader').hide();
					jQuery('.feed_item').css("border-bottom","0px");	
					quora.imgReplac();					
					},
		imgReplac : function(){
					jQuery('img[src$="true"]').each(function(){this.src = this.src.slice(0,-21)});
					}			
					
	}

	quora.init();


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);
	   //chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);

