import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class RecursiveAction extends ForkJoinTask<void> {
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
    compute(): void;
    exec(): boolean;
    getRawResult(): void;
    setRawResult(arg0: void): void;
}