import type { AbstractFuture$Listener } from '../../../../../com/google/common/util/concurrent/AbstractFuture$Listener.d.ts'
import type { AbstractFutureState } from '../../../../../com/google/common/util/concurrent/AbstractFutureState.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class AbstractFuture<V extends unknown> extends AbstractFutureState<V> {
    constructor()
    // private addDoneString(builder: StringBuilder): void;
    addListener(listener: () => void, executor: Executor): void;
    // private addPendingString(builder: StringBuilder): void;
    afterDone(): void;
    // private appendResultObject(builder: StringBuilder, o: Object): void;
    // private appendUserObject(builder: StringBuilder, o: Object): void;
    cancel(mayInterruptIfRunning: boolean): boolean;
    // private clearListeners(onto: AbstractFuture$Listener): AbstractFuture$Listener;
    get(): V;
    get(timeout: number, unit: TimeUnit): V;
    getFromAlreadyDoneTrustedFuture(): V;
    interruptTask(): void;
    isCancelled(): boolean;
    isDone(): boolean;
    maybePropagateCancellationTo(related: Future<Object>): void;
    pendingToString(): string;
    set(value: V): boolean;
    setException(throwable: Throwable): boolean;
    setFuture(future: ListenableFuture<V>): boolean;
    toString(): string;
    tryInternalFastPathGetFailure(): Throwable;
    wasInterrupted(): boolean;
}