import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { ObjectShortPair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectShortImmutablePair<K extends unknown> extends Object implements ObjectShortPair<K>, Serializable {
    static of<K extends unknown>(paramarg0: K, paramarg1: number): ObjectShortImmutablePair<K>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): Pair<K, number>;
    right(): number;
    right(arg0: number): ObjectShortPair<K>;
    rightShort(): number;
    second(): number;
    second(arg0: number): ObjectShortPair<K>;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ObjectShortPair<K>;
    valueShort(): number;
}