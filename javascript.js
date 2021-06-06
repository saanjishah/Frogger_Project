/**
 * Created by shah1932 on 11/28/2017.
 */
var a;
var frogPic = new Image();
frogPic.src = "resources/frog.png";
var hapfrogpic = new Image();
hapfrogpic.src = "resources/happy frog.png";
var carPictleft = new Image();
carPictleft.src = "resources/blue car.png";
var carPictright = new Image();
carPictright.src = "resources/green car.png";
var logPic = new Image();
logPic.src = "resources/log.png";
var lilyPic = new Image();
lilyPic.src = "resources/lily.png";
var heartpic = new Image();
heartpic.src = "resources/heart.png";
var display_win1_frog = false;
var display_win2_frog = false;
var display_win3_frog = false;
var display_win4_frog = false;
var display_win5_frog = false;
var lives = 3;
var score = 0;


var hearts = [];

var lily = [];

var logright = [];

var logleft = [];

var carsleft = [];

var carsRight = [];

var frogwins = [];
function initialize1(){
    document.getElementById("reset").disabled = true;
    score = 0;
    drawBackground();
    //hearts
    hearts.push(createImage("resources/heart.png", "heart1", 2,400));
    heart1 = createImage("resources/heart.png", "heart1",20,20);

    hearts.push(createImage("resources/heart.png", "heart2", 22,400));
    heart2 = createImage("resources/heart.png", "heart2", 20,20);

    hearts.push(createImage("resources/heart.png", "heart3", 42,400));
    heart3 = createImage("resources/heart.png", "heart3", 20,20);
}
function initialize() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    //frog
    frogbegin = createImage("resources/frog.png", "frogbegin",250,370);
    ctx.drawImage(frogbegin,frogbegin.left,frogbegin.top,25,30);
//winning frogs
    frogwins.push(createImage("resources/happy frog.png", "win1",45,50));
    win1 = createImage("resources/happy frog.png", "win1",20,5);

    frogwins.push(createImage("resources/happy frog.png", "win2",45,50));
    win2 = createImage("resources/happy frog.png", "win2",115,5);

    frogwins.push(createImage("resources/happy frog.png", "win3",45,50));
    win3 = createImage("resources/happy frog.png", "win3",230,5);

    frogwins.push(createImage("resources/happy frog.png", "win4",45,50));
    win4 = createImage("resources/happy frog.png", "win4",335,5);

    frogwins.push(createImage("resources/happy frog.png", "win5",45,50));
    win5 = createImage("resources/happy frog.png", "win5",445,5);
    //logs
    logright.push(createImage("resources/log.png", "log1", 100,60));
    log1 = createImage("resources/log.png", "log1",40,20);

    logright.push(createImage("resources/log.png", "log2", 327,60));
    log2 = createImage("resources/log.png", "log2", 40,20);

    logright.push(createImage("resources/log.png", "log3", 20,125));
    log3 = createImage("resources/log.png", "log3", 40,20);

    logright.push(createImage("resources/log.png", "log4", 376,125));
    log4 = createImage("resources/log.png", "log4", 40,20);

    logleft.push(createImage("resources/log.png", "log5", 228,90));
    log5 = createImage("resources/log.png", "log5",40,20);

    logleft.push(createImage("resources/log.png", "log6",447,90));
    log6 = createImage("resources/log.png", "log6", 40,20);

    logleft.push(createImage("resources/log.png", "log7",514,155));
    log7 = createImage("resources/log.png", "log7", 40,20);

    logleft.push(createImage("resources/log.png", "log8", 278,155));
    log8 = createImage("resources/log.png", "log8", 40,20);

//lily
    lily.push(createImage("resources/lily.png", "lily1", 0,5));
    lily1 = createImage("resources/lily.png", "lily1", 80,60);

    lily.push(createImage("resources/lily.png", "lily2", 110,5));
    lily2 = createImage("resources/lily.png", "lily2", 80,60);

    lily.push(createImage("resources/lily.png", "lily3", 220,5));
    lily3 = createImage("resources/lily.png", "lily3", 80,60);

    lily.push(createImage("resources/lily.png", "lily4", 330,5));
    lily4 = createImage("resources/lily.png", "lily4", 80,60);

    lily.push(createImage("resources/lily.png", "lily5", 430,5));
    lily5 = createImage("resources/lily.png", "lily5", 80,60);
//cars
    carsleft.push(createImage("resources/blue car.png", "car1", 260,230));
    firstCarleft = createImage("resources/blue car.png", "car1", -10,250);

    carsleft.push(createImage("resources/blue car.png", "car2", 0,230));
    secondCarleft = createImage("resources/blue car.png", "car2", -10,250);

//bottom

    carsleft.push(createImage("resources/blue car.png", "car2", 10,290));
    fifthCarleft = createImage("resources/blue car.png", "car2", -10,250);

    carsleft.push(createImage("resources/blue car.png", "car3", 490,290));
    sixthCarleft = createImage("resources/blue car.png", "car3", -10,250);
//right
    carsRight.push(createImage("resources/green car.png", "car1", 150,260));
    firstCarright = createImage("resources/green car.png", "car1", -10,250);

    carsRight.push(createImage("resources/green car.png", "car2", 50,260));
    secondCarright = createImage("resources/green car.png", "car2", -10,250);

//bottom

    carsRight.push(createImage("resources/green car.png", "car2", 60,320));
    fifthCarright = createImage("resources/green car.png", "car2", -10,250);

    carsRight.push(createImage("resources/green car.png", "car3", 480,320));
    sixthCarright = createImage("resources/green car.png", "car3", -10,250);

    drawBackground();
//animate();
}
function startAnimation() {
    initialize1();
    animate();

}
function reset() {
    //cancelAnimationFrame(a);
    document.getElementById("Start").disabled = false;
    frogbegin.left = 250;
    frogbegin.top = 370;
    display_win5_frog = false;
    display_win4_frog = false;
    display_win3_frog = false;
    display_win2_frog = false;
    display_win1_frog = false;
    lives = 3;
    initialize1();
}
function animate(){
    a=requestAnimationFrame(animate);
    drawBackground();
    drawbase();
    road();
    drawhearts();
    water();
    drawSlot();
    drawLog();
    drawFrog();
    drawCarsleft();
    drawCarsright();
    collision();
    document.getElementById("Start").disabled = true;

}
function drawBackground(){
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle="#32B622";	//sets the fill color (black)
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
}
function drawbase(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#000000"
    ctx.fillRect(0,400,500,20);
}
var createImage = function(src, title,xcoord,ycoord) {
    var img   = new Image();
    img.src   = src;
    img.alt   = title;
    img.title = title;
    img.left = xcoord;
    img.top = ycoord;
    return img;
};

function drawFrog(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(frogPic,frogbegin.left,frogbegin.top,25,30);
    if (frogbegin.left > 500){
        frogbegin.left = 250;
        frogbegin.top = 370;
        lives = lives - 1;
        score = score - 50;
        hearts.pop();
    }
    if (frogbegin.left < 0){
        frogbegin.left = 250;
        frogbegin.top = 370;
        lives = lives - 1;
        score = score - 50;
        hearts.pop();
    }
    if(frogbegin.top>370){
        frogbegin.left = 250;
        frogbegin.top = 370;
        lives = lives - 1;
        score = score - 50;
        hearts.pop();
    }
}

function water(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#42CDE3";
    ctx.fillRect(0,0,500,190);
}
function drawLog(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i=0;i<logleft.length;i++){
        logleft[i].left-=1;
        ctx.drawImage(logleft[i],logleft[i].left, logleft[i].top,40,20);
        if (logleft[i].left < 0){
            logleft[i].left=550;
        }
    }

    for(i=0;i<logright.length;i++){
        logright[i].left+=1;
        ctx.drawImage(logright[i],logright[i].left, logright[i].top,40,20);
        if (logright[i].left > 500){
            logright[i].left=-50;
        }
    }
}
function drawhearts(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i=0;i<hearts.length;i++){
        ctx.drawImage(hearts[i],hearts[i].left, hearts[i].top,20,20);
    }
}
function road(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#767676"
    ctx.fillRect(0,220,500,150);
}
function drawCarsleft() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i=0;i<carsleft.length;i++){
        carsleft[i].left-=1;
       ctx.drawImage(carsleft[i],carsleft[i].left, carsleft[i].top,40,40);
        if (carsleft[i].left < 0){
            carsleft[i].left=550;
        }
   }
}
function drawCarsright() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i=0;i<carsRight.length;i++){
        carsRight[i].left+=1;
        ctx.drawImage(carsRight[i],carsRight[i].left, carsRight[i].top,40,40);
        if (carsRight[i].left > 500){
            carsRight[i].left=-50;
        }
    }
}
function drawSlot() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i=0;i<lily.length;i++){
        ctx.drawImage(lily[i],lily[i].left, lily[i].top,80,60);
    }
    if (display_win1_frog == true) {
        ctx.drawImage(win1,win1.left,win1.top,45,50);
    }
    if (display_win2_frog == true) {
        ctx.drawImage(win2,win2.left,win2.top,45,50);
    }
    if (display_win3_frog == true) {
        ctx.drawImage(win3,win3.left,win3.top,45,50);
    }
    if (display_win4_frog == true) {
        ctx.drawImage(win4,win4.left,win4.top,45,50);
    }
    if (display_win5_frog == true) {
        ctx.drawImage(win5,win5.left,win5.top,45,50);
    }
}
$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);
    //alert("frog");
    if(keycode == 87)
    {
        //up
        frogbegin.top-=30;


    }
    if(keycode == 68)
    {
        //right
        frogbegin.left+= 30;
    }
    if(keycode == 65)
    {
        //left
        frogbegin.left-=30;
    }
    if(keycode == 83)
    {
        //down
        frogbegin.top+=30;
    }
    score = score +100;
    //all key numbers can be found on the internet
});

function collision(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var watercol = false;
    var logcolr = false;
    var logcoll = false;
    var lilycol = false;
    var win;
    if(frogbegin.top < 190){
        watercol = true;
        //alert("water");
    }
    for(i=0;i<logleft.length;i++) {
        if (frogbegin.left < logleft[i].left + 30 && frogbegin.left + 30 > logleft[i].left && frogbegin.top < logleft[i].top + 30 && frogbegin.top + 30 > logleft[i].top) {
            logcoll = true;
            //alert("true");
        }
    }
    for(i=0;i<logright.length;i++) {
        if (frogbegin.left < logright[i].left + 30 && frogbegin.left + 30 > logright[i].left && frogbegin.top < logright[i].top + 30 && frogbegin.top + 30 > logright[i].top) {
            logcolr = true;
            //alert("true");
        }
    }
    if(watercol== true && logcoll== true){
        frogbegin.left-=1;
       // document.getElementById('disp').innerHTML = "Keep going left";
    }
    if(watercol== true && logcolr== true){
        frogbegin.left+=1;
        //document.getElementById('disp').innerHTML = "Keep going right";
    }

    for(i=0;i<carsleft.length;i++) {
        if (frogbegin.left < carsleft[i].left + 30 && frogbegin.left + 30 > carsleft[i].left && frogbegin.top < carsleft[i].top + 30 && frogbegin.top + 30 > carsleft[i].top) {
            frogbegin.left = 250;
            frogbegin.top = 370;
            lives = lives - 1;
            score = score - 50;
            hearts.pop();

        }
    }
    for(i=0;i<carsRight.length;i++) {
        if (frogbegin.left < carsRight[i].left + 40 && frogbegin.left + 40 > carsRight[i].left && frogbegin.top < carsRight[i].top + 40 && frogbegin.top + 40 > carsRight[i].top) {
            frogbegin.left = 250;
            frogbegin.top = 370;
            lives = lives - 1;
            score = score - 50;
            hearts.pop();
            //document.getElementById('disp').innerHTML = "ouch";
        }
    }
    for(i=0;i<lily.length;i++) {
        if (frogbegin.left < lily[i].left + 30 && frogbegin.left + 30 > lily[i].left && frogbegin.top < lily[i].top + 30 && frogbegin.top + 30 > lily[i].top) {
            lilycol = true;
            if(i==0){
                ctx.drawImage(win1,win1.left,win1.top,45,50);
                display_win1_frog = true;
            }
            if(i==1){
                ctx.drawImage(win2,win2.left,win2.top,45,50);
                display_win2_frog = true;
            }
            if(i==2){
                ctx.drawImage(win3,win3.left,win3.top,45,50);
                display_win3_frog = true;
            }
            if(i==3){
                ctx.drawImage(win4,win4.left,win4.top,45,50);
                display_win4_frog = true;
            }
            if(i==4){
                ctx.drawImage(win5,win5.left,win5.top,45,50);
                display_win5_frog = true;
            }
            frogbegin.left = 250;
            frogbegin.top = 370;


            //document.getElementById('disp').innerHTML = "YOU WIN!!!!!";
        }
        if(display_win1_frog == true && display_win2_frog == true && display_win3_frog == true && display_win4_frog == true && display_win5_frog == true){
            ctx.font = "50px Arial";
            ctx.fillStyle = "#000000";
            ctx.fillText("YOU WIN!",100,200);
            win = true;
            score = score + 200;
            document.getElementById("reset").disabled = false;
            highscoredisp();
        }
    }
    if(watercol == true && logcoll == false && logcolr == false && lilycol == false){
        frogbegin.left = 250;
        frogbegin.top = 370;
        document.getElementById('disp').innerHTML = "oops!";
        lives = lives - 1;
        score = score - 50;
        hearts.pop();
    }
    if(lives == 0){
        ctx.font = "50px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("YOU LOSE!",100,200);
        document.getElementById("reset").disabled = false;
        win = false;
        highscoredisp();
    }
    document.getElementById('score').innerHTML = "Score: " + score;
}
var highscore = 0;
function highscoredisp(){
    if(highscore <= score){
        highscore = score;
    }
    document.getElementById('high').innerHTML = "High Score: " + highscore;
}