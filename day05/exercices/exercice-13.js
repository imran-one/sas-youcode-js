/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FORMATAGE MONÉTAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction formater(montant) qui prend 1234567 (Number ou String) 
 * et retourne "1 234 567 MAD". (Vous pouvez chercher comment utiliser les regex pour insérer des espaces,
 * ou utiliser les boucles/slice).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day05/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let num = "1234567"
function formater(montant) {
    let form = montant.slice(0,1)+ " "+montant.slice(1,4)+" "+montant.slice(4,7)+" MAD"
    return form

}

console.log(formater(num));
