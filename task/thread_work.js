const { workerData, parentPort } = require( 'worker_threads' )
const perf_hooks = require( 'perf_hooks' )
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
    console.log( items.getEntriesByType( 'function' ) )
    observer.disconnect()
} )
observer.observe( { entryTypes: [ 'function' ] } )

parentPort.postMessage( hardWork( workerData ) )