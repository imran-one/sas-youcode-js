/**
 * JOUR 04 — GUIDE 03
 * Manipulation (Ajouter et Supprimer)
 *
 * OBJECTIF
 * Vous avez une file d'attente file = ["Alice", "Bob", "Charlie"]. "Alice" est servie (elle sort de la file par l'avant), et "David" rejoint la file (à l'arrière).
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';



let file = ["Alice", "Bob", "Charlie"];

file.shift();

file.push("David");

console.log(file);
