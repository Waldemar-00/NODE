const fs = require( 'fs' )

fs.rename( 'files/fs_open_txt.js', 'files/fs_open.js', ( err ) =>
{
    if ( err ) throw err
    console.log('Renamed')
})