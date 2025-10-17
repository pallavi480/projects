const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const captureBtn = document.getElementById("capture");
const filterSelect = document.getElementById("filter");
const downloadLink = document.getElementById("download");
const ctx = canvas.getContext("2d");

navigator.mediaDevices
  .getUserMedia({ video: true, audio: false })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    alert("Error accessing webcam: " + err);
    console.error(err);
  });

captureBtn.addEventListener("click", () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.save();
  ctx.scale(-1, 1); 
  ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
  ctx.restore();
  canvas.style.filter = filterSelect.value;
  downloadLink.href = canvas.toDataURL("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGDrVGFzkBJKvOfMsCoOlO2z2v1PKKDF5umg&s");
});

filterSelect.addEventListener("change", () => {
  canvas.style.filter = filterSelect.value;
});
