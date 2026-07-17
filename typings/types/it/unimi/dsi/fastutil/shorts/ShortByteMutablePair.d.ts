import type { ShortBytePair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortByteMutablePair extends Object implements ShortBytePair, Serializable {
    static of(paramarg0: number, paramarg1: number): ShortByteMutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortBytePair;
    firstShort(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortBytePair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortBytePair;
    left(arg0: number): ShortByteMutablePair;
    leftShort(): number;
    right(): number;
    right(arg0: number): ShortBytePair;
    right(arg0: number): ShortByteMutablePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): ShortBytePair;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ShortBytePair;
    valueByte(): number;
}