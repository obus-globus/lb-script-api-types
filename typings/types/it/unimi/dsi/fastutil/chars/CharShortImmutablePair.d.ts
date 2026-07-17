import type { CharShortPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharShortPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharShortImmutablePair extends Object implements CharShortPair, Serializable {
    static of(paramarg0: string, paramarg1: number): CharShortImmutablePair;
    constructor(arg0: string, arg1: number)
    // private left: string;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharShortPair;
    firstChar(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharShortPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharShortPair;
    leftChar(): string;
    right(): number;
    right(arg0: number): CharShortPair;
    rightShort(): number;
    second(): number;
    second(arg0: number): CharShortPair;
    secondShort(): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharShortPair;
    valueShort(): number;
}