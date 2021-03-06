class Ball{
    constructor(x, y, width, height){
        var options = {
            restitution : 0.75,
            friction : 0.5,
            density : 1.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.image=loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
    }
}