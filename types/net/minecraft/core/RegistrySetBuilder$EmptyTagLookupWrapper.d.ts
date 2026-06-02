import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { HolderLookup$RegistryLookup$Delegate } from '../../../net/minecraft/core/HolderLookup$RegistryLookup$Delegate.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
import type { RegistrySetBuilder$EmptyTagRegistryLookup } from '../../../net/minecraft/core/RegistrySetBuilder$EmptyTagRegistryLookup.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
export class RegistrySetBuilder$EmptyTagLookupWrapper<T extends Object | number | string | boolean> extends RegistrySetBuilder$EmptyTagRegistryLookup<T> implements HolderLookup$RegistryLookup$Delegate<T> {
    private constructor(owner: HolderOwner<T>, parent: HolderLookup$RegistryLookup<T>)
    // private parent: HolderLookup$RegistryLookup<T>;
    get(id: ResourceKey<T>): Optional<Holder$Reference<T>>;
    get(id: TagKey<T>): Optional<T[]>;
    key(): ResourceKey<T[]>;
    listElements(): Stream<Holder$Reference<T>>;
    listTags(): Stream<T[]>;
    parent(): HolderLookup$RegistryLookup<T>;
    registryLifecycle(): Lifecycle;
}