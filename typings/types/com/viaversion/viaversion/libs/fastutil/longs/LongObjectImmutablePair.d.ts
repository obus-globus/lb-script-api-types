import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { LongObjectPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongObjectPair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LongObjectImmutablePair<V extends unknown> extends Object implements LongObjectPair<V>, Serializable {
    static lexComparator<V extends unknown>(): (param0: LongObjectPair<V>, param1: LongObjectPair<V>) => number;
    static of<V extends unknown>(paramarg0: number, paramarg1: V): LongObjectImmutablePair<V>;
    static of<V extends unknown>(paramarg0: number, paramarg1: V): LongObjectPair<V>;
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