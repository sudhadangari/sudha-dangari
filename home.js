const images = [
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/751b87f2ba1e9a00.jpeg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/59cc03576ab30951.jpg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/5b309e98775e22e4.jpg?q=80",
];
let index = 0;
function showImage() {
  document.getElementById("slider").src = images[index];
}
function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}
function PREVImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}
setInterval(nextImage, 3000);
