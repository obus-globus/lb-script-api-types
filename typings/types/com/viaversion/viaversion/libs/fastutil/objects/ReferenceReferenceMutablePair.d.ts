import type { ReferenceReferencePair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ReferenceReferencePair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReferenceReferenceMutablePair<K extends unknown, V extends unknown> extends Object implements ReferenceReferencePair<K, V>, Serializable {
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): ReferenceReferenceMutablePair<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): ReferenceReferencePair<K, V>;
    constructor(arg0: K, arg1: V)
    // private left: K;
    // private right: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ReferenceReferenceMutablePair<K, V>;
    right(): V;
    right(arg0: V): ReferenceReferenceMutablePair<K, V>;
    toString(): string;
}