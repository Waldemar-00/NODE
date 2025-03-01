const eventTarget = new EventTarget()

eventTarget.addEventListener( 'connected', () => console.log( 'CONNECTED!' ) )

eventTarget.dispatchEvent( new Event( 'connected' ) )
