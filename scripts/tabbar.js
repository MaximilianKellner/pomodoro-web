function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabbarList");
    tabbuttons = document.getElementsByClassName("tabButton");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
        tabbuttons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.className += " active";   
}