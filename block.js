class block{
constructor(x,y,w,h){
var options= {
     restitution :0.4, 
     friction :0.0,
      //isStatic:false
    }
       this.body = Bodies.rectangle(x, y, w, h, options); 
       this.width = w;
        this.height = h;
         World.add(world, this.body);
         }
         display(){
          if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
          
          var pos =this.body.position;
          rectMode(CENTER);
          fill("#0BD9EF");
          rect(pos.x, pos.y, this.width, this.height);
          
         }
};
