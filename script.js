"use strict";

var t0 = new Date().getTime();
$(document).ready(function(){
    var t1 = new Date().getTime();

    chrome.storage.local.get('load_times', function(value) {
	if (value.load_times) {
	    value.load_times.push(t1 - t0);
	} else {
	    value.load_times = [t1 - t0];
	}
	chrome.storage.local.set(value, function () { });
    });
});
