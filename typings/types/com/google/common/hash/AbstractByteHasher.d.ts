import type { AbstractHasher } from '../../../../com/google/common/hash/AbstractHasher.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export abstract class AbstractByteHasher extends AbstractHasher {
    constructor()
    // private scratch: ByteBuffer;
    putByte(b: number): Hasher;
    putBytes(bytes: ByteBuffer): Hasher;
    putBytes(bytes: number[]): Hasher;
    putBytes(bytes: number[], off: number, len: number): Hasher;
    putChar(c: string): Hasher;
    putInt(i: number): Hasher;
    putLong(l: number): Hasher;
    putShort(s: number): Hasher;
    // private scratch(): ByteBuffer;
    update(b: ByteBuffer): void;
    // private update(scratch: ByteBuffer, bytes: number): Hasher;
    update(b: number): void;
    update(b: number[]): void;
    update(b: number[], off: number, len: number): void;
}