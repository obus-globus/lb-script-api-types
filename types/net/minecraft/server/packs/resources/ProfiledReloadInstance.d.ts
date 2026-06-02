import type { Stopwatch } from '../../../../../com/google/common/base/Stopwatch.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ProfiledReloadInstance$State } from '../../../../../net/minecraft/server/packs/resources/ProfiledReloadInstance$State.d.ts'
import type { ReloadInstance } from '../../../../../net/minecraft/server/packs/resources/ReloadInstance.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimpleReloadInstance } from '../../../../../net/minecraft/server/packs/resources/SimpleReloadInstance.d.ts'
import type { SimpleReloadInstance$StateFactory } from '../../../../../net/minecraft/server/packs/resources/SimpleReloadInstance$StateFactory.d.ts'
import type { Unit } from '../../../../../net/minecraft/util/Unit.d.ts'
export class ProfiledReloadInstance extends SimpleReloadInstance<ProfiledReloadInstance$State> {
    static create(paramresourceManager: ResourceManager, paramlisteners: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[], parambackgroundExecutor: Executor, parammainThreadExecutor: Executor, paraminitialTask: CompletableFuture<Unit>, paramenableProfiling: boolean): ReloadInstance;
    static of(paramresourceManager: ResourceManager, paramlisteners: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[], paramtaskExecutor: Executor, parammainThreadExecutor: Executor, paraminitialTask: CompletableFuture<Unit>): ReloadInstance;
    private constructor(listeners: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[])
    // private total: Stopwatch;
    // private finish(result: ProfiledReloadInstance$State[]): ProfiledReloadInstance$State[];
    prepareTasks(taskExecutor: Executor, mainThreadExecutor: Executor, resourceManager: ResourceManager, listeners: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[], stateFactory: (param0: ProfiledReloadInstance$State, param1: PreparableReloadListener$SharedState, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>, param4: Executor) => java.util.concurrent.CompletableFuture<unknown>, initialTask: CompletableFuture<Object>): CompletableFuture<ProfiledReloadInstance$State[]>;
}