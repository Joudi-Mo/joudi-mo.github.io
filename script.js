function myFunction() {
    var dropmenu = document.getElementById("sidemenu");
    if (dropmenu.classList.contains("sidemenuactive")) {
        dropmenu.classList.toggle("sidemenuInActive");
        dropmenu.classList.remove("sidemenuactive");
    } else {
        dropmenu.classList.remove("sidemenuInActive");
        dropmenu.classList.toggle("sidemenuactive");
    }
}