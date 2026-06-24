import type { AbstractHasher } from '../../../../com/google/common/hash/AbstractHasher.d.ts'
import type { AbstractNonStreamingHashFunction } from '../../../../com/google/common/hash/AbstractNonStreamingHashFunction.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class AbstractNonStreamingHashFunction$ByteBufferHasher extends AbstractHasher {
    constructor(null_: AbstractNonStreamingHashFunction, expectedInputSize: number)
    // private buffer: ByteBuffer;
    // private ensureCapacity(needed: number): void;
    hash(): HashCode;
    putByte(b: number): Hasher;
    putBytes(bytes: ByteBuffer): Hasher;
    putBytes(bytes: number[]): Hasher;
    putBytes(bytes: number[], off: number, len: number): Hasher;
    putChar(c: string): Hasher;
    putInt(i: number): Hasher;
    putLong(l: number): Hasher;
    putShort(s: number): Hasher;
    putUnencodedChars(charSequence: CharSequence): Hasher;
}