class Particles{
    constructor(x,y){
        var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':0.01,
          'isStatic':false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        color(random(0,255));
        pop();
    }
}