import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Triple<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object {
    constructor(arg0: A, arg1: B, arg2: C)
    a: A;
    b: B;
    c: C;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}