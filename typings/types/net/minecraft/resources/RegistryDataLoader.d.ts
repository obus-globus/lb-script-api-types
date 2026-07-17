import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { RegistryAccess$Frozen } from '../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { RegistryDataLoader$NetworkedRegistryData } from '../../../net/minecraft/resources/RegistryDataLoader$NetworkedRegistryData.d.ts'
import type { RegistryDataLoader$RegistryData } from '../../../net/minecraft/resources/RegistryDataLoader$RegistryData.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Resource } from '../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceProvider } from '../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export class RegistryDataLoader extends Object {
    static DIMENSION_REGISTRIES: RegistryDataLoader$RegistryData<Object>[];
    static SYNCHRONIZED_REGISTRIES: RegistryDataLoader$RegistryData<Object>[];
    static WORLDGEN_REGISTRIES: RegistryDataLoader$RegistryData<Object>[];
    static load(paramentries: JavaMap<ResourceKey<Object[]>, RegistryDataLoader$NetworkedRegistryData>, paramknownDataSource: (param0: Identifier) => Optional<Resource>, paramcontextRegistries: HolderLookup$RegistryLookup<Object>[], paramregistriesToLoad: RegistryDataLoader$RegistryData<Object>[], paramexecutor: Executor): CompletableFuture<RegistryAccess$Frozen>;
    static load(paramresourceManager: ResourceManager, paramcontextRegistries: HolderLookup$RegistryLookup<Object>[], paramregistriesToLoad: RegistryDataLoader$RegistryData<Object>[], paramexecutor: Executor): CompletableFuture<RegistryAccess$Frozen>;
    constructor()
}