import type { ReferenceFloatPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceFloatPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceFloatMutablePair<K extends unknown> extends Object implements ReferenceFloatPair<K>, Serializable {
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ReferenceFloatMutablePair<K>;
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ReferenceFloatPair<K>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ReferenceFloatMutablePair<K>;
    right(): number;
    right(arg0: number): ReferenceFloatPair<K>;
    right(arg0: number): ReferenceFloatMutablePair<K>;
    rightFloat(): number;
    second(): number;
    second(arg0: number): ReferenceFloatPair<K>;
    secondFloat(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceFloatPair<K>;
    valueFloat(): number;
}