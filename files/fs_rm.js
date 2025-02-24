const fs = require( 'fs' )

fs.rm( 'files/demo.txt', ( err ) => //! like a unlinck() for files and like a rmdir for dir
{
    if ( err ) throw err
    console.log('Deleted')
} )
//? options: { recurcive: true } will delete with all in directory