import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { RegistryAccess$Frozen } from '../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { RegistryAccess$RegistryEntry } from '../../../net/minecraft/core/RegistryAccess$RegistryEntry.d.ts'
import type { RegistryOps } from '../../../net/minecraft/resources/RegistryOps.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export interface RegistryAccess extends Object, HolderLookup$Provider{
    allRegistriesLifecycle(): Lifecycle;
    createSerializationContext(parent: DynamicOps<V>): RegistryOps<V>;
    freeze(): RegistryAccess$Frozen;
    listRegistries(): Stream<HolderLookup$RegistryLookup<Object>>;
    listRegistryKeys(): Stream<ResourceKey<(Object | null)[]>>;
    lookup(registryKey: ResourceKey<E[]>): Optional<E[]>;
    lookupOrThrow(key: ResourceKey<T[]>): HolderLookup$RegistryLookup<T>;
    lookupOrThrow(name: ResourceKey<E[]>): E[];
    registries(): Stream<RegistryAccess$RegistryEntry<Object>>;
}