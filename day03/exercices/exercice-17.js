/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LE NETTOYEUR DE DONNÉES SCRAPPÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction extrairePrixEtConvertir(chaineBrute) qui reçoit, par exemple, "   Prix: 15.99 $  ". La fonction doit nettoyer la chaîne, isoler le chiffre, et retourner le type Number. Elle doit gérer les erreurs (retourner null si la chaîne ne contient pas de prix exploitable).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day03/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.


function extrairePrixEtConvertir(chaineBrute){
    let str = chaineBrute.trim()    // string.trim() ==>> clear spaces
    let nb = ""
    
    for (let i = 0;  i < chaineBrute.length; i++) {
        if (str[i] >=0 && str[i] <=9|| str[i] =='.') {
            nb += str[i]
        }
        
    }
    return Number(nb)
}
console.log(extrairePrixEtConvertir("   Prix: 15.99 $  "));
