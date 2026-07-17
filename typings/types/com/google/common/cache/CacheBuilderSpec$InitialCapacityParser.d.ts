import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheBuilderSpec$IntegerParser } from '../../../../com/google/common/cache/CacheBuilderSpec$IntegerParser.d.ts'
export class CacheBuilderSpec$InitialCapacityParser extends CacheBuilderSpec$IntegerParser {
    private constructor()
    parseInteger(spec: CacheBuilderSpec, value: number): void;
}