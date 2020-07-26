var sliderIndex = 0;
var nextBtn = document.getElementById('next');
var previousBtn = document.getElementById('previous');
var sliderImages = document.getElementsByClassName('slider-images');
var sliderLength = sliderImages.length;

function moveNext() {
  var activeSlider = sliderImages[sliderIndex];

  if (activeSlider.classList.contains('active')) {
    activeSlider.classList.remove('active');
  }

  sliderIndex++;

  if (sliderIndex >= sliderLength) {
    sliderIndex = 0;
  }

  var nextSlider = sliderImages[sliderIndex];

  nextSlider.classList.add('active');
}

function movePrevious() {
  var activeSlider = sliderImages[sliderIndex];

  if (activeSlider.classList.contains('active')) {
    activeSlider.classList.remove('active');
  }

  sliderIndex--;

  if (sliderIndex < 0) {
    sliderIndex = sliderLength - 1;
  }

  var previousSlider = sliderImages[sliderIndex];

  previousSlider.classList.add('active');
}

nextBtn.onclick = moveNext;

previousBtn.onclick = movePrevious;

setInterval(moveNext, 2000);
