import type { AbstractHashFunction } from '../../../../com/google/common/hash/AbstractHashFunction.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Murmur3_32HashFunction extends AbstractHashFunction implements Serializable {
    constructor(seed: number, supplementaryPlaneFix: boolean)
    // private seed: number;
    // private supplementaryPlaneFix: boolean;
    bits(): number;
    equals(object: Object | null): boolean;
    hashBytes(input: ByteBuffer): HashCode;
    hashBytes(input: number[]): HashCode;
    hashBytes(input: number[], off: number, len: number): HashCode;
    hashCode(): number;
    hashInt(input: number): HashCode;
    hashLong(input: number): HashCode;
    hashString(input: CharSequence, charset: Charset): HashCode;
    hashUnencodedChars(input: CharSequence): HashCode;
    newHasher(): Hasher;
    newHasher(expectedInputSize: number): Hasher;
    toString(): string;
}