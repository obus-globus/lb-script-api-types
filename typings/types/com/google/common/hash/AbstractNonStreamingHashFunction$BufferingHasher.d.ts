import type { AbstractHasher } from '../../../../com/google/common/hash/AbstractHasher.d.ts'
import type { AbstractNonStreamingHashFunction$ExposedByteArrayOutputStream } from '../../../../com/google/common/hash/AbstractNonStreamingHashFunction$ExposedByteArrayOutputStream.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class AbstractNonStreamingHashFunction$BufferingHasher extends AbstractHasher {
    constructor(null_: AbstractNonStreamingHashFunction$BufferingHasher, expectedInputSize: number)
    // private stream: AbstractNonStreamingHashFunction$ExposedByteArrayOutputStream;
    hash(): HashCode;
    putByte(b: number): Hasher;
    putBytes(bytes: ByteBuffer): Hasher;
    putBytes(bytes: number[], off: number, len: number): Hasher;
}