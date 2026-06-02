import type { AbstractHashFunction } from '../../../../com/google/common/hash/AbstractHashFunction.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
export class Crc32cHashFunction extends AbstractHashFunction {
    constructor()
    bits(): number;
    newHasher(): Hasher;
    toString(): string;
}