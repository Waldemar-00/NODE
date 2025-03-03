const { exec } = require( 'child_process' )

const childProcess = exec( 'dir', ( stderr, stdout  ) =>
{
    if ( stderr ) console.log( stderr )
    console.log( stdout )
} )

childProcess.on( 'exit', code => console.log( code ) )