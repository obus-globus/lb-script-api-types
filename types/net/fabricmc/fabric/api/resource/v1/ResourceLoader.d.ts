import type { Executor } from '../../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener } from '../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
export interface ResourceLoader extends Object{
    addListenerOrdering(arg0: Identifier, arg1: Identifier): void;
    registerReloadListener(arg0: Identifier, arg1: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>): void;
}