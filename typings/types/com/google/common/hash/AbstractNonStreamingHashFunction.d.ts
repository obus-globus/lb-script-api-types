import type { AbstractHashFunction } from '../../../../com/google/common/hash/AbstractHashFunction.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class AbstractNonStreamingHashFunction extends AbstractHashFunction {
    constructor()
    hashBytes(input: ByteBuffer): HashCode;
    hashBytes(input: number[]): HashCode;
    hashBytes(input: number[], off: number, len: number): HashCode;
    hashInt(input: number): HashCode;
    hashLong(input: number): HashCode;
    hashString(input: CharSequence, charset: Charset): HashCode;
    hashUnencodedChars(input: CharSequence): HashCode;
    newHasher(): Hasher;
    newHasher(expectedInputSize: number): Hasher;
}