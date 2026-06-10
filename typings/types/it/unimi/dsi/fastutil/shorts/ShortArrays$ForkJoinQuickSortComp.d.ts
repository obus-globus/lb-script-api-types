import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { ForkJoinPool } from '../../../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { RecursiveAction } from '../../../../../java/util/concurrent/RecursiveAction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortArrays$ForkJoinQuickSortComp extends RecursiveAction {
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
    static invokeAll(paramarg0: Object | null): void;
    constructor(arg0: number[], arg1: number, arg2: number, arg3: (param0: number, param1: number) => number)
    // private comp: (param0: number, param1: number) => number;
    // private from: number;
    // private to: number;
    // private x: number[];
    compute(): void;
}