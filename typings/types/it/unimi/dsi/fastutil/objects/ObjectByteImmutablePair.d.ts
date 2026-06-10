import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { ObjectBytePair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectByteImmutablePair<K extends Object | number | string | boolean> extends Object implements ObjectBytePair<K>, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: Object | null, paramarg1: number): ObjectByteImmutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: number): ObjectBytePair<Object>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): Pair<K, number>;
    right(): number;
    right(arg0: number): ObjectBytePair<K>;
    rightByte(): number;
    second(): number;
    second(arg0: number): ObjectBytePair<K>;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectBytePair<K>;
    valueByte(): number;
}