import type { HashCode } from '../../../com/google/common/hash/HashCode.d.ts'
import type { Hasher } from '../../../com/google/common/hash/Hasher.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { AbstractListBuilder } from '../../../net/minecraft/util/AbstractListBuilder.d.ts'
export class HashOps$ListHashBuilder extends AbstractListBuilder<HashCode, Hasher> {
    constructor(null_: HashOps$ListHashBuilder)
    append(hasher: Hasher, value: HashCode): Hasher;
    build(hasher: Hasher, prefix: HashCode): DataResult<HashCode>;
    initBuilder(): Hasher;
}