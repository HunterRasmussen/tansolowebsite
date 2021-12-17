

(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_D1nroNhTJIXdOMDMyBtmh');
})();
    

$(document).ready(function(){
    var guitarColor = document.getElementById("guitarColor");
    var imageGuitarColor = document.getElementById("imageGuitarColor");

    var imagePickguardColor = document.getElementById("imagePickguardColor");
    var pickguardColor = document.getElementById("pickguard");

    var  imageGuitarNeck = document.getElementById("imageGuitarNeck");
    var guitarNeck = document.getElementById("neck");

    var imageGuitarPickup = document.getElementById("imageGuitarPickup");
    var guitarPickup = document.getElementById("pickup");

    
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


    pickguardColor.onchange = function(newcolor) {
        switch(pickguardColor.value)
        {
            case 'black':
                imagePickguardColor.src = './images/guitars/pickguard_black.png'; 
                break;
            case 'white':
                imagePickguardColor.src = './images/guitars/pickguard_white.png'; 
                break;
            case 'parchment':
                imagePickguardColor.src = './images/guitars/pickguard_parchment.png'; 
                break;
            case 'mint':
                imagePickguardColor.src = './images/guitars/pickguard_mint.png'; 
                break;
           default:
                break;
        }
        console.log("working");
    };


    guitarNeck.onchange = function() {
        switch(guitarNeck.value)
        {
            case 'maple':
                imageGuitarNeck.src = './images/guitars/neck_maple.png';
                break;
            case 'rosewood':
                imageGuitarNeck.src = './images/guitars/neck_rosewood.png';
                break;
            default:
                break;
        }
    }

    guitarPickup.onchange = function() {
        switch(guitarPickup.value)
        {
            case 'seyDuncBroadcaster':
                imageGuitarPickup.src = './images/guitars/pickup_seymour_duncan_broadcaster.png';
                break;
            case 'seyDuncJerryDonahue':
                imageGuitarPickup.src = './images/guitars/pickup_seymour_duncan_jerry_donahue.png';
                break;
        }
    }

});

window.onload = function() {
            document.getElementById('builderForm').addEventListener('submit', function(event) {
                event.preventDefault();
                // generate a five digit number for the contact_number variable
                this.contact_number.value = Math.random() * 100000 | 0;
                // these IDs from the previous steps
                emailjs.sendForm('builderForm_service', 'builder_form', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }

//<img id=\"imageGuitarColor\" src=\"./images/guitars/desertsand.png\">"