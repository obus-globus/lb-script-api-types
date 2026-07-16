import type { ObjectInputStream } from '../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Callable } from '../../../java/util/concurrent/Callable.d.ts'
import type { ForkJoinPool } from '../../../java/util/concurrent/ForkJoinPool.d.ts'
import type { ForkJoinTask$Aux } from '../../../java/util/concurrent/ForkJoinTask$Aux.d.ts'
import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export abstract class ForkJoinTask<V extends unknown> extends Object implements Serializable, Future<V> {
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
    // private aux: ForkJoinTask$Aux;
    // private status: number;
    // private awaitDone(arg0: ForkJoinPool, arg1: number, arg2: boolean, arg3: number): number;
    // private awaitDone(arg0: boolean, arg1: number): number;
    cancel(arg0: boolean): boolean;
    // private casAux(arg0: ForkJoinTask$Aux, arg1: ForkJoinTask$Aux): boolean;
    // private casStatus(arg0: number, arg1: number): boolean;
    // private compareAndExchangeAux(arg0: ForkJoinTask$Aux, arg1: ForkJoinTask$Aux): ForkJoinTask$Aux;
    compareAndSetForkJoinTaskTag(arg0: number, arg1: number): boolean;
    complete(arg0: V): void;
    completeExceptionally(arg0: Throwable): void;
    doExec(): void;
    exceptionNow(): Throwable;
    exec(): boolean;
    fork(): ForkJoinTask<V>;
    get(): V;
    get(arg0: number, arg1: TimeUnit): V;
    // private getAndBitwiseOrStatus(arg0: number): number;
    getException(): Throwable;
    // private getException(arg0: boolean): Throwable;
    getForkJoinTaskStatusMarkerBit(): number;
    getForkJoinTaskTag(): number;
    getRawResult(): V;
    invoke(): V;
    isCancelled(): boolean;
    isCompletedAbnormally(): boolean;
    isCompletedNormally(): boolean;
    isDone(): boolean;
    join(): V;
    noUserHelp(): number;
    onAuxExceptionSet(arg0: Throwable): void;
    quietlyComplete(): void;
    quietlyInvoke(): void;
    quietlyJoin(): void;
    quietlyJoin(arg0: number, arg1: TimeUnit): boolean;
    quietlyJoinPoolInvokeAllTask(arg0: number): void;
    quietlyJoinUninterruptibly(arg0: number, arg1: TimeUnit): boolean;
    // private readObject(arg0: ObjectInputStream): void;
    reinitialize(): void;
    // private reportException(arg0: boolean): void;
    resultNow(): V;
    // private setDone(): void;
    setForkJoinTaskStatusMarkerBit(): number;
    setForkJoinTaskTag(arg0: number): number;
    setNoUserHelp(): void;
    setRawResult(arg0: V): void;
    // private signalWaiters(): void;
    state(): Future$State;
    trySetCancelled(): number;
    trySetException(arg0: Throwable): void;
    trySetThrown(arg0: Throwable): boolean;
    tryUnfork(): boolean;
    // private writeObject(arg0: ObjectOutputStream): void;
}