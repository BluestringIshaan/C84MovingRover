canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');

var NasaImageArray = ["NasaImage1.jpeg", "NasaImage2.jpeg", "NasaImage3.jpeg", "NasaImage4.jpeg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);


rover_x = 10;
rover_y = 10;
rover_width = 100;
rover_height = 90;
background_image = NasaImageArray[random_number];
rover_image = "rover.png";

function add() {
    backgroundImg_Tag = new Image();
    backgroundImg_Tag.onload = uploadBackground;
    backgroundImg_Tag.src = background_image;

    roverImg_Tag = new Image();
    roverImg_Tag.onload = uploadRover;
    roverImg_Tag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(backgroundImg_Tag,0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImg_Tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if(keypress == '37') {
        console.log("left");
        left();
    }
    if(keypress == '38') {
        console.log("up");
        up();
    }
    if(keypress == '39') {
        console.log("right");
        right();
    }
    if(keypress == '40') {
        console.log("down");
       down();
    }
}

function up() {
    if(rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow key is pressed X = " + rover_x + "  Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if(rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow key is pressed X = " + rover_x + "  Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if(rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow key is pressed X = " + rover_x + "  Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if(rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow key is pressed X = " + rover_x + "  Y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}