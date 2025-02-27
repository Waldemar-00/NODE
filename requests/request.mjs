import http  from 'http'
import url from 'url'
import fs  from 'fs'

http.createServer( ( req, res ) =>
{
    const parsedURL = url.parse( req.url, true )
    // console.log( parsedURL )
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: null,
    //     query: [Object: null prototype] {},
    //     pathname: '/summer',
    //     path: '/summer',
    //     href: '/summer'
    // }
    fs.readFile( `./requests${parsedURL.pathname}.html`, ( err, page ) =>
    {
        if ( err )
        {
            fs.readFile( "./requests/404.html", ( err, page ) =>
            {
                if( err ) throw err
                res.writeHead( 200, { "Content-type": "text/html" } )
                res.write( page )
                res.end()
            })
        } else
        {
            res.writeHead( 200, { "Content-type": "text/html" } )
            res.write( page )
            const readStream = fs.createReadStream( `./requests${ parsedURL.pathname }.html` )
            readStream.on('open', () => console.log( `Path ${ parsedURL.pathname } was opened`))
            res.end()
        }

        //! res.close() if You need to stop the server
    })
}).listen( 8080 )