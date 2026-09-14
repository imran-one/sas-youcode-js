/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day04/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.


let panier = [101, 105, 101, 102]

function ajouterAuPanier(id){
    panier.push(id);
   return panier
}


function retirerDuPanier(id){
    for (let i =0 ; i <panier.length-1; i++){
        if (panier[i]== id){
          panier.splice(i,1)
        }
    }
  return panier
}

function afficherQuantites(tabl) {
    let quantites = {}

    for (let element of tabl) {
        quantites[element] = (quantites[element] || 0) + 1;
    }
    let lignes = [];
  for (let articl in quantites) {
    let qte = quantites[articl];
    let texteExemplaire = qte > 1 ? "exemplaires" : "exemplaire";
    lignes.push(`Article ${articl} : ${qte} ${texteExemplaire}`);
  }

    return lignes;
}


console.log(ajouterAuPanier(107));

console.log(afficherQuantites(panier));
 console.log(retirerDuPanier(101))
