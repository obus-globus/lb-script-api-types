import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { IntObjectPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntObjectImmutablePair<V extends unknown> extends Object implements IntObjectPair<V>, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: Object | null): IntObjectImmutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): IntObjectPair<Object>;
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
    leftInt(): number;
    right(): V;
    right(arg0: V): Pair<number, V>;
    toString(): string;
}