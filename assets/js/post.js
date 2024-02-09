let baseUrl = "https://freefakeapi.io/api/";
let data = [];

// Permet l'ajout d'un article avec l'API
async function addPost(data) {
    try {
        const response = await fetch(baseUrl + "posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const resultat = await response.json();
        console.log("Réussite :", resultat);
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}

// Récupère l'élèment <form> et ajoute un évènement 'submit' sur le <button>
const formElement = document.querySelector("form");
formElement.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Crée un objet FormData et l'assigne à mon formElement
    const formData = new FormData(formElement);
    const data = {};

    // Récupère les id et les valeurs des inputs et associe ces éléments à l'objet data
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log("Data :", data);
    console.log("Formulaire soumis !");

    addPost(data);
});
