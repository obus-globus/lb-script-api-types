import type { ReferenceFloatPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceFloatPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceFloatMutablePair<K extends Object | number | string | boolean> extends Object implements ReferenceFloatPair<K>, Serializable {
    static of(paramarg0: Object | null, paramarg1: number): ReferenceFloatMutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: number): ReferenceFloatPair<Object>;
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
    right(): number;
    right(arg0: number): ReferenceFloatPair<K>;
    right(arg0: number): ReferenceFloatPair<K>;
    rightFloat(): number;
    second(): number;
    second(arg0: number): ReferenceFloatPair<K>;
    second(arg0: number): ReferenceFloatPair<K>;
    secondFloat(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceFloatPair<K>;
    value(arg0: number): ReferenceFloatPair<K>;
    valueFloat(): number;
}