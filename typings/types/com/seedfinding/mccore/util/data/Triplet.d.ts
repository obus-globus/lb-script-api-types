import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Triplet<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object {
    constructor(arg0: A, arg1: B, arg2: C)
    constructor(arg0: Triplet<A, B, C>)
    // private a: A;
    // private b: B;
    // private c: C;
    equals(arg0: Object | null): boolean;
    getFirst(): A;
    getSecond(): B;
    getThird(): C;
    hashCode(): number;
    toString(): string;
}