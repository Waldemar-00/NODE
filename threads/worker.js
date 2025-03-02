const { parentPort, workerData } = require( 'worker_threads' )
const perf_hooks  = require( 'perf_hooks' )

function toThreads ( amount  )
{
    const array = []
    for ( let i = 0; i <= amount; i++ )
    {
        array.unshift( i )
    }
    console.log( array, "ARRAY", amount )
    return array
}

toThreads = perf_hooks.performance.timerify( toThreads )
const observer = new perf_hooks.PerformanceObserver( ( items, observer ) =>
{
    const entry = items.getEntriesByType( 'function' ).pop()
    console.log( entry )
    observer.disconnect()
} )
observer.observe( { entryTypes: [ 'function' ] } )

parentPort.postMessage( toThreads( workerData ) )