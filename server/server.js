//! Create a server on your computer
const { createServer } = require( 'node:http' )
const url = require( 'url' )
const time = require( './time_module' )
const server = createServer( ( request, response ) =>
{
    //  response.statusCode = 200
    //  response.setHeader( 'Content-Type', 'text/html' )
    const urlParsed = url.parse( request.url, true )
    console.log( urlParsed )
    console.log( urlParsed.pathname )
    console.log( urlParsed.host )
    console.log( urlParsed.port )
    console.log( urlParsed.protocol )
    console.log( urlParsed.query )

    response.writeHead( 200, { 'Content-Type': 'text/html' } )
    response.write( `<h1> <pre> Hello world!!!\n URL: ${ request.url }\n Method: ${ request.method }\n URL: ${request.url }\n Headers: ${ request.headers } \n ${ time.getTime() } </pre></h1>` )
    //  response.end( `<h1> Hello world!!!\n URL: ${ request.url }\n Method: ${ request.method }\n Headers: ${ request.headers } \n ${ time.getTime() } </h1>` )
    response.end()
} )
const hostname = "127.0.0.1"
const port  = 3000
server.listen( port, hostname, () =>
{
    console.log(`Server running at http://${hostname}:${port}/`)
})