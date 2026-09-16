/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score).
 *   Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let candidats = [
  { nom: "Alice", score: 85 },
  { nom: "Bob", score: 92 },
  { nom: "Charlie", score: 78 }
];

let topScore = candidats[0].score

for(let i=1;i<candidats.length;i++){ 
    if(topScore<candidats[i].score){ 
        topScore=candidats[i].score
    }
 }
 console.log(topScore)


 