import type { ReferenceObjectPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ReferenceObjectPair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ReferenceObjectMutablePair<K extends unknown, V extends unknown> extends Object implements ReferenceObjectPair<K, V>, Serializable {
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): ReferenceObjectMutablePair<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): ReferenceObjectPair<K, V>;
    constructor(arg0: K, arg1: V)
    // private left: K;
    // private right: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ReferenceObjectMutablePair<K, V>;
    right(): V;
    right(arg0: V): ReferenceObjectMutablePair<K, V>;
    toString(): string;
}