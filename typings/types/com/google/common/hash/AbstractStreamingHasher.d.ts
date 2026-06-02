import type { AbstractHasher } from '../../../../com/google/common/hash/AbstractHasher.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export abstract class AbstractStreamingHasher extends AbstractHasher {
    constructor(chunkSize: number)
    constructor(chunkSize: number, bufferSize: number)
    // private buffer: ByteBuffer;
    // private bufferSize: number;
    // private chunkSize: number;
    hash(): HashCode;
    makeHash(): HashCode;
    // private munch(): void;
    // private munchIfFull(): void;
    process(bb: ByteBuffer): void;
    processRemaining(bb: ByteBuffer): void;
    putByte(b: number): Hasher;
    putBytes(readBuffer: ByteBuffer): Hasher;
    putBytes(bytes: number[], off: number, len: number): Hasher;
    // private putBytesInternal(readBuffer: ByteBuffer): Hasher;
    putChar(c: string): Hasher;
    putInt(i: number): Hasher;
    putLong(l: number): Hasher;
    putShort(s: number): Hasher;
}