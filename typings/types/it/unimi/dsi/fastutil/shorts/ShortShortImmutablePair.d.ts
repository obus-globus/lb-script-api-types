import type { ShortShortPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortShortImmutablePair extends Object implements ShortShortPair, Serializable {
    static of(paramarg0: number, paramarg1: number): ShortShortImmutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortShortPair;
    firstShort(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortShortPair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortShortPair;
    leftShort(): number;
    right(): number;
    right(arg0: number): ShortShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): ShortShortPair;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ShortShortPair;
    valueShort(): number;
}