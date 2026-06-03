import type { AbstractHashFunction } from '../../../../com/google/common/hash/AbstractHashFunction.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Murmur3_128HashFunction extends AbstractHashFunction implements Serializable {
    constructor(seed: number)
    // private seed: number;
    bits(): number;
    equals(object: Object | null): boolean;
    hashCode(): number;
    newHasher(): Hasher;
    newHasher(expectedInputSize: number): Hasher;
    toString(): string;
}