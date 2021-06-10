
$(document).ready(function(){
    var guitarColor = document.getElementById("guitarColor");
    var imageGuitarColor = document.getElementById("imageGuitarColor");
    guitarColor.onchange = function(newcolor) {
        switch(guitarColor.value)
        {
            case 'olympicWhite':
                imageGuitarColor.src = './images/guitars/body_olympicWhite.png'; 
                break;
            case 'desertSand':
                imageGuitarColor.src = './images/guitars/body_desertSand.png'; 
                break;
            case 'agedWhite':
                imageGuitarColor.src = './images/guitars/body_agedWhite.png'; 
                break;
            case 'seaFoamGreen':
                imageGuitarColor.src = './images/guitars/body_seaFoamGreen.png'; 
                break;
            case 'sonicBlue':
                imageGuitarColor.src = './images/guitars/body_sonicBlue.png'; 
                break;
            case 'shellPink':
                imageGuitarColor.src = './images/guitars/body_shellPink.png'; 
                break;
           default:
                break;
        }
        console.log("working");
    };
});

//<img id=\"imageGuitarColor\" src=\"./images/guitars/desertsand.png\">"