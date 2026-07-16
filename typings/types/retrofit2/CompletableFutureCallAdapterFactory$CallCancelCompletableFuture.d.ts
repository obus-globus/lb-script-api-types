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
    static completedFuture<U extends unknown>(paramarg0: U): CompletableFuture<U>;
    static completedStage<U extends unknown>(paramarg0: U): CompletionStage<U>;
    static delayedExecutor(paramarg0: number, paramarg1: TimeUnit): Executor;
    static delayedExecutor(paramarg0: number, paramarg1: TimeUnit, paramarg2: Executor): Executor;
    static failedFuture<U extends unknown>(paramarg0: Throwable): CompletableFuture<U>;
    static failedStage<U extends unknown>(paramarg0: Throwable): CompletionStage<U>;
    static runAsync(paramarg0: () => void): CompletableFuture<void>;
    static runAsync(paramarg0: () => void, paramarg1: Executor): CompletableFuture<void>;
    static supplyAsync<U extends unknown>(paramarg0: () => U): CompletableFuture<U>;
    static supplyAsync<U extends unknown>(paramarg0: () => U, paramarg1: Executor): CompletableFuture<U>;
    constructor(arg0: Call<Object>)
    // private call: Call<Object>;
    cancel(arg0: boolean): boolean;
}