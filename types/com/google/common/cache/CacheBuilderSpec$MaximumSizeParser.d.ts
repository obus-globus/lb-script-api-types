import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheBuilderSpec$LongParser } from '../../../../com/google/common/cache/CacheBuilderSpec$LongParser.d.ts'
export class CacheBuilderSpec$MaximumSizeParser extends CacheBuilderSpec$LongParser {
    private constructor()
    parseLong(spec: CacheBuilderSpec, value: number): void;
}