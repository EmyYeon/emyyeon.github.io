
document.addEventListener("DOMContentLoaded", function () {
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {document.getElementById("nav-placeholder").innerHTML = data;
        hightlightActivePage();
});

    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);
});

function hightlightActivePage() {
    // Get current page URL
    let currentPage = window.location.pathname.split("/").pop(); 
    console.log("Current Page:", currentPage);
    let navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        console.log("Link Href:", link.getAttribute("href"));
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}

