import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { ConcurrentHashMap$BulkTask } from '../../../java/util/concurrent/ConcurrentHashMap$BulkTask.d.ts'
import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { DoubleBinaryOperator } from '../../../java/util/function/DoubleBinaryOperator.d.ts'
import type { ToDoubleBiFunction } from '../../../java/util/function/ToDoubleBiFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ConcurrentHashMap$MapReduceMappingsToDoubleTask<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ConcurrentHashMap$BulkTask<K, V, number> {
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
    constructor(arg0: ConcurrentHashMap$BulkTask<K, V, Object>, arg1: number, arg2: number, arg3: number, arg4: ConcurrentHashMap$Node<K, V>[], arg5: ConcurrentHashMap$MapReduceMappingsToDoubleTask<K, V>, arg6: (param0: K, param1: V) => kotlin.Double, arg7: number, arg8: (param0: number, param1: number) => kotlin.Double)
    // private basis: number;
    // private nextRight: ConcurrentHashMap$MapReduceMappingsToDoubleTask<K, V>;
    // private reducer: (param0: number, param1: number) => kotlin.Double;
    // private result: number;
    // private rights: ConcurrentHashMap$MapReduceMappingsToDoubleTask<K, V>;
    // private transformer: (param0: K, param1: V) => kotlin.Double;
    compute(): void;
    getRawResult(): number;
}