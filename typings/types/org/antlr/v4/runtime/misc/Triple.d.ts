import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Triple<A extends unknown, B extends unknown, C extends unknown> extends Object {
    constructor(arg0: A, arg1: B, arg2: C)
    a: A;
    b: B;
    c: C;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}