import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IdentifiableResourceReloadListener } from '../../../../../net/fabricmc/fabric/api/resource/IdentifiableResourceReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManagerReloadListener } from '../../../../../net/minecraft/server/packs/resources/ResourceManagerReloadListener.d.ts'
export interface SimpleSynchronousResourceReloadListener extends Object, IdentifiableResourceReloadListener, ResourceManagerReloadListener{
    getFabricDependencies(): E[];
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, reloadExecutor: Executor): CompletableFuture<void>;
}