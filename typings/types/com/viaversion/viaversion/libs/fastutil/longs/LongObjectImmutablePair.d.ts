import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { LongObjectPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongObjectPair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LongObjectImmutablePair<V extends Object | number | string | boolean> extends Object implements LongObjectPair<V>, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: number, paramarg1: Object | null): LongObjectImmutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): LongObjectPair<Object>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongObjectPair<V>;
    firstLong(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongObjectPair<V>;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongObjectPair<V>;
    leftLong(): number;
    right(): V;
    right(arg0: V): Pair<number, V>;
    toString(): string;
}