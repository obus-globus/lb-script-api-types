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
    // private holderSets: Map<TagKey<Object>, Object[]>;
    // private holders: Map<ResourceKey<Object>, Holder$Reference<Object>>;
    // private lookup: PlaceholderLookupProvider$UniversalLookup;
    createSerializationContext<V extends Object | number | string | boolean>(parent: DynamicOps<V>): RegistryOps<V>;
    createSwapper(): RegistryContextSwapper;
    get<T extends Object | number | string | boolean>(id: ResourceKey<T>): Optional<Holder$Reference<T>>;
    get<T extends Object | number | string | boolean>(id: TagKey<T>): Optional<T[]>;
    getOrThrow<T extends Object | number | string | boolean>(id: ResourceKey<T>): Holder$Reference<T>;
    getOrThrow<T extends Object | number | string | boolean>(id: TagKey<T>): T[];
    hasRegisteredPlaceholders(): boolean;
    lookup<T extends Object | number | string | boolean>(key: ResourceKey<T[]>): Optional<HolderGetter<T>>;
    lookupOrThrow<T extends Object | number | string | boolean>(key: ResourceKey<T[]>): HolderGetter<T>;
}