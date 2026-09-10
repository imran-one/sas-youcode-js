/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * CHASSEUR DE NOMBRES D'ARMSTRONG
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Un nombre d'Armstrong à 3 chiffres est égal à la somme des cubes de ses chiffres (ex: 153 = 1³ + 5³ + 3³). Utilisez une boucle allant de 100 à 999 pour trouver et afficher TOUS les nombres d'Armstrong.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day02/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

/*for (let n = 100; n <= 999; n++) {
    let a = parseInt(n / 100);
    let b = parseInt(n / 10) % 10;
    let c = n % 10;

    if (a ** 3 + b ** 3 + c ** 3 == n) {
        console.log(n);
    }
}*/

for (let n = 100; n <= 999; n++) {
    let a = (n - n % 100) / 100;          // 153 - 53 = 100/100 = 1
    let b = (n % 100 - n % 10) / 10;      // 53 - 3 = 50/10 = 5
    let c = n % 10;                   // 3

    if (a ** 3 + b ** 3 + c ** 3 == n) {  // powe in js ==> ' ** '
        console.log(n);
    }
}

