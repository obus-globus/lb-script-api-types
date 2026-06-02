import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ReloadInstance } from '../../../../../net/minecraft/server/packs/resources/ReloadInstance.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimpleReloadInstance$StateFactory } from '../../../../../net/minecraft/server/packs/resources/SimpleReloadInstance$StateFactory.d.ts'
import type { Unit } from '../../../../../net/minecraft/util/Unit.d.ts'
export class SimpleReloadInstance<S extends Object | number | string | boolean> extends Object implements ReloadInstance {
    static create(paramresourceManager: ResourceManager, paramlisteners: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[], parambackgroundExecutor: Executor, parammainThreadExecutor: Executor, paraminitialTask: CompletableFuture<Unit>, paramenableProfiling: boolean): ReloadInstance;
    static of(paramresourceManager: ResourceManager, paramlisteners: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[], paramtaskExecutor: Executor, parammainThreadExecutor: Executor, paraminitialTask: CompletableFuture<Unit>): ReloadInstance;
    constructor(listeners: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[])
    // private allDone: CompletableFuture<S[]>;
    // private allPreparations: CompletableFuture<Unit>;
    // private finishedReloads: AtomicInteger;
    // private finishedTasks: AtomicInteger;
    // private listenerCount: number;
    // private preparingListeners: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[];
    // private startedReloads: AtomicInteger;
    // private startedTasks: AtomicInteger;
    checkExceptions(): void;
    // private createBarrierForListener(listener: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>, previousBarrier: CompletableFuture<Object>, mainThreadExecutor: Executor): (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>;
    done(): CompletableFuture<Object>;
    getActualProgress(): number;
    isDone(): boolean;
    prepareTasks(taskExecutor: Executor, mainThreadExecutor: Executor, resourceManager: ResourceManager, listeners: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[], stateFactory: (param0: S, param1: PreparableReloadListener$SharedState, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>, param4: Executor) => java.util.concurrent.CompletableFuture<unknown>, initialTask: CompletableFuture<Object>): CompletableFuture<S[]>;
    startTasks(taskExecutor: Executor, mainThreadExecutor: Executor, resourceManager: ResourceManager, listeners: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>[], stateFactory: (param0: S, param1: PreparableReloadListener$SharedState, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: (param0: PreparableReloadListener$SharedState, param1: Executor, param2: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, param3: Executor) => java.util.concurrent.CompletableFuture<java.lang.Void>, param4: Executor) => java.util.concurrent.CompletableFuture<unknown>, initialTask: CompletableFuture<Object>): void;
}