import type { AbstractNonStreamingHashFunction } from '../../../../com/google/common/hash/AbstractNonStreamingHashFunction.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class Fingerprint2011 extends AbstractNonStreamingHashFunction {
    constructor()
    bits(): number;
    hashBytes(input: ByteBuffer): HashCode;
    hashBytes(input: number[]): HashCode;
    hashBytes(input: number[], off: number, len: number): HashCode;
    toString(): string;
}