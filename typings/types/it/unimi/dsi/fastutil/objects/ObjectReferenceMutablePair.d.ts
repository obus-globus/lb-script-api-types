import type { ObjectReferencePair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectReferenceMutablePair<K extends unknown, V extends unknown> extends Object implements ObjectReferencePair<K, V>, Serializable {
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): ObjectReferenceMutablePair<K, V>;
    constructor(arg0: K, arg1: V)
    // private left: K;
    // private right: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ObjectReferenceMutablePair<K, V>;
    right(): V;
    right(arg0: V): ObjectReferenceMutablePair<K, V>;
    toString(): string;
}