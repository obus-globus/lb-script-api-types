import type { AbstractFuture$Listener } from '../../../../../com/google/common/util/concurrent/AbstractFuture$Listener.d.ts'
import type { AbstractFutureState$Waiter } from '../../../../../com/google/common/util/concurrent/AbstractFutureState$Waiter.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { InternalFutureFailureAccess } from '../../../../../com/google/common/util/concurrent/internal/InternalFutureFailureAccess.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractFutureState<V extends Object | number | string | boolean> extends InternalFutureFailureAccess implements ListenableFuture<V> {
    constructor()
    // private listenersField: AbstractFuture$Listener;
    // private valueField: Object;
    // private waitersField: AbstractFutureState$Waiter;
    blockingGet(): V;
    blockingGet(timeout: number, unit: TimeUnit): V;
    casListeners(expect: AbstractFuture$Listener, update: AbstractFuture$Listener): boolean;
    // private casWaiters(expect: AbstractFutureState$Waiter, update: AbstractFutureState$Waiter): boolean;
    gasListeners(update: AbstractFuture$Listener): AbstractFuture$Listener;
    // private gasWaiters(update: AbstractFutureState$Waiter): AbstractFutureState$Waiter;
    listeners(): AbstractFuture$Listener;
    releaseWaiters(): void;
    // private removeWaiter(node: AbstractFutureState$Waiter): void;
    value(): Object;
}