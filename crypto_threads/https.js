const https = require( 'https' )

//! HTTPS will works on your core, it doesn't depend on from UV_THREADS_POOL_SIZE
for ( let i = 0; i <= 16; i++ )
{
    https.get( 'https://yandex.ru', ( res ) =>
    {
        res.on( 'data', () => console.log( 'res - data' ) )
        res.on( 'end', () => console.log( performance.now(), 'res - end' ) )
    })
}