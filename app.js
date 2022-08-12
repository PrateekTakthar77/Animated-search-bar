const textField = document.querySelector(".search-bar-container");
const searchBtn = document.querySelector(".magnifier");

searchBtn.addEventListener("click" ,()=>{
    textField.classList.toggle("active");
})