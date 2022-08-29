var lol = document.querySelectorAll("button")

for (var i = 0; i < lol.length; i++)
{
    lol[i].addEventListener("click", function(){
        var audio = new Audio('sounds/tom-1.mp3')
        audio.play();
    })
}