import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricDynamicRegistryProvider$RegistryEntries } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricDynamicRegistryProvider$RegistryEntries.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderGetter } from '../../../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../../../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ConfiguredWorldCarver } from '../../../../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
import type { PlacedFeature } from '../../../../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
export class FabricDynamicRegistryProvider$Entries extends Object {
    constructor(arg0: HolderLookup$Provider, arg1: string)
    // private modId: string;
    // private queuedEntries: Map<Identifier, FabricDynamicRegistryProvider$RegistryEntries<Object>>;
    // private registries: HolderLookup$Provider;
    add<T extends Object | number | string | boolean>(arg0: Holder$Reference<T>): void;
    add<T extends Object | number | string | boolean>(arg0: Holder$Reference<T>, arg1: ResourceCondition[]): void;
    add<T extends Object | number | string | boolean>(arg0: HolderLookup$RegistryLookup<T>, arg1: ResourceKey<T>): Holder<T>;
    add<T extends Object | number | string | boolean>(arg0: HolderLookup$RegistryLookup<T>, arg1: ResourceKey<T>, arg2: ResourceCondition[]): Holder<T>;
    add<T extends Object | number | string | boolean>(arg0: ResourceKey<T>, arg1: T): Holder<T>;
    add<T extends Object | number | string | boolean>(arg0: ResourceKey<T>, arg1: T, arg2: ResourceCondition[]): Holder<T>;
    addAll<T extends Object | number | string | boolean>(arg0: HolderLookup$RegistryLookup<T>): Holder<T>[];
    configuredCarvers(): HolderGetter<ConfiguredWorldCarver<Object>>;
    getLookup<T extends Object | number | string | boolean>(arg0: ResourceKey<T[]>): HolderGetter<T>;
    getLookups(): HolderLookup$Provider;
    getQueuedEntries<T extends Object | number | string | boolean>(arg0: ResourceKey<T>): FabricDynamicRegistryProvider$RegistryEntries<T>;
    placedFeatures(): HolderGetter<PlacedFeature>;
    ref<T extends Object | number | string | boolean>(arg0: ResourceKey<T>): Holder<T>;
}