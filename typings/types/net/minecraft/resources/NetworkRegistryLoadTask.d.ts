import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { RegistryDataLoader$NetworkedRegistryData } from '../../../net/minecraft/resources/RegistryDataLoader$NetworkedRegistryData.d.ts'
import type { RegistryDataLoader$RegistryData } from '../../../net/minecraft/resources/RegistryDataLoader$RegistryData.d.ts'
import type { RegistryLoadTask } from '../../../net/minecraft/resources/RegistryLoadTask.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ResourceProvider } from '../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export class NetworkRegistryLoadTask<T extends Object | number | string | boolean> extends RegistryLoadTask<T> {
    constructor(data: RegistryDataLoader$RegistryData<T>, lifecycle: Lifecycle, loadingErrors: Map<ResourceKey<Object>, Exception>, entries: Map<ResourceKey<(Object | null)[]>, RegistryDataLoader$NetworkedRegistryData>, knownDataSource: (param0: Identifier) => java.util.Optional<net.minecraft.server.packs.resources.Resource>)
    // private entries: Map<ResourceKey<(Object | null)[]>, RegistryDataLoader$NetworkedRegistryData>;
    // private knownDataSource: (param0: Identifier) => java.util.Optional<net.minecraft.server.packs.resources.Resource>;
    load(context: RegistryOps$RegistryInfoLookup, executor: Executor): CompletableFuture<Object>;
}