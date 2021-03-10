class Bird extends BaseClass{
  constructor(x,y){

    //super is the keyWord to call in the constructor of parent class
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    //mentioning to call the display function of baseClass
    super.display();
  }
}