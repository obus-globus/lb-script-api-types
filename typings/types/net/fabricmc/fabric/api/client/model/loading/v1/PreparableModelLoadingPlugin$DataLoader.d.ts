import type { CompletableFuture } from '../../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
export interface PreparableModelLoadingPlugin$DataLoader<T extends Object | number | string | boolean> extends Object{
    load(arg0: PreparableReloadListener$SharedState, arg1: Executor): CompletableFuture<T>;
}