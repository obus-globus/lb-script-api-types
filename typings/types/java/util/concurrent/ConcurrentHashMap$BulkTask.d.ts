import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { ConcurrentHashMap$Node } from '../../../java/util/concurrent/ConcurrentHashMap$Node.d.ts'
import type { ConcurrentHashMap$TableStack } from '../../../java/util/concurrent/ConcurrentHashMap$TableStack.d.ts'
import type { CountedCompleter } from '../../../java/util/concurrent/CountedCompleter.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask } from '../../../java/util/concurrent/ForkJoinTask.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ConcurrentHashMap$BulkTask<K extends Object | number | string | boolean, V extends Object | number | string | boolean, R extends Object | number | string | boolean> extends CountedCompleter<R> {
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
    constructor(arg0: ConcurrentHashMap$BulkTask<K, V, Object>, arg1: number, arg2: number, arg3: number, arg4: ConcurrentHashMap$Node<K, V>[])
    // private baseIndex: number;
    // private baseLimit: number;
    // private baseSize: number;
    // private batch: number;
    // private index: number;
    // private next: ConcurrentHashMap$Node<K, V>;
    // private spare: ConcurrentHashMap$TableStack<K, V>;
    // private stack: ConcurrentHashMap$TableStack<K, V>;
    // private tab: ConcurrentHashMap$Node<K, V>[];
    advance(): ConcurrentHashMap$Node<K, V>;
    // private pushState(arg0: ConcurrentHashMap$Node<K, V>[], arg1: number, arg2: number): void;
    // private recoverState(arg0: number): void;
}