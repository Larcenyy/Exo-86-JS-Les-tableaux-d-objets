/* Ne touchez pas à ce code */
let citroen = {
    color: 'blue',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Citroën est ouverte" + " sa couleur est " + this.color);
        create.style.color = this.color;
    },
}

let peugeot = {
    color: 'yellow',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Peugeot est ouverte" + " sa couleur est " + this.color);
        create.style.color = this.color;
    }
}

let ford = {
    color: 'red',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Ford est ouverte" + " sa couleur est " + this.color);
        create.style.color = this.color;
    }
}


/**
 * Votre code commence ici !
 */

let text = document.getElementById("text")

let create = document.createElement("span")
text.prepend(create)


let voitures = {
    garage: 'concession',
    lieu: 'Fourmies',
    // Dans un tableau, ajouter les différentes voitures que vous possédez.
    collection: [ford, citroen, peugeot], // Vos voitures dans cette propriété !
}

for (let i = 0; i < voitures.collection.length; i++){
    citroen.ouvrirPorte()
    peugeot.ouvrirPorte()
    ford.ouvrirPorte()
}

// FIXME Parcourrez le tableau dans lequel vous avez placé vos objets.
// TODO ==> invoquez la méthode ouvrirPorte pour chaque voiture de la collection.


