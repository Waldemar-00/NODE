const { Worker } = require( 'worker_threads' )
console.log( 'Start Worker' )

const worker = new Worker( './task/thread_work.js', { workerData: 200_000 } )

worker.on( 'message', result =>
{
    console.log( 'Result from Treads', result )
} )
worker.on( 'error', error => console.log( error ) )
worker.on( 'exit', code => console.log( code ) )

console.log('End Worker')