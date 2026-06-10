import type { CharLongPair } from '../../../../../it/unimi/dsi/fastutil/chars/CharLongPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharLongImmutablePair extends Object implements CharLongPair, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: string, paramarg1: number): CharLongImmutablePair;
    static of(paramarg0: string, paramarg1: number): CharLongPair;
    constructor(arg0: string, arg1: number)
    // private left: string;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): string;
    first(arg0: string): CharLongPair;
    firstChar(): string;
    hashCode(): number;
    key(): string;
    key(arg0: string): CharLongPair;
    keyChar(): string;
    left(): string;
    left(arg0: string): CharLongPair;
    leftChar(): string;
    right(): number;
    right(arg0: number): CharLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): CharLongPair;
    secondLong(): number;
    toString(): string;
    value(): number;
    value(arg0: number): CharLongPair;
    valueLong(): number;
}