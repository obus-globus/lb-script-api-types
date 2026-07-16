import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { RunnableFuture } from '../../../java/util/concurrent/RunnableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ForkJoinTask$InterruptibleTask<T extends unknown> extends ForkJoinTask<T> implements RunnableFuture<T> {
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
    constructor()
    // private runner: Thread;
    adaptee(): Object;
    cancel(arg0: boolean): boolean;
    compute(): T;
    exec(): boolean;
    interruptIfRunning(arg0: boolean): boolean;
    postExec(): boolean;
    run(): void;
    toString(): string;
}