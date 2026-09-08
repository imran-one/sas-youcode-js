/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CALCULATRICE BASIQUE AVEC SWITCH
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez nombre1 = 10, nombre2 = 5 et operateur = "*". Utilisez une instruction switch pour gérer l'addition, la soustraction, la multiplication et la division, et affichez le résultat.
 *
 * RÉSULTAT ATTENDU
 * 50
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day01/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let numbr1=10;
let numbr2=5;
let operation = "+";
let total;
switch (operation){
    case "+":
        total=numbr1+numbr2;
        console.log(total);
        break;
    case "-":
        total=numbr1-numbr2;
        console.log(total);
        break;
    case "*":
        total=numbr1*numbr2;
        console.log(total);
        break;
    case "/":
        if (numbr2!=0) {
            total=numbr1/numbr2;
            console.log(total);
        }else{
            console.log("le numbre 2 ega");
        } 
        
        break;
    default :
        console.log("ERROR");
        break;
};