/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * CONJECTURE DE SYRACUSE (COLLATZ)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Prenez N = 15.
 * - Si N est pair, on le divise par 2.
 * - Si N est impair, on le multiplie par 3 et on ajoute 1.
 * Répétez jusqu'à ce que N vaille 1. Comptez le nombre d'étapes (itérations) nécessaires pour arriver à 1.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day02/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let n = 15;
let c = 0;

while (n !== 1) {
    if (n % 2 == 0) {
        n = n / 2;
    } else {
        n = n * 3 + 1;
    }

    c++;
}

console.log("Nombre d'étapes :", c);

