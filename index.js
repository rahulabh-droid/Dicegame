var Randomnumber1 = Math.floor(Math.random()*6)+1;

var Randomdiceimage = "dice" + Randomnumber1 + ".png";

var RandomImageSource = "images/" + Randomdiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", RandomImageSource);

var Randomnumber2 = Math.floor(Math.random()*6)+1;

var Randomdiceimage2 = "dice" + Randomnumber2 + ".png";

var RandomImageSource3 = "images/" + Randomdiceimage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", RandomImageSource3);

if (Randomnumber1 > Randomnumber2)
{
    document.querySelector("h1").innerHTML = "🥇 Player 1 wins";
}
else if (Randomnumber2 > Randomnumber1)
{
    document.querySelector("h1").innerHTML = "🥇 Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "🤝 It's a tie";
}






