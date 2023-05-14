let ifInside = true;

function moveImageFromRightToLeft() {
  
  const image = document.querySelector('#bottom-right-img');
  let leftEdge = window.screenLeft || window.screenX;
  //let finalRight = leftEdge + 100;


  function animate() {
    let currentRight = parseInt(window.getComputedStyle(image).getPropertyValue('right'));
    let newRight = currentRight + 1;
    if (newRight <= leftEdge) {
      image.style.right = `${leftEdge}px`;
      return;
    }
    if (newRight + image.clientWidth < 0) {  // check if the image has left the screen
      window.removeEventListener('resize', animate);
      cancelAnimationFrame(animationID);
      return;
    }
    image.style.right = `${newRight}px`;
    let animationID = requestAnimationFrame(animate);
    window.addEventListener('resize', animate);  // re-add the event listener

    if (newRight > leftEdge) {
      clearInterval(animationID);
      if (newRight > document.body.clientWidth) {
        if(confirm('Good job!')){        
          console.log("1")
          ifInside = false;
          document.removeEventListener("mouseleave", moveImageFromRightToLeft) 
          window.location.reload(); 
        }
      }
    }
  }


  const animationID = requestAnimationFrame(animate);
  window.addEventListener('resize', animate);
}

document.addEventListener("mousemove", function(event) {

    //const x = event.clientX;
    const y = event.clientY;
    if(y > 10)
      window.location.reload(); 
    else
      moveImageFromRightToLeft();
    
});

 

