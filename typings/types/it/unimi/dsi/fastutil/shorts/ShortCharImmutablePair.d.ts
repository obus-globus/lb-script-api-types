import type { ShortCharPair } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortCharImmutablePair extends Object implements ShortCharPair, Serializable {
    static lexComparator(): (param0: ShortCharPair, param1: ShortCharPair) => number;
    static of(paramarg0: number, paramarg1: string): ShortCharImmutablePair;
    static of(paramarg0: number, paramarg1: string): ShortCharPair;
    constructor(arg0: number, arg1: string)
    // private left: number;
    // private right: string;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ShortCharPair;
    firstShort(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ShortCharPair;
    keyShort(): number;
    left(): number;
    left(arg0: number): ShortCharPair;
    leftShort(): number;
    right(): string;
    right(arg0: string): ShortCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): ShortCharPair;
    secondChar(): string;
    toString(): string;
    value(): string;
    value(arg0: string): ShortCharPair;
    valueChar(): string;
}