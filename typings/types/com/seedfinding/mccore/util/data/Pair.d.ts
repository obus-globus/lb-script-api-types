import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Pair<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Object {
    constructor(arg0: A, arg1: B)
    constructor(arg0: Pair<A, B>)
    // private a: A;
    // private b: B;
    equals(arg0: Object | null): boolean;
    getFirst(): A;
    getSecond(): B;
    hashCode(): number;
    toString(): string;
}