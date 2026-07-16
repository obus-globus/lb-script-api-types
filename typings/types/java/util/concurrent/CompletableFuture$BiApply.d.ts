import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { CompletableFuture$BiCompletion } from '../../../java/util/concurrent/CompletableFuture$BiCompletion.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CompletableFuture$BiApply<T extends unknown, U extends unknown, V extends unknown> extends CompletableFuture$BiCompletion<T, U, V> {
    static adapt<T extends unknown>(paramarg0: () => void, paramarg1: T): ForkJoinTask<T>;
    static adapt<T extends unknown>(paramarg0: () => T): ForkJoinTask<T>;
    static adapt(paramarg0: () => void): ForkJoinTask<Object>;
    static adaptInterruptible<T extends unknown>(paramarg0: () => void, paramarg1: T): ForkJoinTask<T>;
    static adaptInterruptible<T extends unknown>(paramarg0: () => T): ForkJoinTask<T>;
    static adaptInterruptible(paramarg0: () => void): ForkJoinTask<Object>;
    static getPool(): ForkJoinPool;
    static getQueuedTaskCount(): number;
    static getSurplusQueuedTaskCount(): number;
    static helpQuiesce(): void;
    static inForkJoinPool(): boolean;
    static invokeAll<T extends ForkJoinTask<Object>>(paramarg0: T[]): T[];
    static invokeAll(paramarg0: ForkJoinTask<Object>, paramarg1: ForkJoinTask<Object>): void;
    static invokeAll(...paramarg0: ForkJoinTask<Object>[]): void;
    constructor(arg0: Executor, arg1: CompletableFuture<V>, arg2: CompletableFuture<T>, arg3: CompletableFuture<U>, arg4: (param0: T, param1: U) => V)
    // private fn: (param0: T, param1: U) => V;
    tryFire(arg0: number): CompletableFuture<V>;
}