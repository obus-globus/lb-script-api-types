import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { ReferenceReferencePair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ReferenceReferencePair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReferenceReferenceImmutablePair<K extends unknown, V extends unknown> extends Object implements ReferenceReferencePair<K, V>, Serializable {
    static of(paramarg0: Object | null, paramarg1: Object | null): ReferenceReferenceImmutablePair<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): ReferenceReferencePair<Object, Object>;
    constructor(arg0: K, arg1: V)
    // private left: K;
    // private right: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): Pair<K, V>;
    right(): V;
    right(arg0: V): Pair<K, V>;
    toString(): string;
}