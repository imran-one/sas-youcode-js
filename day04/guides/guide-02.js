/**
 * JOUR 04 — GUIDE 02
 * Parcourir avec for...of
 *
 * OBJECTIF
 * Vous avez notes = [12, 15, 8, 19]. Calculez la moyenne des notes en parcourant le tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';


let notes = [12, 15, 8, 19]
let p = 0
let m = 0
for (let i = 0; i < notes.length; i++) {
    p += notes[i]

}
m = p / notes.length
console.log(m);
