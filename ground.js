class Ground 
{
  constructor(x, y, w, h) 
  {
    //similar to a variable, used to store a value in the memory location in the computer
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  display()
  {
    //name spacing or short form of the word 'position'
    var pos=this.body.position;
    Matter.Body.rotate(this.body,angle)
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("purple");
    rect(0,0,100,20);
    pop();
    angle +=0.1;
  }
}
