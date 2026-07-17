import type { CharBytePair } from '../../../../../it/unimi/dsi/fastutil/chars/CharBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharByteMutablePair extends Object implements CharBytePair, Serializable {
    static of(paramarg0: string, paramarg1: number): CharByteMutablePair;
    constructor(arg0: string, arg1: number)
    // private left: string;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharBytePair;
    firstChar(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharBytePair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharBytePair;
    left(arg0: string): CharByteMutablePair;
    leftChar(): string;
    right(): number;
    right(arg0: number): CharBytePair;
    right(arg0: number): CharByteMutablePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): CharBytePair;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharBytePair;
    valueByte(): number;
}