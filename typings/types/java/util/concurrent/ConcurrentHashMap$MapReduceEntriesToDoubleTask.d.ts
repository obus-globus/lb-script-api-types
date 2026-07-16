import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { ConcurrentHashMap$BulkTask } from '../../../java/util/concurrent/ConcurrentHashMap$BulkTask.d.ts'
import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { DoubleBinaryOperator } from '../../../java/util/function/DoubleBinaryOperator.d.ts'
import type { ToDoubleFunction } from '../../../java/util/function/ToDoubleFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class ConcurrentHashMap$MapReduceEntriesToDoubleTask<K extends unknown, V extends unknown> extends ConcurrentHashMap$BulkTask<K, V, number> {
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
    constructor(arg0: ConcurrentHashMap$BulkTask<K, V, Object>, arg1: number, arg2: number, arg3: number, arg4: ConcurrentHashMap$Node<K, V>[], arg5: ConcurrentHashMap$MapReduceEntriesToDoubleTask<K, V>, arg6: (param0: Map$Entry<K, V>) => number, arg7: number, arg8: (param0: number, param1: number) => number)
    // private basis: number;
    // private nextRight: ConcurrentHashMap$MapReduceEntriesToDoubleTask<K, V>;
    // private reducer: (param0: number, param1: number) => number;
    // private result: number;
    // private rights: ConcurrentHashMap$MapReduceEntriesToDoubleTask<K, V>;
    // private transformer: (param0: Map$Entry<K, V>) => number;
    compute(): void;
    getRawResult(): number;
}