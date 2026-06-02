import type { ShortShortPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortShortMutablePair extends Object implements ShortShortPair, Serializable {
    static lexComparator(): (param0: ShortShortPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): ShortShortMutablePair;
    static of(paramarg0: number, paramarg1: number): ShortShortPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortShortPair;
    first(arg0: number): ShortShortPair;
    firstShort(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortShortPair;
    key(arg0: number): ShortShortPair;
    keyShort(): number;
    left(arg0: number): ShortShortMutablePair;
    left(): number;
    left(arg0: number): ShortShortPair;
    left(arg0: number): ShortShortPair;
    leftShort(): number;
    right(arg0: number): ShortShortMutablePair;
    right(): number;
    right(arg0: number): ShortShortPair;
    right(arg0: number): ShortShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): ShortShortPair;
    second(arg0: number): ShortShortPair;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ShortShortPair;
    value(arg0: number): ShortShortPair;
    valueShort(): number;
}