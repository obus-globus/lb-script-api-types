import type { CacheBuilderSpec$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheBuilderSpec$IntegerParser } from '../../../../com/google/common/cache/CacheBuilderSpec$IntegerParser.d.ts'
export class CacheBuilderSpec$InitialCapacityParser extends CacheBuilderSpec$IntegerParser {
    private constructor()
    constructor(arg0: CacheBuilderSpec$1)
    parseInteger(spec: CacheBuilderSpec, value: number): void;
}