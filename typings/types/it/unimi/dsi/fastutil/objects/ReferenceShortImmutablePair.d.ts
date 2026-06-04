import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { ReferenceShortPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReferenceShortImmutablePair<K extends Object | number | string | boolean> extends Object implements ReferenceShortPair<K>, Serializable {
    static of(paramarg0: Object | null, paramarg1: number): ReferenceShortImmutablePair<Object>;
    static of(paramarg0: Object | null, paramarg1: number): ReferenceShortPair<Object>;
    constructor(arg0: K, arg1: number)
    // private left: K;
    // private right: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): K;
    left(arg0: K): Pair<K, number>;
    right(): number;
    right(arg0: number): ReferenceShortPair<K>;
    rightShort(): number;
    second(): number;
    second(arg0: number): ReferenceShortPair<K>;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ReferenceShortPair<K>;
    valueShort(): number;
}