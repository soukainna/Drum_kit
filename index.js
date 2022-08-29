var lol = document.querySelectorAll(".drum")
//this is for click mousse
for (var i = 0; i < lol.length; i++)
{
    lol[i].addEventListener("click", function(){
       
        var b = this.innerHTML
        makeSound(b)
    })
}

//this is for keyPress
document.addEventListener("keypress", function(e){
    makeSound(e.key)
})

//this is my function to display sounds ussing switch statement
function makeSound(key){
    switch (key){
        case 'w':
            var audio = new Audio('sounds/crash.mp3')
            audio.play()
            break;

        case 'a':
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play()
            break;

        case 's':
            var audio = new Audio('sounds/snare.mp3')
            audio.play()
            break;
        
        case 'd':
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play()
            break;
        
        case 'j':
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play()
            break;
        
        case 'k':
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play()
            break;
        
        case 'l':
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play()
            break;
    
        default :
            console.log('Error')

    }
}
