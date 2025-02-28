const { EventEmitter } = require( 'events' )

const emitter = new EventEmitter()


emitter.addListener( 'make', () => console.log( 'MAKE is DONE' ) )

emitter.emit( 'make' )

emitter.addListener( 'error', ( error ) => console.log( `${ error.message }` ) )
emitter.emit( 'error', new Error( 'BOOM!!!' ) )

emitter.removeAllListeners()