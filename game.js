const BAR_SPEED = 10;
let ballSpeedX = 2;
let ballSpeedY = 2;
const SPEED_BALL= 20;
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
        let t = bar.x;
        if(this.x===0||(this.x+(this.r*2))===500){
            ballSpeedX=(-ballSpeedX);
        }
        if(this.y===0||((this.y+(this.r*2))===450 && (this.x+this.r)>t && (this.x+this.r)<(t+50))){
            ballSpeedY=(-ballSpeedY);
        }
        if(this.y===500-this.r*2){
            alert("you lose!");
        }
        this.x+=ballSpeedX;
        this.y+=ballSpeedY;
    };
    this.collisionBrick = function () {
        let t= brick.x;

    }
};
let Brick = function(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width=width;
    this.height=height;
    this.ctx = document.getElementById("myCanvas").getContext("2d");
    this.drawBrick = function () {
        this.ctx.fillRect(this.x, this.y, this.height, this.width);
    };
    this.clearBrick = function () {
        this.ctx.clearRect(this.x,this.y,10,20);
    };
};
let Wall = function(){
    this.drawWall= function () {
            let brick=new Brick(20,20,10,20);
            brick.drawBrick();
            let brick2=new Brick(45,20,10,20);
            brick2.drawBrick();
            let brick3=new Brick(70,20,10,20);
            brick3.drawBrick();
            let brick4=new Brick(95,20,10,20);
            brick4.drawBrick();
            let brick5=new Brick(120,20,10,20);
            brick5.drawBrick();
    }
};
let bar=new Bar(100,450,50,10);
let ball=new Ball(60,50,5);
let wall = new Wall();
wall.drawWall();
ball.drawBall();
bar.drawBar();
function start() {
    ball.moveBall();
    setTimeout(start,SPEED_BALL);
}
start();



