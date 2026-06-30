import type { Lifecycle } from '../../../com/mojang/serialization/Lifecycle.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { RegistryDataLoader$RegistryData } from '../../../net/minecraft/resources/RegistryDataLoader$RegistryData.d.ts'
import type { RegistryLoadTask } from '../../../net/minecraft/resources/RegistryLoadTask.d.ts'
import type { RegistryOps$RegistryInfoLookup } from '../../../net/minecraft/resources/RegistryOps$RegistryInfoLookup.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ResourceManager } from '../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class ResourceManagerRegistryLoadTask<T extends unknown> extends RegistryLoadTask<T> {
    constructor(data: RegistryDataLoader$RegistryData<T>, lifecycle: Lifecycle, loadingErrors: Map<ResourceKey<Object>, Exception>, resourceManager: ResourceManager)
    // private registryInfoLookup: RegistryOps$RegistryInfoLookup;
    // private resourceManager: ResourceManager;
    load(context: RegistryOps$RegistryInfoLookup, executor: Executor): CompletableFuture<Object>;
}