import type { ShortIntPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortIntPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortIntMutablePair extends Object implements ShortIntPair, Serializable {
    static of(paramarg0: number, paramarg1: number): ShortIntMutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortIntPair;
    firstShort(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortIntPair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortIntPair;
    left(arg0: number): ShortIntMutablePair;
    leftShort(): number;
    right(): number;
    right(arg0: number): ShortIntPair;
    right(arg0: number): ShortIntMutablePair;
    rightInt(): number;
    second(): number;
    second(arg0: number): ShortIntPair;
    secondInt(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ShortIntPair;
    valueInt(): number;
}