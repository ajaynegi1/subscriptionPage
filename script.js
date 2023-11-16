
document.addEventListener('DOMContentLoaded', function () {
    
    if (window.innerWidth <= 768) {
    var containers = document.querySelectorAll('.container');
    var currentIndex = 0;

    
    containers.forEach(function (container, index) {
      if (index !== currentIndex) {
        container.style.display = 'none';
      }
    });

  
    var hammer = new Hammer(document.body);

    
    hammer.on('swiperight', function () {
      navigateContainer('previous');
    });

    hammer.on('swipeleft', function () {
      navigateContainer('next');
    });

    
    function navigateContainer(direction) {
     
      containers[currentIndex].style.display = 'none';

      if (direction === 'next') {
        currentIndex = (currentIndex + 1) % containers.length;
      } else if (direction === 'previous') {
        currentIndex = (currentIndex - 1 + containers.length) % containers.length;
      }

    
      containers[currentIndex].style.display = 'block';
    }
  }});