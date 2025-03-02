const perf_hooks = require( 'perf_hooks' )


const perfObserver = new perf_hooks.PerformanceObserver( ( items, observer ) =>
{
    console.log( items.getEntries() )
    const entry = items.getEntriesByName( 'SlowUnshift' ).pop()
    console.log( `${ entry.name }: ${ entry.duration }ms` )
    observer.disconnect()
} )

perfObserver.observe( { entryTypes: [ 'mark', 'measure', 'function', 'http2' ] } )

function test ()
{
    const array = []
    for ( let i = 0; i <= 100_000; i++ )
    {
        array.unshift( i )
    }
    return array
}
test = perf_hooks.performance.timerify( test )
function slowUnshift ()
{
    const array = []
    performance.mark( 'start' )
    for ( let i = 0; i <= 10_000; i++ )
    {
        array.unshift( i )
    }
    performance.mark( 'end' )
    performance.measure( 'SlowUnshift', 'start', 'end' )
    // console.log( performance.getEntries() )
    // console.log( performance.getEntriesByName( 'SlowUnshift' ) )
    // console.log( performance.getEntriesByType( 'measure' ) )
    // console.log( performance.getEntriesByType( 'mark' ) )
    // console.log( performance.getEntriesByName( 'start' ) )
    // performance.clearMarks()
    // performance.clearMeasures()
    return array
}

slowUnshift()
test ()