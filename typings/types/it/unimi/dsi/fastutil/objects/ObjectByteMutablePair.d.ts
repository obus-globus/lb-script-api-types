import type { ObjectBytePair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectByteMutablePair<K extends unknown> extends Object implements ObjectBytePair<K>, Serializable {
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ObjectByteMutablePair<K>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ObjectByteMutablePair<K>;
    right(): number;
    right(arg0: number): ObjectBytePair<K>;
    right(arg0: number): ObjectByteMutablePair<K>;
    rightByte(): number;
    second(): number;
    second(arg0: number): ObjectBytePair<K>;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectBytePair<K>;
    valueByte(): number;
}