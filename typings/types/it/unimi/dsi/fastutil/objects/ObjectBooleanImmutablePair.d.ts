import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { ObjectBooleanPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectBooleanImmutablePair<K extends Object | number | string | boolean> extends Object implements ObjectBooleanPair<K>, Serializable {
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: Object | null, paramarg1: boolean): ObjectBooleanImmutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: boolean): ObjectBooleanPair<Object>;
    constructor(arg0: K, arg1: boolean)
    // private left: K;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): Pair<K, boolean>;
    right(): boolean;
    right(arg0: boolean): ObjectBooleanPair<K>;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): ObjectBooleanPair<K>;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): ObjectBooleanPair<K>;
    valueBoolean(): boolean;
}