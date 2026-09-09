/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * L'ÉCHIQUIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Générez une chaîne de caractères représentant une grille 8x8 avec des # et des espaces alternés (façon damier/échiquier).
 * Astuce : Si l'index i+j est pair, ajoutez un espace, sinon ajoutez #.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day02/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.


let grille = "";

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            grille += " ";
        } else {
            grille += "#";
        }
    }
    grille += "\n";
}console.log(grille);
