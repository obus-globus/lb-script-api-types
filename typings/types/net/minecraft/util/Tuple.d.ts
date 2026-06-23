import type { Object } from '../../../java/lang/Object.d.ts'
export class Tuple<A extends unknown, B extends unknown> extends Object {
    constructor(a: A, b: B)
    readonly a: A;
    readonly b: B;
    getA(): A;
    getB(): B;
    setA(a: A): void;
    setB(b: B): void;
}