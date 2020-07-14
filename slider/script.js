var sliderIndex = 0;
var sliderLength = document.getElementsByClassName('slider-images').length;

document.getElementById('next').onclick = function () {
  var activeSlider = document.getElementsByClassName('slider-images')[
    sliderIndex
  ];

  if (activeSlider.classList.contains('active')) {
    activeSlider.classList.remove('active');
  }

  sliderIndex++;

  if (sliderIndex >= sliderLength) {
    sliderIndex = 0;
  }

  var nextSlider = document.getElementsByClassName('slider-images')[
    sliderIndex
  ];

  nextSlider.classList.add('active');
};

document.getElementById('previous').onclick = function () {
  var activeSlider = document.getElementsByClassName('slider-images')[
    sliderIndex
  ];

  if (activeSlider.classList.contains('active')) {
    activeSlider.classList.remove('active');
  }

  sliderIndex--;

  if (sliderIndex < 0) {
    sliderIndex = sliderLength - 1;
  }

  var previousSlider = document.getElementsByClassName('slider-images')[
    sliderIndex
  ];

  previousSlider.classList.add('active');
};
