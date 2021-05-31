class Bird
{
    constructor(x,y,width,height)
    {
        var options={
            restitution:0.8,
            density:0.6,
            friction:0.3
        }
        this.box=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.box);
    }

    display()
    {
      var pos=this.box.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle= this.box.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      strokeWeight(4);
      stroke("white");
      rect(0,0,this.width,this.height);
      pop();
    }
}
