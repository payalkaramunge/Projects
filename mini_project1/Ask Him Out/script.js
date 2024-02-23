function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
  
  const moveRandom = document.querySelector("#move-random");
  
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
  
  // 1.function moveRandomEl(elm)
  // This line declares a function named moveRandomEl that takes a parameter elm, representing an HTML element. 
  // This function will be responsible for moving the provided element to a random position.
  //  
  // 2.elm.style.position = "absolute";
  // elm.style.position = "absolute";: Sets the CSS position property of the provided element (elm) to "absolute". 
  // This means that the element will be positioned relative to its closest positioned ancestor or the containing element.

  // 3.elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
   // Generates a random number between 5 and 94 (inclusive) using Math.
  // random(), multiplies it by 90, rounds it down to the nearest integer using Math.floor(), and then adds 5.
  // This calculated value is set as the CSS top property of the provided element with a percentage unit. 
  // This line effectively moves the element to a random vertical position on the screen.

  // 4.elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  // Similar to the previous line, it generates a random number between 5 and 94, multiplies it by 90, rounds it down, adds 5,
  //  and sets the result as the CSS left property of the provided element with a percentage unit.
  //  This line moves the element to a random horizontal position on the screen.
  
  // 5.const moveRandom = document.querySelector("#move-random");
  // Retrieves the HTML element with the ID "move-random" and assigns it to the variable moveRandom. 
  // This assumes that there is an HTML element with the ID "move-random" in the document

  // 6.moveRandom.addEventListener("mouseenter", function (e)
  //  Adds an event listener to the moveRandom element. The event being listened for is "mouseenter," 
  // and when this event occurs, the provided function (an anonymous function here) will be executed.

  // 7.moveRandomEl(e.target);
  // Calls the moveRandomEl function with the event target (e.target) as the argument. 
  // In this context, it means that when the mouse enters the moveRandom element, 
  // the moveRandomEl function will be called to move the element to a random position.
