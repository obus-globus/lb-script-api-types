import type { ByteByteImmutablePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteByteImmutablePair.d.ts'
import type { ByteByteSortedPair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteByteSortedPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteByteImmutableSortedPair extends ByteByteImmutablePair implements ByteByteSortedPair, Serializable {
    static of(paramarg0: number, paramarg1: number): ByteByteImmutablePair;
    static of(paramarg0: number, paramarg1: number): ByteByteImmutableSortedPair;
    private constructor(arg0: number, arg1: number)
    contains(arg0: Object): boolean;
    contains(arg0: number): boolean;
    equals(arg0: Object | null): boolean;
    toString(): string;
}