class Ball {
    constructor (x,y,radius){
        var option = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body=Bodies.circle(x,y,radius,option)
        World.add(world,this.body);
        this.radius=radius;
    }

    display(){
        push();
        fill("cyan")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        pop();
    }
}