import type { IntObjectPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntObjectPair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IntObjectMutablePair<V extends unknown> extends Object implements IntObjectPair<V>, Serializable {
    static of<V extends unknown>(paramarg0: number, paramarg1: V): IntObjectMutablePair<V>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntObjectPair<V>;
    firstInt(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntObjectPair<V>;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntObjectPair<V>;
    left(arg0: number): IntObjectMutablePair<V>;
    leftInt(): number;
    right(): V;
    right(arg0: V): IntObjectMutablePair<V>;
    toString(): string;
}