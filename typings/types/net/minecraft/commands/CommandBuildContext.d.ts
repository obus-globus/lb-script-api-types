import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { RegistryOps } from '../../../net/minecraft/resources/RegistryOps.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { FeatureFlagSet } from '../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export interface CommandBuildContext extends Object, HolderLookup$Provider{
    allRegistriesLifecycle(): Lifecycle;
    createSerializationContext<V extends Object | number | string | boolean>(parent: DynamicOps<V>): RegistryOps<V>;
    enabledFeatures(): FeatureFlagSet;
    listRegistries(): Stream<HolderLookup$RegistryLookup<Object>>;
    lookupOrThrow<T extends Object | number | string | boolean>(key: ResourceKey<T[]>): HolderLookup$RegistryLookup<T>;
}