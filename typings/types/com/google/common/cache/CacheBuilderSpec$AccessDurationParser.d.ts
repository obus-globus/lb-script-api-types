import type { CacheBuilderSpec$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheBuilderSpec$DurationParser } from '../../../../com/google/common/cache/CacheBuilderSpec$DurationParser.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
export class CacheBuilderSpec$AccessDurationParser extends CacheBuilderSpec$DurationParser {
    private constructor()
    constructor(arg0: CacheBuilderSpec$1)
    parseDuration(spec: CacheBuilderSpec, duration: number, unit: TimeUnit): void;
}