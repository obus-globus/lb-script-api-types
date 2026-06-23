import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderGetter } from '../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderGetter$Provider } from '../../../net/minecraft/core/HolderGetter$Provider.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { RegistryOps } from '../../../net/minecraft/resources/RegistryOps.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
export interface HolderLookup$Provider extends Object, HolderGetter$Provider{
    allRegistriesLifecycle(): Lifecycle;
    createSerializationContext<V extends unknown>(parent: DynamicOps<V>): RegistryOps<V>;
    get<T extends unknown>(id: ResourceKey<T>): Optional<Holder$Reference<T>>;
    get<T extends unknown>(id: TagKey<T>): Optional<T[]>;
    getOrThrow<T extends unknown>(id: ResourceKey<T>): Holder$Reference<T>;
    getOrThrow<T extends unknown>(id: TagKey<T>): T[];
    listRegistries(): Stream<HolderLookup$RegistryLookup<Object>>;
    listRegistryKeys(): Stream<ResourceKey<(Object | null)[]>>;
    lookup<T extends unknown>(key: ResourceKey<T[]>): Optional<HolderLookup$RegistryLookup<T>>;
    lookupOrThrow<T extends unknown>(key: ResourceKey<T[]>): HolderGetter<T>;
    lookupOrThrow<T extends unknown>(key: ResourceKey<T[]>): HolderLookup$RegistryLookup<T>;
}