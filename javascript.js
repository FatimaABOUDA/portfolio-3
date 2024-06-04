document.addEventListener("DOMContentLoaded", function () {
    var stageItem = document.getElementById("stage");
    var sousMenu = stageItem.querySelector(".sous-menu");

    stageItem.addEventListener("mouseenter", function () {
        sousMenu.style.display = "block";
    });

    stageItem.addEventListener("mouseleave", function () {
        sousMenu.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const stageToggle = document.querySelector(".stage-toggle");
    const submenu = stageToggle.querySelector(".submenu");

    // Ajouter un gestionnaire d'événements pour le clic sur l'élément "Stage"
    stageToggle.addEventListener("click", function (event) {
        // Empêcher le lien de se comporter par défaut
        event.preventDefault();
        // Basculer la visibilité des sous-menus
        submenu.classList.toggle("active");
    });
});

