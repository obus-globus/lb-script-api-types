import type { ObjectReferencePair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectReferencePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectReferenceImmutablePair<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements ObjectReferencePair<K, V>, Serializable {
    static of(paramarg0: Object | null, paramarg1: Object | null): ObjectReferenceImmutablePair<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): ObjectReferencePair<Object, Object>;
    constructor(arg0: K, arg1: V)
    // private left: K;
    // private right: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    right(): V;
    toString(): string;
}