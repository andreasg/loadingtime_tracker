function clear_timer() {
    chrome.storage.local.clear(null);
}

function add_message() {
    chrome.storage.local.get('load_times', function(value) {
	console.log(value.load_times);
	
	var total = 0;
	for (var i=0; i<value.load_times.length; i++) {
	    total += value.load_times[i];
	}

	var div = document.getElementById('wastemetermessage');
	var msg = "<p>You have spent ";
	msg += total;
	msg += " milliseconds of your life waiting for pages to load!</p>";
	div.innerHTML += msg;
    });
}
add_message();
