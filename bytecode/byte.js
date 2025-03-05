function byte()
{
    const a = 77
    return a  * 99
}
byte()

//* node --print-bytecode bytecode/byte.js | grep byte