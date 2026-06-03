import type { HashCode } from '../../../com/google/common/hash/HashCode.d.ts'
import type { Pair } from '../../../com/mojang/datafixers/util/Pair.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { RecordBuilder$AbstractUniversalBuilder } from '../../../com/mojang/serialization/RecordBuilder$AbstractUniversalBuilder.d.ts'
export class HashOps$MapHashBuilder extends RecordBuilder$AbstractUniversalBuilder<HashCode, Pair<HashCode, HashCode>[]> {
    constructor(null_: HashOps$MapHashBuilder)
    append(key: HashCode, value: HashCode, builder: Pair<HashCode, HashCode>[]): Pair<HashCode, HashCode>[];
    build(arg0: HashCode): DataResult<HashCode>;
    build(arg0: DataResult<HashCode>): DataResult<HashCode>;
    build(builder: Pair<HashCode, HashCode>[], prefix: HashCode): DataResult<HashCode>;
    initBuilder(): Pair<HashCode, HashCode>[];
}