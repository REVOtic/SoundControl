// http://ionden.com/a/plugins/ion.rangeSlider/start.html

(function( $ ) {
	$( document ).ready( function() {
		$(".js-range-slider").ionRangeSlider();
	});
} )( jQuery );

function httpGET(url) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", url, true);	// false: wait respond
	xmlHttp.send(null);
	return url+" "+xmlHttp.responseText;
}
function saveSettings() {
	var url = "./cgi-bin/saveConfig.cgi?" + "frequency:" + document.getElementById('frequency').value + "\\" + "gain:" + document.getElementById('gain').value;
	//document.getElementById('info-div').innerHTML = url;
	document.getElementById('info-div').innerHTML = httpGET(url);
}