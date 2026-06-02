import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistryAccess$Frozen } from '../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { RegistryDataLoader$NetworkedRegistryData } from '../../../net/minecraft/resources/RegistryDataLoader$NetworkedRegistryData.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceProvider } from '../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export class RegistryDataLoader extends Object {
    static DIMENSION_REGISTRIES: (Object | null)[];
    static SYNCHRONIZED_REGISTRIES: (Object | null)[];
    static WORLDGEN_REGISTRIES: (Object | null)[];
    static load(paramentries: Map<Object | null, RegistryDataLoader$NetworkedRegistryData>, paramknownDataSource: (param0: Identifier) => java.util.Optional<net.minecraft.server.packs.resources.Resource>, paramcontextRegistries: (Object | null)[], paramregistriesToLoad: (Object | null)[], paramexecutor: Executor): CompletableFuture<RegistryAccess$Frozen>;
    static load(paramresourceManager: ResourceManager, paramcontextRegistries: (Object | null)[], paramregistriesToLoad: (Object | null)[], paramexecutor: Executor): CompletableFuture<RegistryAccess$Frozen>;
    constructor()
}