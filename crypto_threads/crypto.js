const crypto = require( 'crypto' )
const data = JSON.stringify( { sd: 'SOME DATA' } )
const hash = crypto.createHash( 'sha256' ).update( data ).digest( 'hex' )
console.log( hash )
// process.env.UV_THREADPOOL_SIZE = 8
console.log( process.env.UV_THREADPOOL_SIZE, 'UV_THREADPOOL_SIZE')

for ( let i = 0; i <= 16; i++ )
{
    crypto.pbkdf2( 'PASSWORD', crypto.randomBytes( 16 ).toString( 'hex' ), 100_000, 64, 'sha512', ( error, dKey ) =>
        {
            if ( error ) throw error
            console.log( dKey )
            console.log( performance.now() )
        })
}
console.log( process.version )
console.log( process.arch )
console.log( process.platform )
console.log( process.versions.v8 )
console.log( process.versions )
console.log( process.env )
console.log( process.stdin )
console.log( process.stdout )
console.log( process.stderr )
