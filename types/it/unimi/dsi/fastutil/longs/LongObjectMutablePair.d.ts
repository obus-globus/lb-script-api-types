import type { LongObjectPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongObjectPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongObjectMutablePair<V extends Object | number | string | boolean> extends Object implements LongObjectPair<V>, Serializable {
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: Object | null): LongObjectMutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): LongObjectPair<Object>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongObjectPair<V>;
    first(arg0: number): LongObjectPair<V>;
    firstLong(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongObjectPair<V>;
    key(arg0: number): LongObjectPair<V>;
    keyLong(): number;
    left(arg0: number): LongObjectMutablePair<V>;
    left(): number;
    left(arg0: number): LongObjectPair<V>;
    left(arg0: number): LongObjectPair<V>;
    leftLong(): number;
    right(): V;
    right(arg0: V): LongObjectMutablePair<V>;
    toString(): string;
}