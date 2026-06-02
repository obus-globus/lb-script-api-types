import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { Delayed } from '../../../java/util/concurrent/Delayed.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { ForkJoinTask$InterruptibleTask } from '../../../java/util/concurrent/ForkJoinTask$InterruptibleTask.d.ts'
import type { ScheduledFuture } from '../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DelayScheduler$ScheduledForkJoinTask<T extends Object | number | string | boolean> extends ForkJoinTask$InterruptibleTask<T> implements ScheduledFuture<T> {
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
    static invokeAll(paramarg0: E[]): E[];
    static invokeAll(paramarg0: ForkJoinTask<Object>, paramarg1: ForkJoinTask<Object>): void;
    static invokeAll(paramarg0: Object | null): void;
    constructor(arg0: number, arg1: number, arg2: boolean, arg3: () => void, arg4: () => T, arg5: ForkJoinPool)
    // private callable: () => T;
    // private heapIndex: number;
    // private isImmediate: boolean;
    // private nextDelay: number;
    // private nextPending: DelayScheduler$ScheduledForkJoinTask<Object>;
    // private pool: ForkJoinPool;
    // private result: T;
    // private runnable: () => void;
    // private when: number;
    adaptee(): Object;
    cancel(arg0: boolean): boolean;
    compareTo(arg0: Delayed): number;
    compute(): T;
    getDelay(arg0: TimeUnit): number;
    getRawResult(): T;
    postExec(): boolean;
    schedule(): void;
    setRawResult(arg0: T): void;
}