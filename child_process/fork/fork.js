const { fork } = require( 'child_process' )

const childFork = fork( 'child_process/fork/child.js' )

childFork.on( 'message', msg => console.log( msg ) )
childFork.send( 'Hello child process!!!' )
childFork.send( 'disconnect' )

childFork.on( 'close', code => console.log( code ) )
fork( 'threads/worker_threads.js' )
console.log( "Child processes don't blocked main process!" )