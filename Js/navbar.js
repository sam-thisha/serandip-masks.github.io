const dropdown_head = document.getElementById("dropdown-head");
const dropdown = document.getElementById("dropdown");

const burger = document.getElementById("burger");
const nav_link = document.getElementById("nav-link");

dropdown_head.addEventListener("click", () => {
    dropdown.classList.toggle("nav-hide");
});

burger.addEventListener("click" ,()=>{ 
    nav_link.classList.toggle("nav-show");
});



window.onclick = function (event) {
    if (!event.target.matches('.dropdown-head')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('nav-hide')) {
                openDropdown.classList.add('nav-hide');
            }
        }
    }
}


