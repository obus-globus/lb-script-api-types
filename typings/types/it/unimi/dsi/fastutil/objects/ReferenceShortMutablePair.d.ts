import type { ReferenceShortPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceShortMutablePair<K extends unknown> extends Object implements ReferenceShortPair<K>, Serializable {
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ReferenceShortMutablePair<K>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): ReferenceShortMutablePair<K>;
    right(): number;
    right(arg0: number): ReferenceShortPair<K>;
    right(arg0: number): ReferenceShortMutablePair<K>;
    rightShort(): number;
    second(): number;
    second(arg0: number): ReferenceShortPair<K>;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceShortPair<K>;
    valueShort(): number;
}