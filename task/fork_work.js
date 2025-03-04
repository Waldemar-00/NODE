const perf_hooks = require( 'perf_hooks' )


process.on( 'message', msg =>
{
    if ( msg.message === 'start' )
    {
        hardWork = perf_hooks.performance.timerify( hardWork )
        const observer = new perf_hooks.PerformanceObserver( ( items, observer ) =>
        {
            console.log( items.getEntriesByType( 'function' ) )
            observer.disconnect()
        } )
        observer.observe( { entryTypes: [ 'function' ] } )

        const result = hardWork( msg.amount )
        process.send( result )
    }
    if ( msg.message === 'exit' ) process.exit()

})
function hardWork ( amount )
{
    const array = []
    for ( let i = 0; i <= amount; i++ )
    {
        array.unshift( i )
    }
    return array
}
