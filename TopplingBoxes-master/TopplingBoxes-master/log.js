class Log{
    constructor(x,y,height,angle){
      var options={
          'density':1,
          'friction':1.5,
          'restitution':0.2
      }
      this.body=Bodies.rectangle(x,y,20,height,options);
      this.width=20;
      this.height=height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world,this.body);   
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke('blue');
        fill('brown');
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();
    }
}