  let poskusi = 4;
  

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function tempAlert(msg, duration) {
    var el = document.createElement("div");
    el.className = "alert"
   
    el.innerHTML = msg;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, duration);
    document.body.appendChild(el);
    }

  // Define a function to check if two circles overlap
  function circlesOverlap(circle1, circle2) {
    var dx = circle1.offsetLeft - circle2.offsetLeft;
    var dy = circle1.offsetTop - circle2.offsetTop;
    var distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (circle1.offsetWidth / 2 + circle2.offsetWidth / 2);
  }
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Define a function to create circles
  function createCircles() {
    // Create an array to hold all the circles
    
    var circles = [];
    
    // Create a new circle element for each circle
    for (var i = 0; i < 25; i++) {
      var circle = document.createElement("div");
      // Set the class of the circle element
      circle.className = "circle";
      
      // Set the size of the circle element
      var size = getRandomNumber(20, 150);
      circle.style.width = size + "px";
      circle.style.height = size + "px";

      var divs = document.getElementsByClassName("circle");
      for (var i = 0; i < divs.length; i++) {
          divs[i].onclick = function() {
              poskusi--;
              console.log(poskusi);
              this.style.display = 'none';
              if (poskusi == 0){  
                location. reload()
              }
          }
      }
      
      // Check if the new circle overlaps with any existing circles
      var overlaps = true;
      while (overlaps) {
        overlaps = false;
        // Set the position of the circle element
        circle.style.left = getRandomNumber(0, window.innerWidth - size) + "px";
        circle.style.top = getRandomNumber(0, window.innerHeight - size) + "px";
        circle.style.backgroundColor = getRandomColor();
        circle.addEventListener('click', function() {
            var audio = new Audio('ben.mp3');
            audio.play();
            circle.classList.toggle('active');

          });
        // Check if the new circle overlaps with any existing circles
        for (var j = 0; j < circles.length; j++) {
          if (circlesOverlap(circle, circles[j])) {
            overlaps = true;
            break;
          }
        }
      }
      
      // Add the new circle to the array of circles
      circles.push(circle);
      // Add the new circle element to the body of the page
      document.body.appendChild(circle);
    }
    var circle1 = document.createElement("div");
    circle1.className = "specialCircle";
    var size = getRandomNumber(20, 150);
    circle1.style.width = size + "px";
    circle1.style.height = size + "px";
    circle1.style.left = getRandomNumber(0, window.innerWidth - size) + "px";
    circle1.style.top = getRandomNumber(0, window.innerHeight - size) + "px";
    circle1.style.backgroundColor = getRandomColor();
    circle1.addEventListener('click', function() {
        circle1.classList.toggle('active');
        var audio = new Audio('ummsasa3.mp3');
        audio.play();

    });

    circle1.onclick = function() {
        this.style.transform = 'scale(5)';
      

    }

    circles.push(circle1);
    document.body.appendChild(circle1);
  }

  // Call the createCircles function when the page loads
  window.onload = createCircles;