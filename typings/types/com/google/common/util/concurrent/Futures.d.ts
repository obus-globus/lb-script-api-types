import type { Function } from '../../../../../com/google/common/base/Function.d.ts'
import type { AsyncCallable } from '../../../../../com/google/common/util/concurrent/AsyncCallable.d.ts'
import type { AsyncFunction } from '../../../../../com/google/common/util/concurrent/AsyncFunction.d.ts'
import type { FutureCallback } from '../../../../../com/google/common/util/concurrent/FutureCallback.d.ts'
import type { Futures$FutureCombiner } from '../../../../../com/google/common/util/concurrent/Futures$FutureCombiner.d.ts'
import type { GwtFuturesCatchingSpecialization } from '../../../../../com/google/common/util/concurrent/GwtFuturesCatchingSpecialization.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class Futures extends GwtFuturesCatchingSpecialization {
    static addCallback<V extends unknown>(paramfuture: ListenableFuture<V>, paramcallback: FutureCallback<Object>, paramexecutor: Executor): void;
    static allAsList<V extends unknown>(...paramfutures: ListenableFuture<V>[]): ListenableFuture<V[]>;
    static allAsList<V extends unknown>(paramfutures: ListenableFuture<V>[]): ListenableFuture<V[]>;
    static catching<V extends unknown, X extends Throwable>(paraminput: ListenableFuture<V>, paramexceptionType: Class<X>, paramfallback: (param0: Object) => V, paramexecutor: Executor): ListenableFuture<V>;
    static catchingAsync<V extends unknown, X extends Throwable>(paraminput: ListenableFuture<V>, paramexceptionType: Class<X>, paramfallback: (param0: Object) => ListenableFuture<V>, paramexecutor: Executor): ListenableFuture<V>;
    static getChecked<V extends unknown, X extends Exception>(paramfuture: Future<V>, paramexceptionClass: Class<X>): V;
    static getChecked<V extends unknown, X extends Exception>(paramfuture: Future<V>, paramexceptionClass: Class<X>, paramtimeout: Duration): V;
    static getChecked<V extends unknown, X extends Exception>(paramfuture: Future<V>, paramexceptionClass: Class<X>, paramtimeout: number, paramunit: TimeUnit): V;
    static getDone<V extends unknown>(paramfuture: Future<V>): V;
    static getUnchecked<V extends unknown>(paramfuture: Future<V>): V;
    static immediateCancelledFuture<V extends unknown>(): ListenableFuture<V>;
    static immediateFailedFuture<V extends unknown>(paramthrowable: Throwable): ListenableFuture<V>;
    static immediateFuture<V extends unknown>(paramvalue: V): ListenableFuture<V>;
    static immediateVoidFuture(): ListenableFuture<void>;
    static inCompletionOrder<T extends unknown>(paramfutures: ListenableFuture<T>[]): ListenableFuture<T>[];
    static lazyTransform<I extends unknown, O extends unknown>(paraminput: Future<I>, paramfunction: (param0: Object) => O): Future<O>;
    static nonCancellationPropagating<V extends unknown>(paramfuture: ListenableFuture<V>): ListenableFuture<V>;
    static scheduleAsync<O extends unknown>(paramcallable: () => ListenableFuture<O>, paramdelay: Duration, paramexecutorService: ScheduledExecutorService): ListenableFuture<O>;
    static scheduleAsync<O extends unknown>(paramcallable: () => ListenableFuture<O>, paramdelay: number, paramtimeUnit: TimeUnit, paramexecutorService: ScheduledExecutorService): ListenableFuture<O>;
    static submit<O extends unknown>(paramcallable: () => O, paramexecutor: Executor): ListenableFuture<O>;
    static submit(paramrunnable: () => void, paramexecutor: Executor): ListenableFuture<void>;
    static submitAsync<O extends unknown>(paramcallable: () => ListenableFuture<O>, paramexecutor: Executor): ListenableFuture<O>;
    static successfulAsList<V extends unknown>(...paramfutures: ListenableFuture<V>[]): ListenableFuture<V[]>;
    static successfulAsList<V extends unknown>(paramfutures: ListenableFuture<V>[]): ListenableFuture<V[]>;
    static transform<I extends unknown, O extends unknown>(paraminput: ListenableFuture<I>, paramfunction: (param0: Object) => O, paramexecutor: Executor): ListenableFuture<O>;
    static transformAsync<I extends unknown, O extends unknown>(paraminput: ListenableFuture<I>, paramfunction: (param0: Object) => ListenableFuture<O>, paramexecutor: Executor): ListenableFuture<O>;
    static whenAllComplete<V extends unknown>(...paramfutures: ListenableFuture<V>[]): Futures$FutureCombiner<V>;
    static whenAllComplete<V extends unknown>(paramfutures: ListenableFuture<V>[]): Futures$FutureCombiner<V>;
    static whenAllSucceed<V extends unknown>(...paramfutures: ListenableFuture<V>[]): Futures$FutureCombiner<V>;
    static whenAllSucceed<V extends unknown>(paramfutures: ListenableFuture<V>[]): Futures$FutureCombiner<V>;
    static withTimeout<V extends unknown>(paramdelegate: ListenableFuture<V>, paramtime: Duration, paramscheduledExecutor: ScheduledExecutorService): ListenableFuture<V>;
    static withTimeout<V extends unknown>(paramdelegate: ListenableFuture<V>, paramtime: number, paramunit: TimeUnit, paramscheduledExecutor: ScheduledExecutorService): ListenableFuture<V>;
    private constructor()
}