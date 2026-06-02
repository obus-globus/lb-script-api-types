import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheBuilderSpec$ValueParser } from '../../../../com/google/common/cache/CacheBuilderSpec$ValueParser.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CacheBuilderSpec$DurationParser extends Object implements CacheBuilderSpec$ValueParser {
    constructor()
    parse(spec: CacheBuilderSpec, key: string, value: string): void;
    parseDuration(spec: CacheBuilderSpec, duration: number, unit: TimeUnit): void;
}