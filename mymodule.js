console.log( 'main module' )

import y from './submodule.js'

export default {
    prop: 100,
    func: function ( x )
    {
        console.log( 'x => x + y + this.prop + e1() + i1() with v=%s and y=%s and this.prop=%s and o1->%s ans i1->%s', x, y, this.prop, e1(), i1() )
        return x + y + this.prop + e1() + i1()
    }
}

export function e1 ()
{
    return 1000
} 

function i1 ()
{
    return 10000
}
