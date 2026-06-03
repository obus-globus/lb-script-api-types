import type { AbstractHasher } from '../../../../com/google/common/hash/AbstractHasher.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Murmur3_32HashFunction$Murmur3_32Hasher extends AbstractHasher {
    constructor(seed: number)
    // private buffer: number;
    // private h1: number;
    // private isDone: boolean;
    // private length: number;
    // private shift: number;
    hash(): HashCode;
    putByte(b: number): Hasher;
    putBytes(buffer: ByteBuffer): Hasher;
    putBytes(bytes: number[]): Hasher;
    putBytes(bytes: number[], off: number, len: number): Hasher;
    putChar(c: string): Hasher;
    putInt(i: number): Hasher;
    putLong(l: number): Hasher;
    putString(input: CharSequence, charset: Charset): Hasher;
    // private update(nBytes: number, update: number): void;
}