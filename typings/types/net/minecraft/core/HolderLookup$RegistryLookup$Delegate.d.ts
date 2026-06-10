import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
import type { FeatureFlagSet } from '../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export interface HolderLookup$RegistryLookup$Delegate<T extends Object | number | string | boolean> extends Object, HolderLookup$RegistryLookup<T> {
    filterElements(filter: (param0: T) => boolean): HolderLookup$RegistryLookup<T>;
    filterFeatures(enabledFeatures: FeatureFlagSet): HolderLookup$RegistryLookup<T>;
    get(id: ResourceKey<T>): Optional<Holder$Reference<T>>;
    get(id: TagKey<T>): Optional<T[]>;
    key(): ResourceKey<T[]>;
    listElements(): Stream<Holder$Reference<T>>;
    listTags(): Stream<T[]>;
    parent(): HolderLookup$RegistryLookup<T>;
    registryLifecycle(): Lifecycle;
}