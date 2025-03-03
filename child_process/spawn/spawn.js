const { spawn } = require( 'child_process' )

const childSpawn = spawn( 'cmd.exe', ['/c', 'dir'] )

childSpawn.stdout.on( 'data', data => console.log( `Stdout: ${ data }` ) )
childSpawn.stderr.on( 'data', data => console.log( `Stderr: ${ data }` ) )
childSpawn.on('exit', code => console.log( code ))