
// Side menu for mobile screens
const openSlide = document.getElementById("open-side-menu");
const closeSlide = document.getElementById("close-side-menu");
const sideMenu = document.getElementById("side-menu")
const calcAmt = document.getElementById("calc-amt")
const acc = document.querySelectorAll(".accordion")
const icon = document.querySelectorAll(".fa")

openSlide.addEventListener('click', openSideMenu);
closeSlide.addEventListener('click', closeSideMenu);

function openSideMenu() {
    sideMenu.style.height = "13.3em";
    openSlide.style.display ="none"
    closeSlide.style.display = "block"
}

function closeSideMenu() {
    sideMenu.style.height = "0";
    openSlide.style.display ="block"
    closeSlide.style.display = "none"
}



let i;
const len = acc.length;
for (i = 0; i < len; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'rem'
        }
    })
}
