import type { JavaMap } from '../../../JavaMap.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderGetter } from '../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderGetter$Provider } from '../../../net/minecraft/core/HolderGetter$Provider.d.ts'
import type { HolderLookup$Provider } from '../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { RegistryOps } from '../../../net/minecraft/resources/RegistryOps.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
import type { PlaceholderLookupProvider$UniversalLookup } from '../../../net/minecraft/util/PlaceholderLookupProvider$UniversalLookup.d.ts'
import type { RegistryContextSwapper } from '../../../net/minecraft/util/RegistryContextSwapper.d.ts'
export class PlaceholderLookupProvider extends Object implements HolderGetter$Provider {
    constructor(context: HolderLookup$Provider)
    // private context: HolderLookup$Provider;
    // private holderSets: JavaMap<TagKey<Object>, Object[]>;
    // private holders: JavaMap<ResourceKey<Object>, Holder$Reference<Object>>;
    // private lookup: PlaceholderLookupProvider$UniversalLookup;
    createSerializationContext<V extends unknown>(parent: DynamicOps<V>): RegistryOps<V>;
    createSwapper(): RegistryContextSwapper;
    get<T extends unknown>(id: ResourceKey<T>): Optional<Holder$Reference<T>>;
    get<T extends unknown>(id: TagKey<T>): Optional<T[]>;
    getOrThrow<T extends unknown>(id: ResourceKey<T>): Holder$Reference<T>;
    getOrThrow<T extends unknown>(id: TagKey<T>): T[];
    hasRegisteredPlaceholders(): boolean;
    lookup<T extends unknown>(key: ResourceKey<T[]>): Optional<HolderGetter<T>>;
    lookupOrThrow<T extends unknown>(key: ResourceKey<T[]>): HolderGetter<T>;
}