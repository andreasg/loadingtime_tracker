"use strict";

var t0 = new Date().getTime();
$(document).ready(function(){
    var t1 = new Date().getTime();
    chrome.storage.local.get('load_times', function(value) {
	if ('load_times' in value) {
	    value.load_times += (t1 - t0);
	} else {
	    value.load_times = 0;
	}
	chrome.storage.local.set(value, function () { });
    });
});
