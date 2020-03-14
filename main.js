let changeTextBtn = document.getElementsByClassName("change-text-btn")[0];
let changeTextForm = document.getElementsByClassName("change-text-form")[0];
let confirmTextChange = document.getElementsByClassName("change-text-confirm")[0];
let closeTextChangeForm = document.getElementsByClassName("change-text-close")[0];

let textArea = document.getElementById("new-text");

let wpmNumber = document.getElementsByClassName("wpm-number")[0];

let baseInput = document.getElementById("baseText");
let userInput = document.getElementById("userInput");
let clickCatcher = document.getElementsByClassName("wpm-click-catcher")[0];

let textToType = "";

clickCatcher.addEventListener("click", (event)=>{
    userInput.focus();
});

let charCount = 0;
let isTyping = false;

setInterval(()=>{
        wpmNumber.innerHTML = parseInt((charCount/5)/2 * 60);
        charCount = 0;
}, 2000);

userInput.addEventListener("keypress", (event)=>{
    textToType = textToType.substring(1);
    baseInput.value = textToType;
    console.log(event.key);
    ++charCount;
});

let isChangeTextOpen = false;
changeTextBtn.addEventListener("click", (event)=>{
    if(isChangeTextOpen){
        changeTextForm.style.display = "none";
        isChangeTextOpen = false;
    }else{
        changeTextForm.style.display = "block";
        isChangeTextOpen = true;
    }
});

closeTextChangeForm.addEventListener("click", (event)=>{
    changeTextForm.style.display = "none";
    isChangeTextOpen = false;
});

confirmTextChange.addEventListener("click", (event)=>{
    textToType = textArea.value;
    baseInput.value = textToType;
    textArea.value = "";
    changeTextForm.style.display = "none";
    isChangeTextOpen = false;
});
