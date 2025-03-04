const { fork } = require( 'child_process' )
console.log( 'Start Fork' )
const childProcess = fork( './task/fork_work.js' )

childProcess.send( { message: 'start', amount: 200_000 } )
childProcess.on('message', msg => console.log( 'Result from Fork', msg))
childProcess.send( { message: 'exit' } )
console.log( 'End Fork' )