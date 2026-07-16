import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { ConcurrentHashMap$BulkTask } from '../../../java/util/concurrent/ConcurrentHashMap$BulkTask.d.ts'
import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap$MapReduceMappingsTask<K extends unknown, V extends unknown, U extends unknown> extends ConcurrentHashMap$BulkTask<K, V, U> {
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
    constructor(arg0: ConcurrentHashMap$BulkTask<K, V, Object>, arg1: number, arg2: number, arg3: number, arg4: ConcurrentHashMap$Node<K, V>[], arg5: ConcurrentHashMap$MapReduceMappingsTask<K, V, U>, arg6: (param0: K, param1: V) => U, arg7: (param0: U, param1: U) => U)
    // private nextRight: ConcurrentHashMap$MapReduceMappingsTask<K, V, U>;
    // private reducer: (param0: U, param1: U) => U;
    // private result: U;
    // private rights: ConcurrentHashMap$MapReduceMappingsTask<K, V, U>;
    // private transformer: (param0: K, param1: V) => U;
    compute(): void;
    getRawResult(): U;
}