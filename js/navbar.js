$("#navbar-include").load("navbar.html");

if (params.has("p") && params.get("p")) {
    const page = params.get("p");
    const navlink = document.getElementById(page + "-navlink");

    console.log(page);
    if (navlink !== null) {
        navlink.classList.add("active");
    }
} else {
    document.getElementById("home-navlink").classList.add("active");
}
