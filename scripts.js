// control the auto refresh rate -> 1000 = 1 second
var refreshRate = 30000; // 30 seconds

// Automatically reload the browser
setInterval(function() {
   window.location.reload();
}, refreshRate);

// Hide the images on load
$('#chicago').hide();

// Get a random image from Unsplash and fade it in on load
$('#chicago').css({
  // serves a random image from this collection on Unsplash.com
  'background-image' : 'url(https://source.unsplash.com/random/1600x900)'
}).fadeIn(1500);
