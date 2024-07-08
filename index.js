const button=document.querySelector(".btn-burger");
const navLinks=document.querySelector(".nav-container-1");


button.addEventListener("click",() => {

    button.classList.toggle("active");
    navLinks.classList.toggle("activ");
  

})