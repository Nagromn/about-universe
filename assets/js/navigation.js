// Fonction pour gérer les liens actifs dans le header
function setActiveLinkHeader() {
    const headerLinks = document.querySelectorAll(".header nav a");
    headerLinks.forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Fonction pour gérer les liens actifs dans la sidebar
function setActiveLinkSidebar() {
    const sidebarLinks = document.querySelectorAll(".sidebar nav a");
    sidebarLinks.forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

setActiveLinkHeader();
