// Permet d'afficher les planètes en fonction du texte de recherche
function searchBar() {
    const searchInput = document.getElementById("search");
    const clearButton = document.getElementById("clear");

    // Pas d'affichage du <button>
    clearButton.style.display = "none";

    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.trim().toLowerCase();
        const filteredPlanets = allPlanets.filter((planet) => {
            return planet.name.toLowerCase().includes(searchTerm);
        });
        displayPlanets(filteredPlanets);
        updateResultCount(filteredPlanets.length);

        // Si texte dans la barre de recherche, on affiche le <button>
        if (searchTerm.length > 0) {
            clearButton.style.display = "block";
        } else {
            clearButton.style.display = "none";
        }
    });

    // Boutton pour supprimer le texte de recherche
    clearButton.addEventListener("click", () => {
        searchInput.value = "";

        // Affiche toutes les planètes après avoir vider la barre de recherche
        displayPlanets(allPlanets);

        clearButton.style.display = "none";
    });
}
