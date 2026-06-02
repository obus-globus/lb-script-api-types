import type { Object } from '../../../java/lang/Object.d.ts'
export class Pair<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Object {
    constructor(arg0: A, arg1: B)
    readonly a: A;
    readonly b: B;
    getA(): A;
    getB(): B;
}