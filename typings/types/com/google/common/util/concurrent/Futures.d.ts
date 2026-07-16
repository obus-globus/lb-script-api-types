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
    static addCallback(paramfuture: ListenableFuture<Object>, paramcallback: FutureCallback<Object>, paramexecutor: Executor): void;
    static allAsList(...paramfutures: ListenableFuture<Object>[]): ListenableFuture<(Object | null)[]>;
    static allAsList(paramfutures: ListenableFuture<Object>[]): ListenableFuture<(Object | null)[]>;
    static catching(paraminput: ListenableFuture<Object>, paramexceptionType: Class<Throwable>, paramfallback: (param0: Object) => Object | null, paramexecutor: Executor): ListenableFuture<Object>;
    static catchingAsync(paraminput: ListenableFuture<Object>, paramexceptionType: Class<Throwable>, paramfallback: (param0: Object) => ListenableFuture<Object>, paramexecutor: Executor): ListenableFuture<Object>;
    static getChecked(paramfuture: Future<Object>, paramexceptionClass: Class<Exception>): Object | null;
    static getChecked(paramfuture: Future<Object>, paramexceptionClass: Class<Exception>, paramtimeout: Duration): Object | null;
    static getChecked(paramfuture: Future<Object>, paramexceptionClass: Class<Exception>, paramtimeout: number, paramunit: TimeUnit): Object | null;
    static getDone(paramfuture: Future<Object>): Object | null;
    static getUnchecked(paramfuture: Future<Object>): Object | null;
    static immediateCancelledFuture(): ListenableFuture<Object>;
    static immediateFailedFuture(paramthrowable: Throwable): ListenableFuture<Object>;
    static immediateFuture(paramvalue: Object | null): ListenableFuture<Object>;
    static immediateVoidFuture(): ListenableFuture<void>;
    static inCompletionOrder(paramfutures: ListenableFuture<Object>[]): ListenableFuture<Object>[];
    static lazyTransform(paraminput: Future<Object>, paramfunction: (param0: Object) => Object | null): Future<Object>;
    static nonCancellationPropagating(paramfuture: ListenableFuture<Object>): ListenableFuture<Object>;
    static scheduleAsync(paramcallable: () => ListenableFuture<Object>, paramdelay: Duration, paramexecutorService: ScheduledExecutorService): ListenableFuture<Object>;
    static scheduleAsync(paramcallable: () => ListenableFuture<Object>, paramdelay: number, paramtimeUnit: TimeUnit, paramexecutorService: ScheduledExecutorService): ListenableFuture<Object>;
    static submit(paramcallable: () => Object | null, paramexecutor: Executor): ListenableFuture<Object>;
    static submit(paramrunnable: () => void, paramexecutor: Executor): ListenableFuture<void>;
    static submitAsync(paramcallable: () => ListenableFuture<Object>, paramexecutor: Executor): ListenableFuture<Object>;
    static successfulAsList(...paramfutures: ListenableFuture<Object>[]): ListenableFuture<(Object | null)[]>;
    static successfulAsList(paramfutures: ListenableFuture<Object>[]): ListenableFuture<(Object | null)[]>;
    static transform(paraminput: ListenableFuture<Object>, paramfunction: (param0: Object) => Object | null, paramexecutor: Executor): ListenableFuture<Object>;
    static transformAsync(paraminput: ListenableFuture<Object>, paramfunction: (param0: Object) => ListenableFuture<Object>, paramexecutor: Executor): ListenableFuture<Object>;
    static whenAllComplete(...paramfutures: ListenableFuture<Object>[]): Futures$FutureCombiner<Object>;
    static whenAllComplete(paramfutures: ListenableFuture<Object>[]): Futures$FutureCombiner<Object>;
    static whenAllSucceed(...paramfutures: ListenableFuture<Object>[]): Futures$FutureCombiner<Object>;
    static whenAllSucceed(paramfutures: ListenableFuture<Object>[]): Futures$FutureCombiner<Object>;
    static withTimeout(paramdelegate: ListenableFuture<Object>, paramtime: Duration, paramscheduledExecutor: ScheduledExecutorService): ListenableFuture<Object>;
    static withTimeout(paramdelegate: ListenableFuture<Object>, paramtime: number, paramunit: TimeUnit, paramscheduledExecutor: ScheduledExecutorService): ListenableFuture<Object>;
    private constructor()
}