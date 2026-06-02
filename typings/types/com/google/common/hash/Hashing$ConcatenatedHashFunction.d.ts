import type { AbstractCompositeHashFunction } from '../../../../com/google/common/hash/AbstractCompositeHashFunction.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { HashFunction } from '../../../../com/google/common/hash/HashFunction.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Hashing$ConcatenatedHashFunction extends AbstractCompositeHashFunction {
    private constructor(functions: HashFunction[])
    bits(): number;
    equals(object: Object | null): boolean;
    hashCode(): number;
    makeHash(hashers: Hasher[]): HashCode;
}