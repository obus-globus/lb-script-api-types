import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
export interface TagAliasEnabledRegistryLookup extends Object{
    fabric_loadTagAliases(arg0: JavaMap<TagKey<Object>, TagKey<Object>[]>): void;
}