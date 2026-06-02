import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
export interface TagAliasEnabledRegistryLookup extends Object{
    fabric_loadTagAliases(arg0: Map<TagKey<Object>, TagKey<Object>[]>): void;
}