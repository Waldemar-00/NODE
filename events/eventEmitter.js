//! Own events

const events = require( 'events' )

const emitter = new events.EventEmitter()
const greet = ( name, sorname ) => console.log( `Hi, ${ name } ${ sorname }` )
//* emitter.on( 'greet', greet )
emitter.addListener( 'greet', greet )
emitter.prependListener( 'greet', () => console.log( 'The FIRST because "prependListener"!' ) )
console.log( emitter.getMaxListeners() )
emitter.setMaxListeners( 3 )
console.log( emitter.listenerCount( 'greet' ) )
emitter.once('greet', ( name, sorname ) => console.log( `Hi, ${ name } ${ sorname }` ) ) //! ONCE, only once
emitter.emit( 'greet', 'John', 'Brown' )
//* emitter.off( 'greet', greet )
emitter.on( 'greet', greet )
//! emitter.on( 'greet', greet ) emitter.setMaxListeners( 2 ) Will be warning: MaxListenersExceededWarning...
emitter.emit( 'greet', 'Mickle', 'Smith' )
//* emitter.removeListener( 'greet', greet )
emitter.emit( 'greet', 'Ulad', 'Mart' )
console.log( emitter.listenerCount( 'greet' ) )
console.log( emitter.eventNames() )
emitter.removeAllListeners()