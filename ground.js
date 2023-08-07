class Ground 
{
  constructor(x, y, r) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    this.h = h;
    World.add(world, this.body);
  
  }
  show(){
    var pos=this.body.position;
  Matter.Body.rotate(this.body,angle)
    push();
    rectMode(CENTER)
    stroke(255)
    fill(127)
    translate(pos.x,pos.y)
    rotate(angle)
    rect(0,0,this.w,this.h);
    pop();
    angle+=0.1
  }

 
   
}
