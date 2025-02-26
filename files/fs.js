//! You can next:
//* Create files
//* Read files
//* Update files
//* Rename files
//* Delete files

const http = require( 'http' )
const fs = require( 'fs' )

http.createServer( ( req, res ) =>
{
    fs.appendFile( 'index.html', '<h2>fs.appendFile</h2>', ( err ) =>
    {
        if ( err ) throw err
        console.log("added")
    })
    fs.readFile( 'index.html', function ( err, data )
    {
        res.writeHead( 200, { "Content-type": "text/html" } )
        res.write( data )
        res.end()
    })
}).listen( 8080,  ()=> console.log( `listening on: http://localhost:8080`)) //! http://localhost:8080/
