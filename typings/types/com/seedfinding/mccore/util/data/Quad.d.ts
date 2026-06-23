import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Quad<A extends unknown, B extends unknown, C extends unknown, D extends unknown> extends Object {
    constructor(arg0: A, arg1: B, arg2: C, arg3: D)
    constructor(arg0: Quad<A, B, C, D>)
    // private a: A;
    // private b: B;
    // private c: C;
    // private d: D;
    equals(arg0: Object | null): boolean;
    getFirst(): A;
    getFourth(): D;
    getSecond(): B;
    getThird(): C;
    hashCode(): number;
    toString(): string;
}