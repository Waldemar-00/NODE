export const characters = [
    { name: 'Frodo', hasRing: false },
    { name: 'Bilbo', hasRing: false },
]

export function stealRing ( characters, owner )
{
    return characters.map( character =>
    {
        if ( character.name === owner )
        {
            return { name: character.name, hasRing: true }
        }
            return { name: character.name, hasRing: false }
    })
}