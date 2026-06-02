import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheBuilderSpec$DurationParser } from '../../../../com/google/common/cache/CacheBuilderSpec$DurationParser.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
export class CacheBuilderSpec$AccessDurationParser extends CacheBuilderSpec$DurationParser {
    private constructor()
    parseDuration(spec: CacheBuilderSpec, duration: number, unit: TimeUnit): void;
}