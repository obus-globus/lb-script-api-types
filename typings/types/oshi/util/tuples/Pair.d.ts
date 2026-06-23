import type { Object } from '../../../java/lang/Object.d.ts'
export class Pair<A extends unknown, B extends unknown> extends Object {
    constructor(arg0: A, arg1: B)
    readonly a: A;
    readonly b: B;
    getA(): A;
    getB(): B;
}