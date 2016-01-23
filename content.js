
console.log("Quora Opened.");

jQuery('.LoggedInSiteHeader').hide();
jQuery('.layout_3col_left').hide();
jQuery('.layout_3col_right').hide();
jQuery('html').css("font-family","calibri");
jQuery('.threaded_comments').css("font-size","16px")


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);
	   //chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);

