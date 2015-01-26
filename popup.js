function add_message() {
    chrome.storage.local.get('load_times', function(value) {
	var total = 0;

	if ('load_times' in value) {
	    total = value.load_times;
	}

	var div = document.getElementById('wastemetermessage');
	var msg = "<p>You have spent ";
	msg += total;
	msg += " milliseconds of your life waiting for pages to load!</p>";
	div.innerHTML += msg;
    });
}
add_message();
