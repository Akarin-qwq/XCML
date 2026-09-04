const backtop = document.getElementById("backtop");
window.addEventListener("scroll",() => {
    if (window.scrollY > 900){
        backtop.classList.add("show");
    }
    else {
        backtop.classList.remove("show");
    }
});

backtop.addEventListener("click",() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});