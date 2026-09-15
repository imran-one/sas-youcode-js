/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPTEUR D'OCCURRENCES DE LETTRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui compte combien de fois la lettre "e" (minuscule ou majuscule) apparaît dans un long paragraphe.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day05/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function compteur(texte){
    let c = 0
    for (let i =0 ; i <texte.length; i++){
        if (texte[i] =='e' || texte[i]=='E'){
            c++
        }
    }
    return c
}
console.log(compteur("hello word Et e E "));
