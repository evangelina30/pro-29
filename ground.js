class ground{
    constructor(x,y,w,h){

        var options={
        friction: 1.0,
        density:1.0,
        isStatic:false

        }
        
            this.body = Bodies.rectangle(x,y,w,h,options);
            this.width=w;
            this.height=h;
            
            World.add(world, this.body);
            
        
    }
display(){
    var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      
}

};