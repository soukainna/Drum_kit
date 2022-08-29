var lol = document.querySelectorAll(".drum")

for (var i = 0; i < lol.length; i++)
{
    lol[i].addEventListener("click", function(){
       
        var b = this.innerHTML
        console.log(b)
        switch (b){
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
    })
}

function keyPress(key){
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

document.addEventListener("keypress", function(e){
    keyPress(e.key)
})