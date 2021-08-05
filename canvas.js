

window.addEventListener("load", () => {
  const canva = document.getElementById("canvas");
  const context = canva.getContext("2d");

  //Setting canvas
  canva.height = window.innerHeight / 1.6;
  canva.width = window.innerWidth / 1.7;

  var drawing = false;

  //Setting Start position of thhe pointer
  function startP(e) {
    drawing = true;
    draw(e);
  }

  //Setting End position of thhe pointer
  function endP() {
    drawing = false;
    context.beginPath();
  }
  //Initialising variables to dynamically change on click events
  var color = "red";
  var style = "round";
  var thickness = 3;
  
   //Main drawing working

  function draw(e) {
    if (!drawing) {
      return;
    }
    //Brush style and thickness

    context.lineWidth = thickness;
    context.lineCap = style;

    //Initialising Click position and paining
    context.lineTo(e.layerX, e.layerY);
    context.stroke();
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(e.layerX, e.layerY);

    //Getting elements in variables

    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const white = document.getElementById("white");
    const reset = document.getElementById("reset");

    //adding event listeners to change color on clicks

    green.addEventListener("click", function () {
      color = "green";
      return;
    });
    blue.addEventListener("click", function () {
      color = "blue";
    });
    white.addEventListener("click", function () {
      color = "white";
    });
    reset.addEventListener("click", function () {
      context.clearRect(0, 0, canvas.width, canvas.height);
      color = "red";
    });
    //adding event listeners to change style on clicks

    const butt = document.getElementById("butt");
    const round = document.getElementById("round");
    const square = document.getElementById("square");

    butt.addEventListener("click", function () {
      style = "butt";
    });
    round.addEventListener("click", function () {
      style = "round";
    });
    square.addEventListener("click", function () {
      style = "square";
    });

    //adding event listeners to change thickness on clicks

    const pencil = document.getElementById("pencil");
    const marker = document.getElementById("marker");
    const brush = document.getElementById("brush");
    const paint = document.getElementById("paint");

    pencil.addEventListener("click", function () {
      thickness = 2;
    });
    marker.addEventListener("click", function () {
      thickness = 6;
    });
    brush.addEventListener("click", function () {
      thickness = 10;
    });
    paint.addEventListener("click", function () {
      thickness = 15;
    });
  }
//registering events to occur when mouse is clicked dragged or lifted  

  canvas.addEventListener("mousedown", startP);
  canvas.addEventListener("mouseup", endP);
  canvas.addEventListener("mousemove", draw);
});

window.addEventListener("resize", function () {

    //some browser does not keep the canvas position on resizing so adding an even listener to fix it
   
    canva.height = window.innerHeight / 1.6;
    canva.width = window.innerWidth / 1.7;
});
