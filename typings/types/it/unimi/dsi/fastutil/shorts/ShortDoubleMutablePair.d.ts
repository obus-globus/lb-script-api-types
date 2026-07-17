import type { ShortDoublePair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortDoubleMutablePair extends Object implements ShortDoublePair, Serializable {
    static of(paramarg0: number, paramarg1: number): ShortDoubleMutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortDoublePair;
    firstShort(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortDoublePair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortDoublePair;
    left(arg0: number): ShortDoubleMutablePair;
    leftShort(): number;
    right(): number;
    right(arg0: number): ShortDoublePair;
    right(arg0: number): ShortDoubleMutablePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): ShortDoublePair;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ShortDoublePair;
    valueDouble(): number;
}