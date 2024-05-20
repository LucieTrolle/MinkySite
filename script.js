
function go_petit_dej() {
    window.location.href = "../html/petit_dej.html";
}

function go_crepes() {
    window.location.href = "../html/crepes.html";
}

function go_barbe_a_papa() {
    window.location.href = "../html/barbe_a_papa.html";
}

function retourHotlines() {
    window.location.href = "../html/hotlines.html";
}

function ValidationPetitDej() {
    console.log("Fonction ValidationPetitDej appelée."); // Ajout d'un message pour vérifier si la fonction est appelée

    // Récupération des réponses au formulaire
    var boisson = document.getElementById('boissonP').value;
    var lieuLivraison = document.getElementById('lieu_livraisonP').value;
    var jourLivraison = document.getElementById('jour_livraisonP').value;
    var heureLivraison = document.getElementById('heure-livraisonP').value;

    console.log("Boisson sélectionnée:", boisson); // Ajout d'un message pour vérifier la boisson sélectionnée
    console.log("Lieu de livraison saisi:", lieuLivraison); // Ajout d'un message pour vérifier le lieu de livraison saisi
    console.log("Jour de livraison sélectionné:", jourLivraison); // Ajout d'un message pour vérifier le jour de livraison sélectionné
    console.log("Heure de livraison saisie:", heureLivraison); // Ajout d'un message pour vérifier l'heure de livraison saisie

    // Vérification si le lieu de commande est un entier
    if (!isNaN(parseInt(lieuLivraison))) {
        // Si le lieu de commande est un entier, renvoie sur la page 1
        console.log("Le lieu de livraison est un entier. Redirection vers la page de validation.");
        window.location.href = '../html/validation_commande.html';
    } else {
        // Si le lieu de commande n'est pas un entier, renvoie sur la page 2
        console.log("Le lieu de livraison n'est pas un entier. Redirection vers la page d'indisponibilité de livraison.");
        window.location.href = '../html/heure_livraison_indisponible.html';
    }
}

function ValidationCrepes() {
    // Récupération des réponses au formulaire
    var topping = document.getElementById('toppingC').value;
    var lieuLivraison = document.getElementById('lieu_livraisonC').value;
    var jourLivraison = document.getElementById('jour_livraisonC').value;
    var heureLivraison = document.getElementById('heure-livraisonC').value;

    // Vérification si le lieu de commande est un entier
    if (!isNaN(parseInt(lieuLivraison))) {
        // Si le lieu de commande est un entier, renvoie sur la page 1
        window.location.href = '../html/validation_commande.html';
    } else {
        // Si le lieu de commande n'est pas un entier, renvoie sur la page 2
        window.location.href = '../html/heure_livraison_indisponible.html';
    }
}

function ValidationBarbeaPapa() {
    // Récupération des réponses au formulaire
    var lieuLivraison = document.getElementById('lieu_livraisonB').value;
    var jourLivraison = document.getElementById('jour_livraisonB').value;
    var heureLivraison = document.getElementById('heure-livraisonB').value;

    // Vérification si le lieu de commande est un entier
    if (!isNaN(parseInt(lieuLivraison))) {
        // Si le lieu de commande est un entier, renvoie sur la page 1
        window.location.href = '../html/validation_commande.html';
    } else {
        // Si le lieu de commande n'est pas un entier, renvoie sur la page 2
        window.location.href = '../html/heure_livraison_indisponible.html';
    }
}

const select_lieu = document.getElementById("select-lieu");
const chambre_menu = document.getElementsByClassName("chambre-input");

function NewLivraison() {
    let where = select_lieu.value;
    console.log(where);
    if (where == "chambre") {
        for (let item of chambre_menu) {
            item.style.display = "block";
        }
    }
    else {
        for (let item of chambre_menu) {
            item.style.display = "none";
        }
    }
}

select_lieu.addEventListener("change", NewLivraison);