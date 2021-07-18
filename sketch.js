var jax,jaxImage
var path,pathImage




function preload(){
  //pre-load images
jaxImage=loadAnimation('Runner-1.png','Runner-2.png')
pathImag=loadImage('path.png')



}

function setup(){
  createCanvas(600,600);
  //create sprites here

jax=createSprite(200,300,20,20)
jax.addAnimation('jax',jaxImage)
jax.scale=0.1
  
path=createSprite(300,300,20,20)
path.addImage('path',pathImage)



}

function draw() {
  background('blue');
drawSprites()
}
