// control the auto refresh rate -> 1000 = 1 second
var refreshRate = 60000; // 60 seconds

// Automatically reload the browser
setInterval(function() {
   window.location.reload();
}, refreshRate);

// Hide the images on load
$('#chicago').hide();

// Get a random image from Unsplash and fade it in on load
$('#chicago').css({
  // serves a random image from this collection on Unsplash.com
  'background-image' : 'url(https://source.unsplash.com/random/1920x1080?military,usa)'
}).fadeIn(1500);
