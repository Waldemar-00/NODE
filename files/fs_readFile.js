const fs = require( 'fs' )

fs.readFile( './files/writeFile.txt',  ( (err, data) =>
{
    if ( err ) throw err
    console.log( data )
    console.log( data.toString() )
}))