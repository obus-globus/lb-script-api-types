import type { CacheBuilderSpec } from '../../../../com/google/common/cache/CacheBuilderSpec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CacheBuilderSpec$ValueParser extends Object{
    parse(spec: CacheBuilderSpec, key: string, value: string): void;
}