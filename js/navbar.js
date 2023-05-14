const query = window.location.search;
const params = new URLSearchParams(query);

if (params.has("p") && params.get("p")) {
    const page = params.get("p");
    const navlink = document.getElementById(page + "-navlink");

    if (navlink !== null) {
        navlink.classList.add("active");
    }
} else {
    document.getElementById("home-navlink").classList.add("active");
}
