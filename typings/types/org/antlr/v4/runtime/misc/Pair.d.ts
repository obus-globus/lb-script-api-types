import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Pair<A extends unknown, B extends unknown> extends Object implements Serializable {
    constructor(arg0: A, arg1: B)
    a: A;
    b: B;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}