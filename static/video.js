// var video = null;
// var overlay = null;

function startup() {
  var video = document.getElementById("watchMe");
  var overlay = document.getElementById("overlay");
  var video_icon = document.getElementById("video_icon");
  console.log(video);

  video.addEventListener(
    "ended",
    function() {
      console.log("ended");
      video.style.display = "none";
    },
    false
  );

  video_icon.addEventListener("click", function() {
    video.style.display = "block";
    video.play();
  });
}

window.addEventListener("load", startup, false);
