// Attend que le contenu de la page soit chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne l'élément avec la classe "ecran" qui affiche les expressions et résultats
    const ecran = document.querySelector(".ecran");
    // Sélectionne tous les boutons avec la classe "bouton"
    const touches = document.querySelectorAll(".bouton");
    
    // Initialise une variable pour stocker l'expression de la calculatrice
    let expression = '';
    
    // Pour chaque bouton, ajoute un écouteur d'événements au clic
    touches.forEach((bouton) => {
        bouton.addEventListener("click", function() {
            // Récupère la valeur du bouton (le texte à l'intérieur)
            const valeur = bouton.textContent;
            // Si la valeur est '=', évalue l'expression et affiche le résultat
            if (valeur === '=') {
                try {
                    // Évalue l'expression en utilisant la fonction eval() de JavaScript
                    const resultat = eval(expression);
                    // Affiche le résultat sur l'écran
                    ecran.textContent = resultat;
                    // Met à jour l'expression avec le résultat pour permettre les calculs continus
                    expression = '' + resultat;
                } catch (error) {
                    // En cas d'erreur, affiche 'Error' sur l'écran et efface l'expression
                    ecran.textContent = 'Error';
                    expression = '';
                }
            // Si la valeur est 'C', efface l'écran et réinitialise l'expression
            } else if (valeur === 'C') {
                ecran.textContent = '';
                expression = '';
            // Sinon, ajoute la valeur du bouton à l'expression et affiche-la sur l'écran
            } else {
                expression += valeur;
                ecran.textContent += valeur;
            }
        });
    });
});
