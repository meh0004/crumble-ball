class Ball{
  constructor(x, y, radius) {
      var options = {
         
          restitution :0.3,
          friction :0.5,
          density :1.2,
          isStatic: false
         
      }
      
      
      this.body = Bodies.circle(x, y, radius, options);
      this.raduis = radius;
      World.add(world, this.body);
    }
    display(){
      
     var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0,0,this.radius, this.radius);
      pop();
    } 
  }