import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
export interface MappedRegistryTagSet2Accessor<T extends Object | number | string | boolean> extends Object{
    fabric_getTagMap(): Map<TagKey<T>, T[]>;
    fabric_setTagMap(arg0: Map<TagKey<T>, T[]>): void;
}