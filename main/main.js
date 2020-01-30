var aud;
var played = 0;
var header;

function check() {

    if (!window.screenTop && !window.screenY) {
       console.log('not fullscreen');
    } else {
         console.log('fullscreen');
    }
}

window.onload = function() {
  document.addEventListener("fullscreenchange", function () {
    console.log(document.fullscreen);
}, false);

document.addEventListener("mozfullscreenchange", function () {
  console.log(document.mozFullScreen);
}, false);

document.addEventListener("webkitfullscreenchange", function () {
  console.log(document.webkitIsFullScreen);
}, false);

document.addEventListener("msfullscreenchange", function () {
  console.log(document.msFullscreenElement);
}, false);

  header = document.getElementById("header");

  document.addEventListener('keydown', function() {
    console.log("down");

    header.style.display = 'block';
  });

  document.addEventListener('keyup', function() {
    console.log("up");

    header.style.display = 'none';
  });

  aud = document.getElementById("audio");

  // loadImgs();
  d_day();

  bot = document.getElementsByClassName("button");
  var no10 = document.getElementsByClassName('n10');
  var no20 = document.getElementsByClassName('n20');
  var no30 = document.getElementsByClassName('n30');
  var no40 = document.getElementsByClassName('n40');
  var no50 = document.getElementsByClassName('n50');
  var no60 = document.getElementsByClassName('n60');

  for (var i in bot) {
    if (i >= 6) {
      bot[i].style.display = 'none';
    }
  }

  bot[0].onclick = function() {
    for (var i in no10) {
      if (i >= 0) {
        if (no10[i].style.display == "block") {
          no10[i].style.display = "none";
        } else {
          no10[i].style.display = "block";
        }
      }
    }
  }

  bot[1].onclick = function() {
    for (var i in no20) {
      if (i >= 0) {
        if (no20[i].style.display == "block") {
          no20[i].style.display = "none";
        } else {
          no20[i].style.display = "block";
        }
      }
    }
  }

  bot[2].onclick = function() {
    for (var i in no30) {
      if (i >= 0) {
        if (no30[i].style.display == "block") {
          no30[i].style.display = "none";
        } else {
          no30[i].style.display = "block";
        }
      }
    }
  }

  bot[3].onclick = function() {
    for (var i in no40) {
      if (i >= 0) {
        if (no40[i].style.display == "block") {
          no40[i].style.display = "none";
        } else {
          no40[i].style.display = "block";
        }
      }
    }
  }

  bot[4].onclick = function() {
    for (var i in no50) {
      if (i >= 0) {
        if (no50[i].style.display == "block") {
          no50[i].style.display = "none";
        } else {
          no50[i].style.display = "block";
        }
      }
    }
  }

  bot[5].onclick = function() {
    for (var i in no60) {
      if (i >= 0) {
        if (no60[i].style.display == "block") {
          no60[i].style.display = "none";
        } else {
          no60[i].style.display = "block";
        }
      }
    }
  }
}

function ClickToPlay() {
  if (played == 0) {
    aud.play();
    played = 1;
  }
}
