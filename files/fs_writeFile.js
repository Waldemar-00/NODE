const fs = require( 'fs' )

fs.writeFile( 'files/writeFile.txt', 'Hello Node!', { encoding: 'utf8', flag: 'a',  },  (err) =>
{
    if ( err ) throw err
    console.log( 'done' )
} )
//? flags: 'w' - write and rewrite; 'a' - simple append!