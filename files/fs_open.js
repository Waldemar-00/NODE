const fs = require( 'fs' )

fs.open( 'files/demo.txt', 'w', ( err, fd ) => //! fd it is a number of document in nucleus of OS
//! fd - file descriptor
{
    if ( err ) throw err
    console.log( 'Done' )
    fs.close( fd, ( err ) =>
    {
        if ( err ) throw err
        console.log( 'Close' )
    } )
} )
//! IF You used fs.open - Use also fs.close() mostly