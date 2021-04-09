let video = document.querySelector('.live-feed');
let options = {
  video:true
}
navigator.mediaDevices.getUserMedia(options)
  .then(function(stream) {
    video.srcObject = stream;
  })
  .catch(function(error) {
    alert("An error occured", error)
  })