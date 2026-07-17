import type { ObjectLongPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectLongPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectLongMutablePair<K extends unknown> extends Object implements ObjectLongPair<K>, Serializable {
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ObjectLongMutablePair<K>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ObjectLongMutablePair<K>;
    right(): number;
    right(arg0: number): ObjectLongPair<K>;
    right(arg0: number): ObjectLongMutablePair<K>;
    rightLong(): number;
    second(): number;
    second(arg0: number): ObjectLongPair<K>;
    secondLong(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectLongPair<K>;
    valueLong(): number;
}