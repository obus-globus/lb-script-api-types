import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
export interface SimpleReloadInstance$StateFactory<S extends Object | number | string | boolean> extends Object {
    create(sharedState: PreparableReloadListener$SharedState, previousStep: (param0: Object | null) => CompletableFuture<Object>, listener: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => CompletableFuture<Object>, param3: Executor) => CompletableFuture<void>, taskExecutor: Executor, reloadExecutor: Executor): CompletableFuture<S>;
}