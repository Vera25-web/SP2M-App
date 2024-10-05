let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  // Update current slide index
  currentSlide += direction;

  // Loop back to first slide if we reach the end
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  // Go to last slide if we go before the first slide
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  // Apply translation to slides
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
