import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheBuilderSpec$IntegerParser } from '../../../../com/google/common/cache/CacheBuilderSpec$IntegerParser.d.ts'
export class CacheBuilderSpec$ConcurrencyLevelParser extends CacheBuilderSpec$IntegerParser {
    constructor(arg0: any)
    parseInteger(spec: CacheBuilderSpec, value: number): void;
}