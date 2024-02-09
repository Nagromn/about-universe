// Ajoute les <options> du <select>
function createOptions() {
    const selectContainer = document.getElementById("select");

    // Valeur des options et description
    const values = [
        { value: 0, description: "Par populations :" },
        { value: [0, 100000], description: "0 à 100,000" },
        {
            value: [100000, 100000000],
            description: "100,000 à 100,000,000",
        },
        { value: [100000000, -1], description: "Plus de 100,000,000" },
    ];

    // Crée les éléments html avec leurs valeurs et descriptions
    values.forEach((range) => {
        const option = document.createElement("option");
        option.value = JSON.stringify(range.value);
        option.textContent = range.description;
        selectContainer.appendChild(option);
    });
}
