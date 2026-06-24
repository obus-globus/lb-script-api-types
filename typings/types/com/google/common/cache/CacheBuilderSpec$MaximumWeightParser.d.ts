import type { CacheBuilderSpec$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheBuilderSpec$LongParser } from '../../../../com/google/common/cache/CacheBuilderSpec$LongParser.d.ts'
export class CacheBuilderSpec$MaximumWeightParser extends CacheBuilderSpec$LongParser {
    private constructor()
    constructor(arg0: CacheBuilderSpec$1)
    parseLong(spec: CacheBuilderSpec, value: number): void;
}