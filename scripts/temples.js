// //footer date handling
// document.addEventListener("DOMContentLoaded", () =>{
//     //current year
//     const yearSpan = document.getElementById("currentYear");
//     const currentYear = new Date().getFullYear();
//     yearSpan.textContent = currentYear;

//     //last modified date
//     const lastModified = document.getElementById("lastModified");
//     lastModified.textContent = 'Last Modified: ${document.lastModified}';

// });
(function () {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    //last modified
    const lmEl = document.getElementById('lastModified');
    if (lmEl) {
        const raw = document.lastModified;
        if (raw) {
            const lmDate = new Date(raw);
            const human = lmDate.toLocaleString(undefined, {
                year: 'numeric', month: 'short', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit',
                hour12: false,
            });
            lmEl.textContent = human;
            lmEl.setAttribute('datetime', lmDate.toISOString());
        } else {
            lmEl.textContent = 'Not available';
            lmEl.removeAttribute('datetime');
        }

    }
})();

//hamburer menu toggle

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById("menuButton");
    const nav = document.querySelector(".nav-links");

    menuButton.addEventListener("click", () => {
        //toggle visibility
        nav.classList.toggle("show");

        //toggle button symbol
        if (menuButton.textContent === "❌") {
            menuButton.textContent = "☰";
        } else {
            menuButton.textContent = "❌";
        }
    });
});