let changeTextBtn = document.getElementsByClassName("change-text-btn")[0];
let changeTextForm = document.getElementsByClassName("change-text-form")[0];
let confirmTextChange = document.getElementsByClassName("change-text-confirm")[0];
let closeTextChangeForm = document.getElementsByClassName("change-text-close")[0];

changeTextBtn.addEventListener("click", (event)=>{
    changeTextForm.style.display = "block";
});

closeTextChangeForm.addEventListener("click", (event)=>{
    changeTextForm.style.display = "none";
});