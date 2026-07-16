import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { ConcurrentHashMap$BulkTask } from '../../../java/util/concurrent/ConcurrentHashMap$BulkTask.d.ts'
import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { IntBinaryOperator } from '../../../java/util/function/IntBinaryOperator.d.ts'
import type { ToIntBiFunction } from '../../../java/util/function/ToIntBiFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap$MapReduceMappingsToIntTask<K extends unknown, V extends unknown> extends ConcurrentHashMap$BulkTask<K, V, number> {
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
    constructor(arg0: ConcurrentHashMap$BulkTask<K, V, Object>, arg1: number, arg2: number, arg3: number, arg4: ConcurrentHashMap$Node<K, V>[], arg5: ConcurrentHashMap$MapReduceMappingsToIntTask<K, V>, arg6: (param0: K, param1: V) => number, arg7: number, arg8: (param0: number, param1: number) => number)
    // private basis: number;
    // private nextRight: ConcurrentHashMap$MapReduceMappingsToIntTask<K, V>;
    // private reducer: (param0: number, param1: number) => number;
    // private result: number;
    // private rights: ConcurrentHashMap$MapReduceMappingsToIntTask<K, V>;
    // private transformer: (param0: K, param1: V) => number;
    compute(): void;
    getRawResult(): number;
}