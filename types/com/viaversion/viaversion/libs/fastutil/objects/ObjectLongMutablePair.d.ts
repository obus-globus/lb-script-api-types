import type { ObjectLongPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectLongPair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectLongMutablePair<K extends Object | number | string | boolean> extends Object implements ObjectLongPair<K>, Serializable {
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: Object | null, paramarg1: number): ObjectLongMutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: number): ObjectLongPair<Object>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ObjectLongMutablePair<K>;
    right(arg0: number): ObjectLongMutablePair<K>;
    right(): number;
    right(arg0: number): ObjectLongPair<K>;
    right(arg0: number): ObjectLongPair<K>;
    rightLong(): number;
    second(): number;
    second(arg0: number): ObjectLongPair<K>;
    second(arg0: number): ObjectLongPair<K>;
    secondLong(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectLongPair<K>;
    value(arg0: number): ObjectLongPair<K>;
    valueLong(): number;
}