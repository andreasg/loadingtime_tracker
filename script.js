"use strict";

var log_load_time = function() {
    var t0 = new Date().getTime();
    $(document).ready(function(){
	var t1 = new Date().getTime();
	var td = t1 - t0;
	chrome.storage.local.get(null, function(value) {
	    var current_date = (new Date()).toISOString().substr(0, 10);
	    if (current_date in value) {
		value[current_date] += td;
	    } else {
		value[current_date] = td;
	    }
	    chrome.storage.local.set(value, function () { });
	});
    });
}();
