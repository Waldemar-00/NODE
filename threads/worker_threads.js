const { Worker } = require('worker_threads')


const worker = new Worker( './threads/worker.js', { workerData: 200_000 } )

worker.on( 'message', ( result ) =>
{
    console.log( result )
} )
worker.on( 'error', ( err ) =>
{
    console.log( err )
} )

worker.on( 'exit', ( code ) =>
{
    console.log( code )
})