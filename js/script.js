$(document).ready(function() {
  animateDiv($('.a'));
});

function makeNewPosition($container) {

  // Get viewport dimensions (remove the dimension of the div)
  var h = $container.height() - 50;
  var w = $container.width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];

}

function animateDiv($target) {
  var newq = makeNewPosition($target.parent());
  var oldq = $target.offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $target.animate({
      top: newq[0],
      left: newq[1]
  }, speed, function() {
      animateDiv($target);
  });

};

function calcSpeed(prev, next) {

  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = .15;

  var speed = Math.ceil(greatest / speedModifier);

  return speed;

}

// Javascript is used to set the clock to your computer time.

var currentSec = getSecondsToday();

var seconds = (currentSec / 60) % 1;
var minutes = (currentSec / 3600) % 1;
var hours = (currentSec / 43200) % 1;

setTime(60 * seconds, "second");
setTime(3600 * minutes, "minute");
setTime(43200 * hours, "hour");

function setTime(left, hand) {
  $(".clock2__" + hand).css("animation-delay", "" + left * -1 + "s");
}

function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; 
  return Math.round(diff / 1000);
}

// ...ConvolverNo


function colorChange() {
  var color = '#';
  var letters = ['3a3ee2', '398163', 'da6324', '643ae8', '5ab4eb', '9ea747', 'caed36', 'ED60A7', 'F014EB', '2FD0D8', '9B96F8'];

  color += letters[Math.floor(Math.random() * letters.length)];
  var bodyTag = document.getElementById("colorCont");
  document.body.style.background = color;
}