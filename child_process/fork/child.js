process.on( 'message', msg =>
{
    if ( msg === 'disconnect' ) return process.exit() //! process.disconnect() or child.kill('SIGTERM')
    console.log( msg )
    process.send( 'Hi, father :-)' )

} )