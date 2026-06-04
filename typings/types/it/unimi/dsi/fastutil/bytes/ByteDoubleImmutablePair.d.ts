import type { ByteDoublePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteDoubleImmutablePair extends Object implements ByteDoublePair, Serializable {
    static lexComparator(): (param0: ByteDoublePair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): ByteDoubleImmutablePair;
    static of(paramarg0: number, paramarg1: number): ByteDoublePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): ByteDoublePair;
    firstByte(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): ByteDoublePair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteDoublePair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): ByteDoublePair;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): ByteDoublePair;
    valueDouble(): number;
}