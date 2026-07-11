import type { AbstractHashFunction } from '../../../../com/google/common/hash/AbstractHashFunction.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { HashFunction } from '../../../../com/google/common/hash/HashFunction.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
export abstract class AbstractCompositeHashFunction extends AbstractHashFunction {
    constructor(...functions: HashFunction[])
    // private functions: HashFunction[];
    // private fromHashers(hashers: Hasher[]): Hasher;
    makeHash(hashers: Hasher[]): HashCode;
    newHasher(): Hasher;
    newHasher(expectedInputSize: number): Hasher;
}