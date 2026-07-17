import type { ObjectIntPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIntPair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectIntMutablePair<K extends unknown> extends Object implements ObjectIntPair<K>, Serializable {
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ObjectIntMutablePair<K>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ObjectIntMutablePair<K>;
    right(): number;
    right(arg0: number): ObjectIntPair<K>;
    right(arg0: number): ObjectIntMutablePair<K>;
    rightInt(): number;
    second(): number;
    second(arg0: number): ObjectIntPair<K>;
    secondInt(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectIntPair<K>;
    valueInt(): number;
}