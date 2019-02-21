'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

	$(".likeBtn").click(function(e) {
		e.preventDefault();
		ga('create', 'UA-134920882-1', 'auto');
		//gtag("send", "event", 'like', 'click');
		ga("send", "event", 'like', 'click');
	});
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}