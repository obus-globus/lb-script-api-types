import type { Object } from '../../../java/lang/Object.d.ts'
export class Quartet<A extends unknown, B extends unknown, C extends unknown, D extends unknown> extends Object {
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