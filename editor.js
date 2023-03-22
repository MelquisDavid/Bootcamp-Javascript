const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const fileInput = document.getElementById('file-input');
const brightnessSlider = document.getElementById('brightness-slider');
const contrastSlider = document.getElementById('contrast-slider');
const blurSlider = document.getElementById('blur-slider');
const grayscaleBtn = document.getElementById('grayscale-btn');
const sepiaBtn = document.getElementById('sepia-btn');
const invertBtn = document.getElementById('invert-btn');
const resetBtn = document.getElementById('reset-btn');
const saveButton = document.getElementById('save-btn');


let img = null;

// Agregar la función de guardar imagen
function saveImage() {
  console.log(saveButton)
  // Obtener la representación de la imagen en formato de datos URI
  var dataURI = canvas.toDataURL();

  // Crear un enlace para descargar la imagen
  var downloadLink = document.createElement('a');
  downloadLink.href = dataURI;
  downloadLink.download = 'imagen_editada.png';

  // Hacer clic en el enlace para descargar la imagen
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

// Load image into canvas when file is selected
fileInput.addEventListener('change', () => {
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(fileInput.files[0]);
  }
});

// Brightness effect
brightnessSlider.addEventListener('input', () => {
  if (img !== null) {
    const brightness = brightnessSlider.value;
    ctx.filter = `brightness(${brightness}%)`;
    ctx.drawImage(img, 0, 0);
  }
});

// Contrast effect
contrastSlider.addEventListener('input', () => {
  if (img !== null) {
    const contrast = contrastSlider.value;
    ctx.filter = `contrast(${contrast}%)`;
    ctx.drawImage(img, 0, 0);
  }
});

// Blur effect
blurSlider.addEventListener('input', () => {
  if (img !== null) {
    const blur = blurSlider.value;
    ctx.filter = `blur(${blur}px)`;
    ctx.drawImage(img, 0, 0);
  }
});

// Grayscale effect
grayscaleBtn.addEventListener('click', () => {
  if (img !== null) {
    ctx.filter = 'grayscale(100%)';
    ctx.drawImage(img, 0, 0);
  }
});

// Sepia effect
sepiaBtn.addEventListener('click', () => {
  if (img !== null) {
    ctx.filter = 'sepia(100%)';
    ctx.drawImage(img, 0, 0);
  }
});

// Invert effect
invertBtn.addEventListener('click', () => {
  console.log("first")
  if (img !== null) {
    ctx.filter = 'invert(100%)';
    ctx.drawImage(img, 0, 0);
  }
});

// Reset to original image
resetBtn.addEventListener('click', () => {
  console.log("first")
  if (img !== null) {
    ctx.filter = 'none';
    ctx.drawImage(img, 0, 0);
    brightnessSlider.value = 100;
    contrastSlider.value = 100;
    blurSlider.value = 0;
  }
});

// Agregar el evento de clic al botón de guardar

saveButton.addEventListener('click', function() {
    if (img !== null) {
  saveImage();
    }
});
