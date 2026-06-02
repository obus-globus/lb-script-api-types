import type { AbstractNonStreamingHashFunction } from '../../../../com/google/common/hash/AbstractNonStreamingHashFunction.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
export class Fingerprint2011 extends AbstractNonStreamingHashFunction {
    constructor()
    bits(): number;
    hashBytes(input: number[], off: number, len: number): HashCode;
    toString(): string;
}