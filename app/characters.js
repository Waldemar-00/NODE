const characters = [
    { name: 'Frodo', hasRing: false },
    { name: 'Bilbo', hasRing: false },
]

function stealRing ( characters, owner )
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

module.exports = { characters, stealRing }