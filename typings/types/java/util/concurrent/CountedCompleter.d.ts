import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export abstract class CountedCompleter<T extends unknown> extends ForkJoinTask<T> {
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
    constructor()
    constructor(arg0: CountedCompleter<Object>)
    constructor(arg0: CountedCompleter<Object>, arg1: number)
    readonly completer: CountedCompleter<Object>;
    // private pending: number;
    addToPendingCount(arg0: number): void;
    compareAndSetPendingCount(arg0: number, arg1: number): boolean;
    complete(arg0: T): void;
    compute(): void;
    decrementPendingCountUnlessZero(): number;
    exec(): boolean;
    firstComplete(): CountedCompleter<Object>;
    getCompleter(): CountedCompleter<Object>;
    getPendingCount(): number;
    getRawResult(): T;
    getRoot(): CountedCompleter<Object>;
    helpComplete(arg0: number): void;
    initPending(arg0: number): void;
    nextComplete(): CountedCompleter<Object>;
    onAuxExceptionSet(arg0: Throwable): void;
    onCompletion(arg0: CountedCompleter<Object>): void;
    onExceptionalCompletion(arg0: Throwable, arg1: CountedCompleter<Object>): boolean;
    propagateCompletion(): void;
    quietlyCompleteRoot(): void;
    setPendingCount(arg0: number): void;
    setRawResult(arg0: T): void;
    tryComplete(): void;
    weakCompareAndSetPendingCount(arg0: number, arg1: number): boolean;
}