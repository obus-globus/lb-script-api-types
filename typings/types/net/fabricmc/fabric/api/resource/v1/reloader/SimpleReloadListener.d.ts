import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PreparableReloadListener } from '../../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
export abstract class SimpleReloadListener<T extends Object | number | string | boolean> extends Object implements PreparableReloadListener {
    constructor()
    apply(arg0: T, arg1: PreparableReloadListener$SharedState): void;
    getName(): string;
    prepare(arg0: PreparableReloadListener$SharedState): T;
    prepareSharedState(currentReload: PreparableReloadListener$SharedState): void;
    reload(arg0: PreparableReloadListener$SharedState, arg1: Executor, arg2: (param0: Object | null) => CompletableFuture<Object>, arg3: Executor): CompletableFuture<void>;
}