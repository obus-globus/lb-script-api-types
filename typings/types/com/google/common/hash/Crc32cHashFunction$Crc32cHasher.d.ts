import type { AbstractStreamingHasher } from '../../../../com/google/common/hash/AbstractStreamingHasher.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class Crc32cHashFunction$Crc32cHasher extends AbstractStreamingHasher {
    constructor()
    // private crc0: number;
    // private crc1: number;
    // private crc2: number;
    // private crc3: number;
    // private finished: boolean;
    makeHash(): HashCode;
    process(bb: ByteBuffer): void;
    processRemaining(bb: ByteBuffer): void;
}