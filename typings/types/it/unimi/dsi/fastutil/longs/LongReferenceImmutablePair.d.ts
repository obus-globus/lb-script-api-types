import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { LongReferencePair } from '../../../../../it/unimi/dsi/fastutil/longs/LongReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongReferenceImmutablePair<V extends unknown> extends Object implements LongReferencePair<V>, Serializable {
    static of(paramarg0: number, paramarg1: Object | null): LongReferenceImmutablePair<Object>;
    static of(paramarg0: number, paramarg1: Object | null): LongReferencePair<Object>;
    constructor(arg0: number, arg1: V)
    // private left: number;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongReferencePair<V>;
    firstLong(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongReferencePair<V>;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongReferencePair<V>;
    leftLong(): number;
    right(): V;
    right(arg0: V): Pair<number, V>;
    toString(): string;
}