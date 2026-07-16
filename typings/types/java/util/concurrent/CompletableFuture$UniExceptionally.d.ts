import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { CompletableFuture$UniCompletion } from '../../../java/util/concurrent/CompletableFuture$UniCompletion.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class CompletableFuture$UniExceptionally<T extends unknown> extends CompletableFuture$UniCompletion<T, T> {
    static adapt(paramarg0: () => void, paramarg1: Object | null): ForkJoinTask<Object>;
    static adapt(paramarg0: () => Object | null): ForkJoinTask<Object>;
    static adapt(paramarg0: () => void): ForkJoinTask<Object>;
    static adaptInterruptible(paramarg0: () => void, paramarg1: Object | null): ForkJoinTask<Object>;
    static adaptInterruptible(paramarg0: () => Object | null): ForkJoinTask<Object>;
    static adaptInterruptible(paramarg0: () => void): ForkJoinTask<Object>;
    static getPool(): ForkJoinPool;
    static getQueuedTaskCount(): number;
    static getSurplusQueuedTaskCount(): number;
    static helpQuiesce(): void;
    static inForkJoinPool(): boolean;
    static invokeAll(paramarg0: (Object | null)[]): (Object | null)[];
    static invokeAll(paramarg0: ForkJoinTask<Object>, paramarg1: ForkJoinTask<Object>): void;
    static invokeAll(...paramarg0: ForkJoinTask<Object>[]): void;
    constructor(arg0: Executor, arg1: CompletableFuture<T>, arg2: CompletableFuture<T>, arg3: (param0: Throwable) => T)
    // private fn: (param0: Throwable) => T;
    tryFire(arg0: number): CompletableFuture<T>;
}