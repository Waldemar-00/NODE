const a = 5

function b ()
{
    return c()
}
function c ()
{
    return d()
}
function d ()
{
    console.log( a )
}
setTimeout( () =>
{
    console.log('SetTimeOut')
}, 0)
b()