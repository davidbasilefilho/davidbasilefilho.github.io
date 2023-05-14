// Page Loading
const queryParams = window.location.search;
const params = new URLSearchParams(queryParams);

if (params.has("p") && params.get("p")) {
    const page = params.get("p");

    $.get(`${page}.html`)
        .done(() => {
            $("#page-include").load(`${page}.html`);
        })
        .fail(() => {
            $("#page-include").load("404.html");
        });
} else {
    $("#page-include").load("home.html");
}
