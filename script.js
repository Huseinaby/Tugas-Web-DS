let currSlide = 0;
const slides = document.querySelectorAll('.slide');



function showSlide(index){
  slides.forEach((slide, i ) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currSlide = (currSlide + 1) % slides.length;
  showSlide(currSlide);
  slides[currSlide].classList.add('slide-in-right');
  slides[currSlide].classList.remove('slide-in-left');
}



function prevSlide() {
  currSlide = (currSlide - 1 + slides.length) % slides.length;
  showSlide(currSlide);
  slides[currSlide].classList.add('slide-in-left');
  slides[currSlide].classList.remove('slide-in-right');
}

