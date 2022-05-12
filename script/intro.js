let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.logo-parts');
let dateSpan = document.querySelectorAll('.date-parts');
window.addEventListener('DOMContentLoaded', () => {
  setTimeout( () => {
    logoSpan.forEach((span, index) => {
      setTimeout( () => {
        span.classList.add('active');
      }, (index + 1) * 110);
    });

    dateSpan.forEach((span, index) => {
      setTimeout( () => {
        span.classList.add('visible');
        span.classList.remove('hidden');
      }, (index + 1) * 330);
      setTimeout( () => {
        if(index < 7){
          span.classList.remove('visible');
          span.classList.add('hidden');
        }
      }, 330 + (index + 1) * 330);
    });

    setTimeout(() => {
      logoSpan.forEach((span, index) => {
        setTimeout( () => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (span + 1) * 50);
      });
    }, 3737);

    setTimeout(() => {
      intro.style.top = '-100vh';
    }, 4440);

  });
});

