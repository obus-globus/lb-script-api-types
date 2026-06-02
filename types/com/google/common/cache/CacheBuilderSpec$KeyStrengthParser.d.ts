import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { CacheBuilderSpec$ValueParser } from '../../../../com/google/common/cache/CacheBuilderSpec$ValueParser.d.ts'
import type { LocalCache$Strength } from '../../../../com/google/common/cache/LocalCache$Strength.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CacheBuilderSpec$KeyStrengthParser extends Object implements CacheBuilderSpec$ValueParser {
    constructor(strength: LocalCache$Strength)
    // private strength: LocalCache$Strength;
    parse(spec: CacheBuilderSpec, key: string, value: string): void;
}