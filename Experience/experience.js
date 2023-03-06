function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal-on-scroll');
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 50;
  
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('reveal');
      }
    }
  }
  
  window.addEventListener('scroll', revealOnScroll);
  
