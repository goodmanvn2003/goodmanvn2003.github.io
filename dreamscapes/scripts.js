// control the auto refresh rate -> 1000 = 1 second
var refreshRate = 60000; // 60 seconds

// Automatically reload the browser
setInterval(function() {
   window.location.reload();
}, refreshRate);

// Hide the images on load
$('#chicago').hide();

// Function to fetch and set the background image using a free, key-less public placeholder API (Picsum Photos)
function setPublicBackground() {
  const WIDTH = 1920;
  const HEIGHT = 1080;
  // Using Math.random() to generate unique random IDs for consistency/debugging
  const RANDOM_ID = Math.floor(Math.random() * 1000);
  // Constructing the URL directly from a reliable, key-less service
  const imageUrl = `https://picsum.photos/${WIDTH}/${HEIGHT}?random=${RANDOM_ID}`;

  $('#chicago').css({
    'background-image': `url(${imageUrl})`
  }).fadeIn(1500);
}

// Set the background image on load using the public service
setPublicBackground();
