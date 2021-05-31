class Log
{
    constructor(x,y,height,angle)
    {
        var options={
            restitution:0.8,
            density:1.0,
            friction:1.0
        }
        this.box=Bodies.rectangle(x,y,20,height,options);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.box,angle);
        World.add(world,this.box);
    }

    display()
    {
      var pos=this.box.position;
      var angle= this.box.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("lightblue");
      strokeWeight(4);
      stroke("white");
      rect(0,0,this.width,this.height);
      pop();
    }
}
