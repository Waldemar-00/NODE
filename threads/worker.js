const { parentPort, workerData } = require( 'worker_threads' )
const perf_hooks  = require( 'perf_hooks' )

function toThreads ( { amount } )
{
    function hardWork ( amount )
    {
        const array = []
        for ( let i = 0; i <= amount; i++ )
        {
            array.unshift( i )
        }
        return array
    }
    hardWork = perf_hooks.performance.timerify( hardWork )
    const observer = new perf_hooks.PerformanceObserver( ( items, observer ) =>
    {
        const entry = items.getEntriesByType( 'function' ).pop()
        console.log( entry )
        observer.disconnect()
    } )
    observer.observe( { entryTypes: [ 'function' ] } )
    return hardWork ( amount )
}


parentPort.postMessage( toThreads( workerData ) )