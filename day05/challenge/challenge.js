/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · CHALLENGE
 * LE FILTRE À INSULTES / CENSURE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous développez le système de chat d'un jeu vidéo en ligne pour YouCode.
 *
 * Consignes :
 * 1. Vous avez une liste (tableau) de mots interdits : ["noob", "idiot", "nul"].
 * 2. Créez une fonction filtrerMessage(message) qui reçoit le message tapé par le joueur.
 * 3. Si le message contient un des mots interdits (peu importe s'il y a des majuscules, ex: "nOOb"), 
 * il doit être remplacé par des astérisques de la même longueur (ex: "").
 * 4. Retournez le message censuré.
 *
 * Exemple de test :
 * filtrerMessage("Tu es vraiment un GROS NooB et un idiot !!")
 * -> Résultat attendu : "Tu es vraiment un GROS  et un * !!"
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.

let interdits = ["noob", "idiot", "nul"]
let star = '*'

function filtrerMessage(message) {
    let texte = message 
    message = message.split(" ")
    texte = texte.toLowerCase()
    texte= texte.split(" ")
    for (let i = 0; i < interdits.length; i++) {
        for (let j = 0; j < texte.length; j++) {
            if (interdits[i] == texte[j]) {
                message[j] = star.repeat(message[j].length)
            }
        }
    }

    return message.join(" ")
}
console.log(filtrerMessage("Tu es vraiment un GROS NooB et un idiot !!"));
