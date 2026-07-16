import type { Runnable } from '../java/lang/Runnable.d.ts'
import type { CompletableFuture } from '../java/util/concurrent/CompletableFuture.d.ts'
import type { CompletionStage } from '../java/util/concurrent/CompletionStage.d.ts'
import type { Executor } from '../java/util/concurrent/Executor.d.ts'
import type { TimeUnit } from '../java/util/concurrent/TimeUnit.d.ts'
import type { Supplier } from '../java/util/function/Supplier.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
import type { Call } from '../retrofit2/Call.d.ts'
export class CompletableFutureCallAdapterFactory$CallCancelCompletableFuture<T extends unknown> extends CompletableFuture<T> {
    static allOf(...paramarg0: CompletableFuture<Object>[]): CompletableFuture<void>;
    static anyOf(...paramarg0: CompletableFuture<Object>[]): CompletableFuture<Object>;
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
    constructor(arg0: Call<Object>)
    // private call: Call<Object>;
    cancel(arg0: boolean): boolean;
}