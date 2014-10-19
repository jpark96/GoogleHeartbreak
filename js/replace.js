// put code here
$(document).ready(function(){
	console.log("ready");
	if (document.URL.substring(0, 22) === "https://www.google.com") {
		var is_fan = prompt("Are you a fan of Google? (Type 'Yes' or 'No')");
		if (is_fan != "Yes") {
			alert("Google is HurtBrkn!");
			window.open("https://www.youtube.com/watch?v=HWqKPWO5T4o", "_self");
			window.open("http://mrdoob.com/projects/chromeexperiments/google-gravity/");
		} else {
			alert("Google Approves!")
			window.open("https://www.youtube.com/watch?v=2Z4m4lnjxkY", "_self");
			window.open("https://www.facebook.com/");
		}	
	}
	if (document.URL === "http://mrdoob.com/projects/chromeexperiments/google-gravity/") {
		$('img').each(function(i) {
			document.body.style.background = '#000000';
			$(this).attr('src', 'http://cdn.alltheragefaces.com/img/faces/large/sad-broken-heart-l.png');
		})
	}
	if (document.URL === "https://www.facebook.com/") {
		$('img').each(function(i) {
			document.body.style.background = '#4B0082';
			$(this).attr('src', 'http://thecelltribe.com/wp-content/uploads/2013/01/5e309_Apple_GoogleTroll.jpg');
		})
	}
});