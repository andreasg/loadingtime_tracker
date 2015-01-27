"use strict";

var add_message = function() {
    chrome.storage.local.get(null, function(value) {
	var total_time_waited = 0;
	for (var datestr in value) {
	    total_time_waited += value[datestr];
	}
	var div = document.getElementById('wastemetermessage');
	var msg = "<p>You have spent ";
	msg += total_time_waited;
	msg += " milliseconds of your life waiting for pages to load!</p>";
	div.innerHTML += msg;
    });
}();

