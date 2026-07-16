import type { ByteCharPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteCharImmutablePair extends Object implements ByteCharPair, Serializable {
    static lexComparator(): (param0: ByteCharPair, param1: ByteCharPair) => number;
    static of(paramarg0: number, paramarg1: string): ByteCharImmutablePair;
    static of(paramarg0: number, paramarg1: string): ByteCharPair;
    constructor(arg0: number, arg1: string)
    // private left: number;
    // private right: string;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteCharPair;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteCharPair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteCharPair;
    leftByte(): number;
    right(): string;
    right(arg0: string): ByteCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): ByteCharPair;
    secondChar(): string;
    toString(): string;
    value(): string;
    value(arg0: string): ByteCharPair;
    valueChar(): string;
}