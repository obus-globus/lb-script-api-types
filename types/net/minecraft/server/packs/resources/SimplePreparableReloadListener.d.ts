import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ProfilerFiller } from '../../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export abstract class SimplePreparableReloadListener<T extends Object | number | string | boolean> extends Object implements PreparableReloadListener {
    constructor()
    apply(preparations: T, manager: ResourceManager, profiler: ProfilerFiller): void;
    getName(): string;
    prepare(manager: ResourceManager, profiler: ProfilerFiller): T;
    prepareSharedState(currentReload: PreparableReloadListener$SharedState): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, reloadExecutor: Executor): CompletableFuture<void>;
}