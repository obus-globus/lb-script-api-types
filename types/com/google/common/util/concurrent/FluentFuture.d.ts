import type { Function } from '../../../../../com/google/common/base/Function.d.ts'
import type { AsyncFunction } from '../../../../../com/google/common/util/concurrent/AsyncFunction.d.ts'
import type { FutureCallback } from '../../../../../com/google/common/util/concurrent/FutureCallback.d.ts'
import type { GwtFluentFutureCatchingSpecialization } from '../../../../../com/google/common/util/concurrent/GwtFluentFutureCatchingSpecialization.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Duration } from '../../../../../java/time/Duration.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { ScheduledExecutorService } from '../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class FluentFuture<V extends Object | number | string | boolean> extends GwtFluentFutureCatchingSpecialization<V> {
    static from(paramfuture: FluentFuture<Object>): FluentFuture<Object>;
    static from(paramfuture: ListenableFuture<Object>): FluentFuture<Object>;
    constructor()
    addCallback(callback: FutureCallback<V>, executor: Executor): void;
    catching(exceptionType: Class<X>, fallback: (param0: X) => V, executor: Executor): FluentFuture<V>;
    catchingAsync(exceptionType: Class<X>, fallback: (param0: X) => V, executor: Executor): FluentFuture<V>;
    transform(function_: (param0: V) => T, executor: Executor): FluentFuture<T>;
    transformAsync(function_: (param0: V) => T, executor: Executor): FluentFuture<T>;
    withTimeout(timeout: Duration, scheduledExecutor: ScheduledExecutorService): FluentFuture<V>;
    withTimeout(timeout: number, unit: TimeUnit, scheduledExecutor: ScheduledExecutorService): FluentFuture<V>;
}