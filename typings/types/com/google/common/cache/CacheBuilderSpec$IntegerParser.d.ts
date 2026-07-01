import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheBuilderSpec$ValueParser } from '../../../../com/google/common/cache/CacheBuilderSpec$ValueParser.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CacheBuilderSpec$IntegerParser extends Object implements CacheBuilderSpec$ValueParser {
    constructor(arg0: any)
    parse(spec: CacheBuilderSpec, key: string, value: string): void;
    parseInteger(spec: CacheBuilderSpec, value: number): void;
}