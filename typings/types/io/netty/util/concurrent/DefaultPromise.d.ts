import type { AbstractFuture } from '../../../../io/netty/util/concurrent/AbstractFuture.d.ts'
import type { DefaultFutureListeners } from '../../../../io/netty/util/concurrent/DefaultFutureListeners.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class DefaultPromise<V extends Object | number | string | boolean> extends AbstractFuture<V> implements Promise<V> {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    constructor()
    constructor(arg0: (Object | null)[])
    // private executor: (Object | null)[];
    // private listener: GenericFutureListener<Future<Object>>;
    // private listeners: DefaultFutureListeners;
    // private notifyingListeners: boolean;
    // private result: Object;
    // private waiters: number;
    addListener(arg0: GenericFutureListener<Future<V>>): Promise<V>;
    // private addListener0(arg0: GenericFutureListener<Future<V>>): void;
    addListeners(arg0: GenericFutureListener<Future<V>>[]): Promise<V>;
    await(): Promise<V>;
    await(arg0: number): boolean;
    await(arg0: number, arg1: TimeUnit): boolean;
    // private await0(arg0: number, arg1: boolean): boolean;
    awaitUninterruptibly(): Promise<V>;
    awaitUninterruptibly(arg0: number): boolean;
    awaitUninterruptibly(arg0: number, arg1: TimeUnit): boolean;
    cancel(arg0: boolean): boolean;
    cause(): Throwable;
    // private cause0(arg0: Object): Throwable;
    checkDeadLock(): void;
    // private checkNotifyWaiters(): boolean;
    // private decWaiters(): void;
    executor(): (Object | null)[];
    get(): V;
    get(arg0: number, arg1: TimeUnit): V;
    getNow(): V;
    // private incWaiters(): void;
    isCancellable(): boolean;
    isCancelled(): boolean;
    isDone(): boolean;
    isSuccess(): boolean;
    // private notifyListeners(): void;
    // private notifyListeners0(arg0: DefaultFutureListeners): void;
    // private notifyListenersNow(): void;
    notifyProgressiveListeners(arg0: number, arg1: number): void;
    // private progressiveListeners(): Object;
    removeListener(arg0: GenericFutureListener<Future<V>>): Promise<V>;
    // private removeListener0(arg0: GenericFutureListener<Future<V>>): void;
    removeListeners(arg0: GenericFutureListener<Future<V>>[]): Promise<V>;
    // private rethrowIfFailed(): void;
    setFailure(arg0: Throwable): Promise<V>;
    // private setFailure0(arg0: Throwable): boolean;
    setSuccess(arg0: V): Promise<V>;
    // private setSuccess0(arg0: V): boolean;
    setUncancellable(): boolean;
    // private setValue0(arg0: Object): boolean;
    sync(): Promise<V>;
    syncUninterruptibly(): Promise<V>;
    toString(): string;
    toStringBuilder(): StringBuilder;
    tryFailure(arg0: Throwable): boolean;
    trySuccess(arg0: V): boolean;
}