/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VÉRIFICATEUR D'ANAGRAMME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "chien" et "niche" sont des anagrammes (elles contiennent exactement les mêmes lettres, même quantité).
 * Indice : vous pouvez les transformer en tableau, les trier, et les rejoindre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let mot1 = "chien"
let mot2 = "niche"

let m1 = mot1.split("").sort().join("")
let m2 = mot2.split("").sort().join("")
if (m1.length==m2.length &&  m1==m2){
    console.log(true)
}else {
    console.log(false);
    
}

