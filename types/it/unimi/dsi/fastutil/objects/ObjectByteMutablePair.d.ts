import type { ObjectBytePair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectByteMutablePair<K extends Object | number | string | boolean> extends Object implements ObjectBytePair<K>, Serializable {
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: Object | null, paramarg1: number): ObjectByteMutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: number): ObjectBytePair<Object>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ObjectByteMutablePair<K>;
    right(arg0: number): ObjectByteMutablePair<K>;
    right(): number;
    right(arg0: number): ObjectBytePair<K>;
    right(arg0: number): ObjectBytePair<K>;
    rightByte(): number;
    second(): number;
    second(arg0: number): ObjectBytePair<K>;
    second(arg0: number): ObjectBytePair<K>;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectBytePair<K>;
    value(arg0: number): ObjectBytePair<K>;
    valueByte(): number;
}