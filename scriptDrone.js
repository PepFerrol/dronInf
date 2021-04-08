
function menuClick() {
    var x = document.getElementById("Topnavi");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function myFunction() {
    alert("Hello! I am an alert box!");
  }

  
  function yaw() {
    var val = document.getElementById("yawRange").value;
    var im = document.getElementById("yawImg");
    var txt = document.getElementById("yawText");

    txt.innerHTML = "Degrees: " +  val;
    im.style = "transform: rotateY(" + val + "deg);";

  };
  function pitch() {
    var val = document.getElementById("pitchRange").value;
    var im = document.getElementById("pitchImg");
    var txt = document.getElementById("pitchText");

    txt.innerHTML = "Degrees: " + val;
    im.style = "transform: rotateX(" + val + "deg);";

  };
  
