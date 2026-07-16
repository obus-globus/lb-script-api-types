import type { ObjectFloatPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectFloatPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectFloatMutablePair<K extends unknown> extends Object implements ObjectFloatPair<K>, Serializable {
    static lexComparator<K extends unknown>(): (param0: ObjectFloatPair<K>, param1: ObjectFloatPair<K>) => number;
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ObjectFloatMutablePair<K>;
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ObjectFloatPair<K>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ObjectFloatMutablePair<K>;
    right(): number;
    right(arg0: number): ObjectFloatPair<K>;
    right(arg0: number): ObjectFloatMutablePair<K>;
    rightFloat(): number;
    second(): number;
    second(arg0: number): ObjectFloatPair<K>;
    secondFloat(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectFloatPair<K>;
    valueFloat(): number;
}