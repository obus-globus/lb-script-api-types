import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheBuilderSpec$LongParser } from '../../../../com/google/common/cache/CacheBuilderSpec$LongParser.d.ts'
export class CacheBuilderSpec$MaximumWeightParser extends CacheBuilderSpec$LongParser {
    constructor(arg0: any)
    parseLong(spec: CacheBuilderSpec, value: number): void;
}