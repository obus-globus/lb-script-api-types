import type { LongReferencePair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/LongReferencePair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LongReferenceMutablePair<V extends unknown> extends Object implements LongReferencePair<V>, Serializable {
    static of<V extends unknown>(paramarg0: number, paramarg1: V): LongReferenceMutablePair<V>;
    static of<V extends unknown>(paramarg0: number, paramarg1: V): LongReferencePair<V>;
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
    left(arg0: number): LongReferenceMutablePair<V>;
    leftLong(): number;
    right(): V;
    right(arg0: V): LongReferenceMutablePair<V>;
    toString(): string;
}