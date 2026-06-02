import type { Object } from '../../../java/lang/Object.d.ts'
export class Quartet<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean, D extends Object | number | string | boolean> extends Object {
    constructor(arg0: A, arg1: B, arg2: C, arg3: D)
    readonly a: A;
    readonly b: B;
    readonly c: C;
    readonly d: D;
    getA(): A;
    getB(): B;
    getC(): C;
    getD(): D;
}