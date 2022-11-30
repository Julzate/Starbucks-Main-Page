
/* Mobile menu button for navbar */
const btn = document.getElementById("menu-btn")
const nav = document.getElementById("menu")

function navToggle(){
    btn.classList.toggle("open")
    nav.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll")
}

btn.addEventListener('click', navToggle)

/* Mobile footer dropdown menu */

document.addEventListener("click", e => {
    const isDropdownTrigger = e.target.matches("[data-dropdown-trigger")

    if(!isDropdownTrigger && e.target.closest("[data-dropdown]")) return

    let currentDropdown

    if (isDropdownTrigger) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })

})