import type { CharFloatPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharFloatPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharFloatMutablePair extends Object implements CharFloatPair, Serializable {
    static lexComparator(): (param0: CharFloatPair) => kotlin.Boolean;
    static of(paramarg0: string, paramarg1: number): CharFloatMutablePair;
    static of(paramarg0: string, paramarg1: number): CharFloatPair;
    constructor(arg0: string, arg1: number)
    // private left: string;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharFloatPair;
    firstChar(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharFloatPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharFloatPair;
    left(arg0: string): CharFloatMutablePair;
    leftChar(): string;
    right(): number;
    right(arg0: number): CharFloatPair;
    right(arg0: number): CharFloatMutablePair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): CharFloatPair;
    secondFloat(): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharFloatPair;
    valueFloat(): number;
}