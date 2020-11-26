var NumberOfButtons = document.querySelectorAll('.drum').length;

let sounds = [
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
    "sounds/snare.mp3",
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3"
];

// clicking
for (let i = 0; i < NumberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", (e) => {
        let audio = new Audio(sounds[i]);
        audio.play();
    });
}

// KeyboardPressing

document.addEventListener("keydown", (e) => {
    soundGeneration(e.key);
});

function soundGeneration(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
        case "j":
            var tom_2 = new Audio("sounds/tom-2.mp3");
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio("sounds/tom-3.mp3");
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
        default:
            var tom_4 = new Audio("sounds/tom-4.mp3");
            tom_4.play();
            break;
    }
}