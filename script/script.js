function switchSection(menuId, sectionId) {
    var currentActiveElements = document.getElementsByClassName("menu-item active");
    currentActiveElements[0].classList.toggle("active");

    var newActiveElement = document.getElementById(menuId);
    if (!newActiveElement.classList.contains("active")) {
        newActiveElement.classList.toggle("active");
    }

    var currentActiveSection = document.getElementsByClassName("section active");
    currentActiveSection[0].classList.toggle("active");

    var newActiveSection = document.getElementById(sectionId);
    if (!newActiveSection.classList.contains("active")) {
        newActiveSection.classList.toggle("active");
    }
}