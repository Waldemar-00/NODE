import { characters, stealRing } from './characters.mjs'
let newCharacters = characters
newCharacters = stealRing( characters, 'Frodo' )
console.log( newCharacters )
newCharacters = stealRing( characters, 'Bilbo' )
console.log( newCharacters )
console.log( characters )