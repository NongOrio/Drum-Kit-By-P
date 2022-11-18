// alert("Linked");

// document.querySelector("button").addEventListener('click', handleClick);
//
// function handleClick () {
//   alert("Clicked");
// }

// for (var i = 0 ; i < document.querySelectorAll(".drum").length ; i++) {
//
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//
// // console.log(this.innerHTML); //ดูปุ่มที่ถูกกด
//
// var buttonInnerHTML = this.innerHTML;
//
// switch (buttonInnerHTML) {
//
//   case "w":
//   var audio = new Audio('sounds/tom-1.mp3');
//   audio.play();
//     break;
//
//   case "a":
//   var audio = new Audio('sounds/tom-2.mp3');
//   audio.play();
//   break;
//
//   case "s":
//   var audio = new Audio('sounds/tom-3.mp3');
//   audio.play();
//   break;
//
//   case "d":
//   var audio = new Audio('sounds/tom-4.mp3');
//   audio.play();
//   break;
//
//   case "j":
//   var audio = new Audio('sounds/crash.mp3');
//   audio.play();
//   break;
//
//   case "k":
//   var audio = new Audio('sounds/kick-bass.mp3');
//   audio.play();
//   break;
//
//   case "l":
//   var audio = new Audio('sounds/snare.mp3');
//   audio.play();
//   break;
//
//   default:
//
// }
//
//     // var audio = new Audio('sounds/crash.mp3');
//     // audio.play();
//   }
// );
//
// }
//
// document.addEventListener("keydown", function (event) {
//   console.log(event.key);
// }
// );
//
// $(document).keyup( function (event) {
//   $("w drum").html(event.key);
//   }
//  );

// const keys = document.querySelectorAll('.key');
//
//  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);


let buttonsClick = document.querySelectorAll(".drum");

// Detecting Button Press
for(let i = 0; i < document.querySelectorAll(".drum").length; i++){

    buttonsClick[i].addEventListener("click", function () {
       let buttonInnerHTML = this.innerHTML;
         makeSound(buttonInnerHTML);

       buttonAnimation(buttonInnerHTML);
    });
};

//detecting key press
document.addEventListener("keydown", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key){

        switch (key) {
            case "l":
                  let snare = new Audio("sounds/snare.mp3");
                  snare.play();
                break;

            case "w":
                  let tom1 = new Audio("sounds/tom-1.mp3");
                  tom1.play();
                break;

            case "a":
                  let tom2 = new Audio("sounds/tom-2.mp3");
                  tom2.play();
                break;

            case "s":
                 let tom3 = new Audio("sounds/tom-3.mp3");
                  tom3.play();
                break;

            case "d":
                  let tom4 = new Audio("sounds/tom-4.mp3");
                  tom4.play();
                break;

            case "k":
                  let kick = new Audio("sounds/kick-bass.mp3");
                  kick.play();
                break;

             case "j":
                  let crash = new Audio("sounds/crash.mp3");
                  crash.play();
                break;
            default:
                  console.log(buttonInnerHTML);
                break;
        }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

    setTimeout(function(){
       activeButton.classList.remove("pressed");
    }, 100);
}
