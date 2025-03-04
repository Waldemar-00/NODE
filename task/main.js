const { fork } = require( 'child_process' )

fork( './task/fork.js' )
fork( './task/thread.js')