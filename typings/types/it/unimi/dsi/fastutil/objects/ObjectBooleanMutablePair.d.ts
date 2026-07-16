import type { ObjectBooleanPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectBooleanMutablePair<K extends unknown> extends Object implements ObjectBooleanPair<K>, Serializable {
    static lexComparator<K extends unknown>(): (param0: ObjectBooleanPair<K>, param1: ObjectBooleanPair<K>) => number;
    static of<K extends unknown>(paramarg0: K, paramarg1: boolean): ObjectBooleanMutablePair<K>;
    static of<K extends unknown>(paramarg0: K, paramarg1: boolean): ObjectBooleanPair<K>;
    constructor(arg0: K, arg1: boolean)
    // private left: K;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ObjectBooleanMutablePair<K>;
    right(): boolean;
    right(arg0: boolean): ObjectBooleanPair<K>;
    right(arg0: boolean): ObjectBooleanMutablePair<K>;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): ObjectBooleanPair<K>;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): ObjectBooleanPair<K>;
    valueBoolean(): boolean;
}