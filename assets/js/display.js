// Affiche les planètes dans le tableau
function displayPlanets(planets) {
    const tbody = document.querySelector("#planet-table tbody");
    tbody.innerHTML = "";

    planets.forEach((planet) => {
        const rowData = [planet.name, planet.terrain];
        const row = document.createElement("tr");
        rowData.forEach((data) => {
            const cell = document.createElement("td");
            cell.textContent = data;
            row.appendChild(cell);
        });
        row.addEventListener("click", () => displayPlanetDetails(planet));
        tbody.appendChild(row);
    });

    // Gère le comportement du tableau
    const planetTable = document.getElementById("planet-table");
    const existingTbody = planetTable.querySelector("tbody");
    if (existingTbody) {
        planetTable.replaceChild(tbody, existingTbody);
    } else {
        planetTable.appendChild(tbody);
    }

    // Scrolling du tableau
    const tableContainer = document.getElementById("table-container");
    tableContainer.style.maxHeight = "400px";
    tableContainer.style.overflowY = "auto";
    tableContainer.addEventListener("scroll", () => {
        tableContainer.scrollTop + tableContainer.clientHeight >=
            tableContainer.scrollHeight;
    });

    // Évènement 'change' sur le <select> au changement d'option
    document.getElementById("select").addEventListener("change", (event) => {
        const selected = JSON.parse(event.target.value);
        const filteredPlanets = filterPlanetsByPopulation(selected);
        updateTable(filteredPlanets);
    });

    // Filtre les planètes par total de population
    function filterPlanetsByPopulation(range) {
        let filteredPlanets = allPlanets.filter((planet) => {
            const population = parseInt(planet.population);
            switch (JSON.stringify(range)) {
                case JSON.stringify([0, 100000]):
                    return population >= 0 && population <= 100000;
                case JSON.stringify([100000, 100000000]):
                    return population >= 100000 && population <= 100000000;
                case JSON.stringify([100000000, -1]):
                    return population >= 100000000;
                default:
                    return true;
            }
        });
        // Met à jour le compteur du résultat
        updateResultCount(filteredPlanets.length);
        // Affiche les planètes après les avoir filtrées
        displayPlanets(filteredPlanets);
    }
}

// Affiche les détails de la planète selectionnée
function displayPlanetDetails(planet) {
    let detailsContainer = document.getElementById("details");
    detailsContainer.innerHTML = "";

    // Gestion des images
    const imageElement = document.createElement("img");
    const planetImageName =
        planet.name
            .toLowerCase()
            .replace(/\s/g, "_")
            .replace(/[^a-z0-9_]/g, "") + ".gif";

    imageElement.src = "assets/img/planets/" + planetImageName;
    imageElement.alt = planet.name;
    detailsContainer.appendChild(imageElement);

    // Titre avec le name de la planète
    const planetNameHeading = document.createElement("h3");
    planetNameHeading.textContent = planet.name;
    detailsContainer.appendChild(planetNameHeading);

    // Données des planètes
    const planetData = [
        {
            icon: "fa-regular fa-circle fa-2xl",
            label: "Diamètre",
            value: planet.diameter,
        },
        {
            icon: "fa-solid fa-temperature-three-quarters fa-2xl",
            label: "Climat",
            value: planet.climate,
        },
        {
            icon: "fa-solid fa-magnet fa-2xl",
            label: "Gravité",
            value: planet.gravity,
        },
        {
            icon: "fa-solid fa-tree fa-2xl",
            label: "Terrain",
            value: planet.terrain,
        },
        {
            icon: "fa-solid fa-user fa-2xl",
            label: "Population",
            value: planet.population,
        },
    ];

    // Creation des éléments html pour l'affichage des données
    const planetDetailsDiv = document.createElement("div");
    planetDetailsDiv.id = "planet-details";
    detailsContainer.appendChild(planetDetailsDiv);
    
    planetData.forEach(({ icon, label, value }) => {
        if (label && value) {
            const detailDiv = document.createElement("div");

            const iconDiv = document.createElement("div");
            const iconElement = document.createElement("i");
            icon.split(" ").forEach((className) =>
                iconElement.classList.add(className)
            );
            iconDiv.appendChild(iconElement);

            const labelElement = document.createElement("p");
            labelElement.textContent = `${label} :`;
            iconDiv.appendChild(labelElement);

            const textDiv = document.createElement("div");
            const planetElement = document.createElement("p");
            planetElement.textContent = `${value}`;
            textDiv.appendChild(planetElement);

            detailDiv.appendChild(iconDiv);
            detailDiv.appendChild(textDiv);

            planetDetailsDiv.appendChild(detailDiv);
        }
    });
}

// Met à jour le compteur du résultat
function updateResultCount(count) {
    const footerName = document.getElementById("resultCount");
    footerName.textContent = count + " resultat(s)";
}
