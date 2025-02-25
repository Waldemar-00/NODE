const  { characters, stealRing } = require( './characters.js' )
let newCharacters = characters
newCharacters = stealRing( characters, 'Frodo' )
console.log( newCharacters )
newCharacters = stealRing( characters, 'Bilbo' )
console.log( newCharacters )
console.log( characters )