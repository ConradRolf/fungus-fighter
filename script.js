$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let playerAP = 100;

function onReady() {
    
    $('.attack-btn arcane-scepter').on('click', function(){
        fungusHP -= 14;
        playerAP -= 12;
        render();
    });
    $('.attack-btn entangle').on('click', function(){
        fungusHP -= 9;
        playerAP -= 23;
        render();
    });
    $('.attack-btn dragon-blade').on('click', function(){
        fungusHP -= 47;
        playerAP -= 38;
        render();
    });
    $('.attack-btn star-fire').on('click', function(){
        fungusHP -= 25;
        playerAP -= 33;
        render();
    });
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

// function arcaneScepter(){
//     fungusHP -= 14;
//     playerAP -= 12;
// }

// function entangleAttack(){
//     fungusHP -= 9;
//     playerAP -= 23;
// }

// function dragonBlade(){
//     fungusHP -= 47;
//     playerAP -= 38;
// }

// function starFire(){
//     fungusHP -= 25;
//     playerAP -= 33;
// }

function render(){
    $('.ap-text').text(playerAP);
    $('.hp-text').text(fungusHP);
    $('.attacks').$('#ap-meter').val(playerAP);
    $('.enemy').$('#hp-meter').val(fungusHP);
}
