/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LA PYRAMIDE DE MARIO
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Générez dans la console une demi-pyramide d'étoiles de 5 lignes :
 *
 * - - -
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day02/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let e = "*"
let l = ""
for (let i = 5; i > 0; i--) {
    l = l + e
    console.log(l);
}


/*for (let i = 5; i > 0; i--) {
    let e = ' '.repeat(i)
    console.log(e+"*");
    
}*/
