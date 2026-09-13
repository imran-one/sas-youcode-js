/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ÉCHANTILLONNAGE (SLICE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un grand tableau de 100 éléments, utilisez .slice() pour extraire les 10 premiers (la première page).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day04/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let tab = [10, 9, 5, 7, 6, 5, "Tfah", "Bnan", "Limon", "Kiwi", "Mangue",9, 5, 7, 6, 5,"Limon", "Kiwi", "Mangue"]

let tab1 = tab.slice(0, 10);

console.log(tab1);


