import type { CharBytePair } from '../../../../../it/unimi/dsi/fastutil/chars/CharBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharByteImmutablePair extends Object implements CharBytePair, Serializable {
    static lexComparator(): (param0: CharBytePair) => kotlin.Boolean;
    static of(paramarg0: string, paramarg1: number): CharByteImmutablePair;
    static of(paramarg0: string, paramarg1: number): CharBytePair;
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
    leftChar(): string;
    right(): number;
    right(arg0: number): CharBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): CharBytePair;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharBytePair;
    valueByte(): number;
}