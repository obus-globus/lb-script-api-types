import type { AbstractStreamingHasher } from '../../../../com/google/common/hash/AbstractStreamingHasher.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class Murmur3_128HashFunction$Murmur3_128Hasher extends AbstractStreamingHasher {
    constructor(seed: number)
    // private h1: number;
    // private h2: number;
    // private length: number;
    // private bmix64(k1: number, k2: number): void;
    makeHash(): HashCode;
    process(bb: ByteBuffer): void;
    processRemaining(bb: ByteBuffer): void;
}