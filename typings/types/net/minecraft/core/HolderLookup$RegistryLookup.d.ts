import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup } from '../../../net/minecraft/core/HolderLookup.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
import type { FeatureFlagSet } from '../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export interface HolderLookup$RegistryLookup<T extends Object | number | string | boolean> extends Object, HolderLookup<T>, HolderOwner<T> {
    canSerializeIn(context: HolderOwner<T>): boolean;
    filterElements(filter: (param0: T) => kotlin.Boolean): HolderLookup$RegistryLookup<T>;
    filterFeatures(enabledFeatures: FeatureFlagSet): HolderLookup$RegistryLookup<T>;
    key(): ResourceKey<T[]>;
    listElementIds(): Stream<ResourceKey<T>>;
    listTagIds(): Stream<TagKey<T>>;
    registryLifecycle(): Lifecycle;
}