var p;

function d_day() {
  var today = new Date();
  var ss = today.getSeconds();
  var mi = today.getMinutes();
  var hh = today.getHours();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  p = document.getElementById("timer");

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  if (mm == 12 && dd > 25) {
    yyyy = yyyy + 1
  }

  var cdate = new Date(yyyy, 11, 25, 0, 0, 0);

  var time = Math.abs(cdate.getTime() - today.getTime());

  var d = Math.floor(time / (1000 * 60 * 60 * 24));
  var h = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((time % (1000 * 60)) / 1000);

  p.innerHTML = d + "일 " + h + "시 " + m + "분 " + s + "초";

  setTimeout("d_day()", 1000);
}
