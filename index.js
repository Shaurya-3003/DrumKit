// jshint esversion:6

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        btnAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    btnAnimation(event.key);
});

function btnAnimation(key){
    var activeBtn=document.querySelector("."+key);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);
}

function makeSound(key){
    var sound;
    switch(key){
        case 'w':
            sound=new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case 'a':
            sound=new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case 's':
            sound=new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case 'd':
            sound=new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case 'j':
            sound=new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case 'k':
            sound=new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case 'l':
            sound=new Audio("sounds/tom-4.mp3");
            sound.play();
            break;        
    }
}