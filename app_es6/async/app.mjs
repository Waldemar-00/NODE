// import { characters, stealRing } from './characters.mjs'
async function importCharecters ()
{
    try {
        const app = await import( './characters.mjs' )
        useApp ( app )
    } catch (error) {
        console.log( error )
    }
}
importCharecters()

function useApp ( app )
{
    let newCharacters = app.characters
    newCharacters = app.stealRing( app.characters, 'Frodo' )
    console.log( newCharacters )
    newCharacters = app.stealRing( app.characters, 'Bilbo' )
    console.log( newCharacters )
    console.log( app.characters )
}
