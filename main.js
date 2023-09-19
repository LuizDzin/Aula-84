canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

roverY = 10;
roverX = 10;
randomNumber = Math.floor|(Math.random() * 3);
nasaImg = ["MarsImg1.jpg" , "MarsImg2.jpg" , "MarsImg3.jpg"]
backgroundImage = nasaImg[randomNumber];
roverImage = "rover.png";

function add() {

    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    roverImgTag = new Image();
    roverImgTag.onload = uploadRover;
    roverImgTag.src = roverImage;
}

function uploadBackground() {
ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
    }
    window.addEventListener("keydown", myKeyDown);

    function myKeyDown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(keyPressed == '87')
        {
            up();
            console.log("cima");
        }
        if(keyPressed == '65')
        {
            left();
            console.log("esquerda");
        } if(keyPressed == '83')
        {
            down();
            console.log("baixo");
        } if(keyPressed == '68')
        {
            rigth();
            console.log("direita");
        }
    }
    function up() {
if(roverY >=0)
{
    roverY = roverY - 10;
    console.log("Quando a seta para cima é pressionada, x = " + roverX + " | y = " + roverY);
    uploadBackground();
    uploadRover();
}
}function down() {
    if(roverY <=600)
    {
        roverY = roverY + 10;
        console.log("Quando a seta para cima é pressionada, x = " + roverX + " | y = " + roverY);
        uploadBackground();
        uploadRover();
    }
        }
    function left() {
        if(roverX >=0)
        {
            roverX = roverX - 10;
            console.log("Quando a seta para cima é pressionada, x = " + roverX + " | y = " + roverY);
            uploadBackground();
            uploadRover();
        }
            }
        function rigth() {
            if(roverX <=800)
            {
                roverX = roverX + 10;
                console.log("Quando a seta para cima é pressionada, x = " + roverX + " | y = " + roverY);
                uploadBackground();
                uploadRover();
            }
                }
                
            
        