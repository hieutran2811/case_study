const BAR_SPEED = 10;
let ballSpeedX = 1;
let ballSpeedY = 1;
const SPEED_BALL= 10;
let Bar = function (x,y,height,width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.ctx = document.getElementById("myCanvas").getContext("2d");
        this.drawBar = function () {
            this.ctx.fillRect(this.x, this.y, this.height, this.width);
        };
        this.clearBar = function () {
            this.ctx.clearRect(this.x,this.y,50,10);
        };
        this.moveLeft = function () {
            this.clearBar();
            this.x-= BAR_SPEED;
            this.drawBar();
        };
        this.moveRight = function () {
            this.clearBar();
            this.x+= BAR_SPEED;
            this.drawBar();
        };
        this.moveBar=function(event) {
            switch (event.which) {
                case 37:
                    this.moveLeft();
                    break;
                case 39:
                    this.moveRight();
                    break;
            }
        }
};
let Ball = function(x,y,r){
    this.r=r;
    this.x=x;
    this.y=y;
    this.ctx = document.getElementById("myCanvas").getContext("2d");
    this.drawBall = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        this.ctx.closePath();
        this.ctx.fill();
    };
    this.clearBall = function () {
        this.ctx.clearRect(this.x-this.r,this.y-this.r,this.r*2,this.r*2);
    };
    this.moveBall = function () {
        this.clearBall();
        this.checkedCollision();
        this.collisionBrick();
        this.drawBall();
    };
    this.checkedCollision = function () {
        if(this.x===this.r||(this.x+this.r)===500){
            ballSpeedX=(-ballSpeedX);
        }
        if(this.y===this.r||((this.y+this.r)===450 && (this.x+this.r)>bar.x && (this.x+this.r)<(bar.x+50))){
            ballSpeedY=(-ballSpeedY);
        }
        if(this.y===500-this.r*2){
            alert("you lose!");
        }
        this.x+=ballSpeedX;
        this.y+=ballSpeedY;
    };
    this.collisionBrick = function () {
        if((this.y===brick.y+brick.height+this.r && this.x>brick.x-this.r && this.x<brick.x+brick.width+this.r)||(this.y===brick.y-this.r) && this.x>brick.x-this.r && this.x<brick.x+brick.width+this.r){
            ballSpeedY=(-ballSpeedY);
            brick.clearBrick();
        }
        if((this.x===brick.x+brick.width+this.r && this.y>brick.y-this.r && this.y<brick.y+brick.height+this.r)||(this.x===brick.x-this.r && this.y>brick.y-this.r && this.y<brick.y+brick.height+this.r)){
            ballSpeedX=(-ballSpeedX);
            brick.clearBrick();
        }
        if((this.y===brick1.y+brick1.height+this.r && this.x>brick1.x-this.r && this.x<brick1.x+brick1.width+this.r)||(this.y===brick1.y-this.r) && this.x>brick1.x-this.r && this.x<brick1.x+brick1.width+this.r){
            ballSpeedY=(-ballSpeedY);
            brick1.clearBrick();
        }
        if((this.x===brick1.x+brick1.width+this.r && this.y>brick1.y-this.r && this.y<brick1.y+brick1.height+this.r)||(this.x===brick1.x-this.r && this.y>brick1.y-this.r && this.y<brick1.y+brick1.height+this.r)){
            ballSpeedX=(-ballSpeedX);
            brick1.clearBrick();
        }
        if((this.y===brick2.y+brick2.height+this.r && this.x>brick2.x-this.r && this.x<brick2.x+brick2.width+this.r)||(this.y===brick2.y-this.r) && this.x>brick2.x-this.r && this.x<brick2.x+brick2.width+this.r){
            ballSpeedY=(-ballSpeedY);
            brick2.clearBrick();
        }
        if((this.x===brick2.x+brick2.width+this.r && this.y>brick2.y-this.r && this.y<brick2.y+brick2.height+this.r)||(this.x===brick2.x-this.r && this.y>brick2.y-this.r && this.y<brick2.y+brick2.height+this.r)){
            ballSpeedX=(-ballSpeedX);
            brick2.clearBrick();
        }
        if((this.y===brick3.y+brick3.height+this.r && this.x>brick3.x-this.r && this.x<brick3.x+brick3.width+this.r)||(this.y===brick3.y-this.r) && this.x>brick3.x-this.r && this.x<brick3.x+brick3.width+this.r){
            ballSpeedY=(-ballSpeedY);
            brick3.clearBrick();
        }
        if((this.x===brick3.x+brick3.width+this.r && this.y>brick3.y-this.r && this.y<brick3.y+brick3.height+this.r)||(this.x===brick3.x-this.r && this.y>brick3.y-this.r && this.y<brick3.y+brick3.height+this.r)){
            ballSpeedX=(-ballSpeedX);
            brick3.clearBrick();
        }
        if((this.y===brick4.y+brick4.height+this.r && this.x>brick4.x-this.r && this.x<brick4.x+brick4.width+this.r)||(this.y===brick4.y-this.r) && this.x>brick4.x-this.r && this.x<brick4.x+brick4.width+this.r){
            ballSpeedY=(-ballSpeedY);
            brick4.clearBrick();
        }
        if((this.x===brick4.x+brick4.width+this.r && this.y>brick4.y-this.r && this.y<brick4.y+brick4.height+this.r)||(this.x===brick4.x-this.r && this.y>brick4.y-this.r && this.y<brick4.y+brick4.height+this.r)){
            ballSpeedX=(-ballSpeedX);
            brick4.clearBrick();
        }
        if((this.y===brick5.y+brick5.height+this.r && this.x>brick5.x-this.r && this.x<brick5.x+brick5.width+this.r)||(this.y===brick5.y-this.r) && this.x>brick5.x-this.r && this.x<brick5.x+brick5.width+this.r){
            ballSpeedY=(-ballSpeedY);
            brick5.clearBrick();
        }
        if((this.x===brick5.x+brick5.width+this.r && this.y>brick5.y-this.r && this.y<brick5.y+brick5.height+this.r)||(this.x===brick5.x-this.r && this.y>brick5.y-this.r && this.y<brick5.y+brick5.height+this.r)){
            ballSpeedX=(-ballSpeedX);
            brick5.clearBrick();
        }
        if((this.y===brick6.y+brick6.height+this.r && this.x>brick6.x-this.r && this.x<brick6.x+brick6.width+this.r)||(this.y===brick6.y-this.r) && this.x>brick6.x-this.r && this.x<brick6.x+brick6.width+this.r){
            ballSpeedY=(-ballSpeedY);
            brick6.clearBrick();
        }
        if((this.x===brick6.x+brick6.width+this.r && this.y>brick6.y-this.r && this.y<brick6.y+brick6.height+this.r)||(this.x===brick6.x-this.r && this.y>brick6.y-this.r && this.y<brick6.y+brick6.height+this.r)){
            ballSpeedX=(-ballSpeedX);
            brick6.clearBrick();
        }
        if((this.y===brick7.y+brick7.height+this.r && this.x>brick7.x-this.r && this.x<brick7.x+brick7.width+this.r)||(this.y===brick7.y-this.r) && this.x>brick7.x-this.r && this.x<brick7.x+brick7.width+this.r){
            ballSpeedY=(-ballSpeedY);
            brick7.clearBrick();
        }
        if((this.x===brick7.x+brick7.width+this.r && this.y>brick7.y-this.r && this.y<brick7.y+brick7.height+this.r)||(this.x===brick7.x-this.r && this.y>brick7.y-this.r && this.y<brick7.y+brick7.height+this.r)){
            ballSpeedX=(-ballSpeedX);
            brick7.clearBrick();
        }
        if((this.y===brick8.y+brick8.height+this.r && this.x>brick8.x-this.r && this.x<brick8.x+brick8.width+this.r)||(this.y===brick8.y-this.r) && this.x>brick8.x-this.r && this.x<brick8.x+brick8.width+this.r){
            ballSpeedY=(-ballSpeedY);
            brick8.clearBrick();
        }
        if((this.x===brick8.x+brick8.width+this.r && this.y>brick8.y-this.r && this.y<brick8.y+brick8.height+this.r)||(this.x===brick8.x-this.r && this.y>brick8.y-this.r && this.y<brick8.y+brick8.height+this.r)){
            ballSpeedX=(-ballSpeedX);
            brick8.clearBrick();
        }
        if((this.y===brick9.y+brick9.height+this.r && this.x>brick9.x-this.r && this.x<brick9.x+brick9.width+this.r)||(this.y===brick9.y-this.r) && this.x>brick9.x-this.r && this.x<brick9.x+brick9.width+this.r){
            ballSpeedY=(-ballSpeedY);
            brick9.clearBrick();
        }
        if((this.x===brick9.x+brick9.width+this.r && this.y>brick9.y-this.r && this.y<brick9.y+brick9.height+this.r)||(this.x===brick9.x-this.r && this.y>brick9.y-this.r && this.y<brick9.y+brick9.height+this.r)){
            ballSpeedX=(-ballSpeedX);
            brick9.clearBrick();
        }
    }
};
let Brick = function(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width=width;
    this.height=height;
    this.ctx = document.getElementById("myCanvas").getContext("2d");
    this.drawBrick = function () {
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.clearBrick = function () {
        this.ctx.clearRect(this.x,this.y,20,10);
    };
};
let bar=new Bar(100,450,50,10);
let ball=new Ball(60,300,5);
ball.drawBall();
bar.drawBar();
let brick=new Brick(20,20,20,10);
let brick1=new Brick(50,20,20,10);
let brick2=new Brick(80,20,20,10);
let brick3=new Brick(110,20,20,10);
let brick4=new Brick(140,20,20,10);
let brick5=new Brick(170,20,20,10);
let brick6=new Brick(200,20,20,10);
let brick7=new Brick(230,20,20,10);
let brick8=new Brick(260,20,20,10);
let brick9=new Brick(290,20,20,10);
brick.drawBrick();
brick1.drawBrick();
brick2.drawBrick();
brick3.drawBrick();
brick4.drawBrick();
brick5.drawBrick();
brick6.drawBrick();
brick7.drawBrick();
brick8.drawBrick();
brick9.drawBrick();
function start() {
    ball.moveBall();
    setTimeout(start,SPEED_BALL);
}
start();



