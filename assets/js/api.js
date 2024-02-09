let baseUrl = "https://swapi.dev/api/";
let allPlanets = [];

// Charge toutes les pages avec les planètes de l'api
function loadAllPages(url = baseUrl + "/planets") {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            allPlanets = allPlanets.concat(data.results);
            console.log(allPlanets);
            if (data.next) {
                loadAllPages(data.next);
            } else {
                displayPlanets(allPlanets);
                updateResultCount(allPlanets.length);
            }
        })
        .catch((error) => {
            console.error("Erreur lors du chargement des pages:", error);
        });
}
