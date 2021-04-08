
function menuClick() {
    var x = document.getElementById("Topnavi");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function hideCookies() {
  document.getElementById("cookies").style.display = "none";
}


