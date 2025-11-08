//footer date handling
document.addEventListener("DOMContentLoaded", () =>{
    //current year
    const yearSpan = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    //last modified date
    const lastModified = document.getElementById("lastModified");
    lastModified.textContent = 'Last Modified: ${document.lastModified}';

});

//hamburer menu toggle

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById("menuButton");
    const nav = document.querySelector(".nav-links");

    menuButton.addEventListener("click", () =>{
        //toggle visibility
        nav.classList.toggle("show");

        //toggle button symbol
        if(menuButton.textContent === "❌"){
            menuButton.textContent = "☰";
        } else {
            menuButton.textContent = "❌";
        }
    });
});