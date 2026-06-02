import type { DoubleObjectPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleObjectMutablePair<V extends Object | number | string | boolean> extends Object implements DoubleObjectPair<V>, Serializable {
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: Object | null): DoubleObjectMutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): DoubleObjectPair<Object>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleObjectPair<V>;
    first(arg0: number): DoubleObjectPair<V>;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleObjectPair<V>;
    key(arg0: number): DoubleObjectPair<V>;
    keyDouble(): number;
    left(arg0: number): DoubleObjectMutablePair<V>;
    left(): number;
    left(arg0: number): DoubleObjectPair<V>;
    left(arg0: number): DoubleObjectPair<V>;
    leftDouble(): number;
    right(): V;
    right(arg0: V): DoubleObjectMutablePair<V>;
    toString(): string;
}