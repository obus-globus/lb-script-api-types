import type { Funnel } from '../../../../com/google/common/hash/Funnel.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { HashFunction } from '../../../../com/google/common/hash/HashFunction.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export abstract class AbstractHashFunction extends Object implements HashFunction {
    constructor()
    bits(): number;
    hashBytes(input: ByteBuffer): HashCode;
    hashBytes(input: number[]): HashCode;
    hashBytes(input: number[], off: number, len: number): HashCode;
    hashInt(input: number): HashCode;
    hashLong(input: number): HashCode;
    hashObject<T extends unknown>(instance: T, funnel: Funnel<T>): HashCode;
    hashString(input: CharSequence, charset: Charset): HashCode;
    hashUnencodedChars(input: CharSequence): HashCode;
    newHasher(expectedInputSize: number): Hasher;
    newHasher(): Hasher;
}