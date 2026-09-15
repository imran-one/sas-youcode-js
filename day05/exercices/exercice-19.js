/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VALIDATEUR DE PLAQUE D'IMMATRICULATION (REGEX BASIQUE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Simulez la vérification d'une plaque d'immatriculation marocaine.
 *  Le format attendu est "1234-A-56" ou "12345-AB-6".
 *  Pour simplifier, vérifiez qu'elle contient deux tirets et qu'une des sections au milieu est une lettre.
 *  L'utilisation d'expressions régulières (Regex) est recommandée ici !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day05/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function vérification(plaque){
    let v =/[a-zA-Z]/ 
    let m = plaque.split('-')
    if (m.length !== 3) return false
    return v.test(m[1])
}

console.log(vérification("12345-AB-6"));
 console.log(vérification("1-234-A-56"));

