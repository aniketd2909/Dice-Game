var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimg1="images/"+"dice"+randomnumber1+".png";
var randomimg2="images/"+"dice"+randomnumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg1);
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);
if (randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML= "Player1 Wins";
}
else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML= "Player2 Wins"

}
else{
  document.querySelector("h1").innerHTML= "Draw!!"

}
