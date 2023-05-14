  document.addEventListener("mousemove", function(event) {
    console.log("X: " + event.clientX + ", Y: " + event.clientY);
  });

// Create a div element for the text
const textDiv = document.createElement("div");

// Set the text content
textDiv.textContent = "Oh.. wauuuu! Look, there are so many coins in the fountain!";


// Set the text style
textDiv.style.position = "absolute";
textDiv.style.left = "45%";
textDiv.style.right = "10%";
textDiv.style.top = "50%";
textDiv.style.transform = "translateY(-50%)";
textDiv.style.fontSize = "28px";

// Add the text to the document body
document.body.appendChild(textDiv);

  // A function to generate a random red color
  function randomColor() {
    let r = Math.floor(Math.random() * 51) + 4;
    let g = Math.floor(Math.random() * 102) + 153;
    let b = Math.floor(Math.random() * 153) + 204;
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  
  // A function to create a circle element with a given radius and color
  function createCircle(radius, color) {
    let circle = document.createElement("div");
    circle.style.width = `${radius * 2}px`;
    circle.style.height = `${radius * 2}px`;
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = color;
    circle.style.position = "absolute";
    return circle;
  }
  
  // A function to create a big button that is made of multiple gradually smaller circles that overlap inside of it
  function createButton(numCircles) {
    // Get the body element
    let body = document.querySelector("body");
    
    // Get the window width and height
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Create a container element for the button
    let container = document.createElement("div");
    
    // Set the container position and size
    /*container.style.position = "relative";
    container.style.width = `${width}px`;
    container.style.height = `${height}px`;*/

    // Calculate the container position and size
    const containerWidth = width;
    const containerHeight = height;
    const containerX = window.innerWidth / 3 - containerWidth / 2;
    const containerY = (window.innerHeight - containerHeight) / 2;
    
    // Set the container position and size
    container.style.position = "absolute";
    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerHeight}px`;
    container.style.left = `${containerX}px`;
    container.style.top = `${containerY}px`;
    
    // Append the container to the body
    body.appendChild(container);
    
    // Calculate the initial radius of the largest circle
    let radius = Math.min(width, height) / numCircles;
    
    // Loop through the number of circles
    for (let i = numCircles; i > 0; i--) {
      // Generate a random color for the circle
      let color = randomColor();
      
      // Create a circle element with the current radius and color
      let circle = createCircle(radius, color);
      
      // Set the circle position to be centered in the container
      circle.style.left = `${(width - radius * 2) / 2}px`;
      circle.style.top = `${(height - radius * 2) / 2}px`;
      
      // Append the circle to the container
      container.appendChild(circle);
      
      // Decrease the radius by a factor of two for the next circle
      radius /= 2;
    }

    // Add click event listener to the big circle
    container.addEventListener("click", function(event) {
      clearPage();
      
      let numCoins = 3;
      // Create a div element for the text
      const textDiv = document.createElement("div");

      // Set the text content
      textDiv.textContent = "Darn, you yoinked 3 unfair coins! Quick, touch the last one!";


      // Set the text style
      textDiv.style.position = "absolute";
      textDiv.style.left = "35%";
      textDiv.style.right = "10%";
      textDiv.style.top = "25%";
      textDiv.style.transform = "translateY(-50%)";
      textDiv.style.fontSize = "28px";

// Add the text to the document body
document.body.appendChild(textDiv);

      generateCircles(numCoins, getMouseXY(event));
    });
  }

  // A function to clear a webpage
  function clearPage() {
    // Get the document element
    let doc = document.documentElement;
    // Set the innerHTML of the document to an empty string
    doc.innerHTML = "";
  }

  // A function to return current mouse pointer coordinates
  function getMouseXY(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    return { x: mouseX, y: mouseY };
  }
  
  // Call the function with a given number of circles
  createButton(7);

  function changePage() {
    window.location.href = "./gg.html";
  }

  function generateCircles(numCircles, mouseXY) {
    let circles = [];
    let circleSize = 150;
    let gap = 275;

    // Create numCircles circles and add them to the circles array
    for (let i = 0; i < numCircles; i++) {
        let circle = document.createElement("div");
        circle.style.position = "absolute";
        circle.style.width = circleSize + "px";
        circle.style.height = circleSize + "px";
        circle.style.left = (i * gap) + mouseXY.x - (circleSize / 2) + "px";
        circle.style.top = mouseXY.y - (circleSize / 2) + "px";
        
        if (i < numCircles - 1) {
            circle.innerHTML = '<img src="./imgs/euro_heads.png" style="width: 100%; height: 100%; object-fit: contain">';
        } else {
            circle.innerHTML = '<img src="./imgs/euro_tails.png" style="width: 100%; height: 100%; object-fit: contain" onclick=changePage()>';
        }
        
        document.body.appendChild(circle);
        circles.push(circle);
    }

    // Add mousemove event listener to the document object
    document.addEventListener("mousemove", function(event) {
        let mouseIsAboveCircle = false;
     
        // Check if the mouse is above any of the circles
        circles.forEach(function(circle) {
            let rect = circle.getBoundingClientRect();
            if (event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom) {
                mouseIsAboveCircle = true;
            }
        });
     
        // If the mouse is not above any of the circles, redirect to "gameover.html"
        if (!mouseIsAboveCircle) {
            window.location.href = "./gameover.html";
        }
    });
  }