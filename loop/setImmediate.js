//? TICK
//! TIMERS
//! Pending CallBaks
//! Idle, Prepare
//! Poll - i/o
//! Check - Immediate
//! Close CallBaks
//? TICK
console.log('START')
setTimeout( () => console.log( "SET_TIME_OUT", performance.now() ), 0 )
//! Will executed when will started NEXT TICK, but no always
setImmediate( () => console.log( "SET_IMMEDIATE" ) ) //! Will executed in CHECK phase
// SET_IMMEDIATE
// SET_TIME_OUT
//! OR:
// SET_TIME_OUT
// SET_IMMEDIATE
console.log('FINAL')
const timerId = setTimeout( () =>
{
    console.log('UNREF')
}, 3000 )
timerId.unref()
timerId.ref()
timerId.unref()

setImmediate(() => {
    console.log( 'setImmediate' ) //! macrotasks
} )

setTimeout(() => {
    console.log( 'setTimeout' ) //! macrotasks
}, 0 )

Promise.resolve().then(() => console.log('Promise in microtasks')) //! microtask - before new Event loop( phase Timers )
process.nextTick(() => { //! microtask - before new Event loop( phase Timers )
    console.log( 'process.nextTick in microtasks' )
} )

console.log( 'BEGINING!!!!' )
