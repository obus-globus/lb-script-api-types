import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
import type { RegistrySetBuilder$EmptyTagLookup } from '../../../net/minecraft/core/RegistrySetBuilder$EmptyTagLookup.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
export class RegistrySetBuilder$UniversalLookup extends RegistrySetBuilder$EmptyTagLookup<Object> {
    constructor(owner: HolderOwner<Object>)
    // private holders: Map<ResourceKey<Object>, Holder$Reference<Object>>;
    get(id: ResourceKey<Object>): Optional<Holder$Reference<Object>>;
    get(id: TagKey<Object>): Optional<Object[]>;
    // private getOrCreate(id: ResourceKey<T>): Holder$Reference<T>;
}