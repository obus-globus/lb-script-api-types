import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
export interface MappedRegistryTagSet2Accessor<T extends unknown> extends Object{
    fabric_getTagMap(): JavaMap<TagKey<T>, T[]>;
    fabric_setTagMap(arg0: JavaMap<TagKey<T>, T[]>): void;
}