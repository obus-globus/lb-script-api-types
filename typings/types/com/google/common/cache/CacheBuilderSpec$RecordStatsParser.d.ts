import type { CacheBuilderSpec$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheBuilderSpec$ValueParser } from '../../../../com/google/common/cache/CacheBuilderSpec$ValueParser.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CacheBuilderSpec$RecordStatsParser extends Object implements CacheBuilderSpec$ValueParser {
    private constructor()
    constructor(arg0: CacheBuilderSpec$1)
    parse(spec: CacheBuilderSpec, key: string, value: string): void;
}