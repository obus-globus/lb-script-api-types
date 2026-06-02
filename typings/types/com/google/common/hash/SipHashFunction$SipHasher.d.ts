import type { AbstractStreamingHasher } from '../../../../com/google/common/hash/AbstractStreamingHasher.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class SipHashFunction$SipHasher extends AbstractStreamingHasher {
    constructor(c: number, d: number, k0: number, k1: number)
    // private b: number;
    // private c: number;
    // private d: number;
    // private finalM: number;
    // private v0: number;
    // private v1: number;
    // private v2: number;
    // private v3: number;
    makeHash(): HashCode;
    process(buffer: ByteBuffer): void;
    // private processM(m: number): void;
    processRemaining(buffer: ByteBuffer): void;
    // private sipRound(iterations: number): void;
}