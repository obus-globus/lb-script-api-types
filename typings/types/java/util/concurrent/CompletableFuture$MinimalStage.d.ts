import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { CompletionStage } from '../../../java/util/concurrent/CompletionStage.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { Future$State } from '../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class CompletableFuture$MinimalStage<T extends unknown> extends CompletableFuture<T> {
    static allOf(paramarg0: Object | null): CompletableFuture<void>;
    static anyOf(paramarg0: Object | null): CompletableFuture<Object>;
    static completedFuture(paramarg0: Object | null): CompletableFuture<Object>;
    static completedStage(paramarg0: Object | null): CompletionStage<Object>;
    static delayedExecutor(paramarg0: number, paramarg1: TimeUnit): Executor;
    static delayedExecutor(paramarg0: number, paramarg1: TimeUnit, paramarg2: Executor): Executor;
    static failedFuture(paramarg0: Throwable): CompletableFuture<Object>;
    static failedStage(paramarg0: Throwable): CompletionStage<Object>;
    static runAsync(paramarg0: () => void): CompletableFuture<void>;
    static runAsync(paramarg0: () => void, paramarg1: Executor): CompletableFuture<void>;
    static supplyAsync(paramarg0: () => Object | null): CompletableFuture<Object>;
    static supplyAsync(paramarg0: () => Object | null, paramarg1: Executor): CompletableFuture<Object>;
    constructor()
    constructor(arg0: Object)
    cancel(arg0: boolean): boolean;
    complete(arg0: T): boolean;
    completeAsync(arg0: () => T): CompletableFuture<T>;
    completeAsync(arg0: () => T, arg1: Executor): CompletableFuture<T>;
    completeExceptionally(arg0: Throwable): boolean;
    completeOnTimeout(arg0: T, arg1: number, arg2: TimeUnit): CompletableFuture<T>;
    exceptionNow(): Throwable;
    get(): T;
    get(arg0: number, arg1: TimeUnit): T;
    getNow(arg0: T): T;
    getNumberOfDependents(): number;
    isCancelled(): boolean;
    isCompletedExceptionally(): boolean;
    isDone(): boolean;
    join(): T;
    newIncompleteFuture<U extends unknown>(): CompletableFuture<U>;
    obtrudeException(arg0: Throwable): void;
    obtrudeValue(arg0: T): void;
    orTimeout(arg0: number, arg1: TimeUnit): CompletableFuture<T>;
    resultNow(): T;
    state(): Future$State;
    toCompletableFuture(): CompletableFuture<T>;
}