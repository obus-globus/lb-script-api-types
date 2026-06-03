import type { AbstractHashFunction } from '../../../../com/google/common/hash/AbstractHashFunction.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SipHashFunction extends AbstractHashFunction implements Serializable {
    constructor(c: number, d: number, k0: number, k1: number)
    // private c: number;
    // private d: number;
    // private k0: number;
    // private k1: number;
    bits(): number;
    equals(object: Object | null): boolean;
    hashCode(): number;
    newHasher(): Hasher;
    newHasher(expectedInputSize: number): Hasher;
    toString(): string;
}