import type { CharIntPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharIntPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharIntMutablePair extends Object implements CharIntPair, Serializable {
    static lexComparator(): (param0: CharIntPair, param1: CharIntPair) => number;
    static of(paramarg0: string, paramarg1: number): CharIntMutablePair;
    static of(paramarg0: string, paramarg1: number): CharIntPair;
    constructor(arg0: string, arg1: number)
    // private left: string;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharIntPair;
    firstChar(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharIntPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharIntPair;
    left(arg0: string): CharIntMutablePair;
    leftChar(): string;
    right(): number;
    right(arg0: number): CharIntPair;
    right(arg0: number): CharIntMutablePair;
    rightInt(): number;
    second(): number;
    second(arg0: number): CharIntPair;
    secondInt(): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharIntPair;
    valueInt(): number;
}