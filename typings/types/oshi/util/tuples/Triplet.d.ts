import type { Object } from '../../../java/lang/Object.d.ts'
export class Triplet<A extends unknown, B extends unknown, C extends unknown> extends Object {
    constructor(arg0: A, arg1: B, arg2: C)
    readonly a: A;
    readonly b: B;
    readonly c: C;
    getA(): A;
    getB(): B;
    getC(): C;
}