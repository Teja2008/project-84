canvas= document.getElementById(mycanvas)
ctx= canvas.getContext("2d");
img_width= 300
img_height=100

var img_image;
img_x= 100;
img_y= 100;

function add(){
img_image = new Image(); //defining a variable with a new image
img_image.onload = uploading; //setting a function, onloading this variable 
img_image.src = img_image; // load image
}
function uploading(){
    ctx.drawings(img_imagetag, img_x,img_y,img_width,img_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed = e.Keycode;
    console.log(keyPressed);

    if((keyPressed>= 97 && keyPressed<=122) (keyPressed >=65 && keyPressed<= 90))
{
    aplhabetkey();
    document.getElementById("d1").innerHTML.innerHTML= "you have clicked an alphabet";
    console.log("alphabet key")
}



if(keyPressed>= 48 && keyPressed<=57) 
{
    numberkey();
    document.getElementById("d1").innerHTML.innerHTML= "you have clicked an number";
    console.log("number key")
}

if(keyPressed>= 37 && keyPressed<=40) 
{
    arrowkey();
    document.getElementById("d1").innerHTML.innerHTML= "you have clicked an arrow";
    console.log("arrow key")
}


if(keyPressed 17) (keypressed 18) (keypressed 27)
{
    speacialkey();
    document.getElementById("d1").innerHTML.innerHTML= "you have clicked an speacial key";
    console.log("speacial key")
}

function aplhabetkey()
{ img_image="Alpkey.png";
add();
}

function numberkey()
{ img_image="numkey.png";
add();
}

function arrowkey()
{ img_image="arrowKey.png"}
add();
}

function speacialkey()
{ img_image="speacialKey.png"}
add();
}
