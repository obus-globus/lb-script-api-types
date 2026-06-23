import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { DoubleObjectPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleObjectImmutablePair<V extends unknown> extends Object implements DoubleObjectPair<V>, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: Object | null): DoubleObjectImmutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): DoubleObjectPair<Object>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleObjectPair<V>;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleObjectPair<V>;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleObjectPair<V>;
    leftDouble(): number;
    right(): V;
    right(arg0: V): Pair<number, V>;
    toString(): string;
}