import type { AsyncFunction } from '../../../../../com/google/common/util/concurrent/AsyncFunction.d.ts'
import type { ClosingFuture$AsyncClosingCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$AsyncClosingCallable.d.ts'
import type { ClosingFuture$AsyncClosingFunction } from '../../../../../com/google/common/util/concurrent/ClosingFuture$AsyncClosingFunction.d.ts'
import type { ClosingFuture$ClosingCallable } from '../../../../../com/google/common/util/concurrent/ClosingFuture$ClosingCallable.d.ts'
import type { ClosingFuture$ClosingFunction } from '../../../../../com/google/common/util/concurrent/ClosingFuture$ClosingFunction.d.ts'
import type { ClosingFuture$Combiner } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner.d.ts'
import type { ClosingFuture$Combiner2 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner2.d.ts'
import type { ClosingFuture$Combiner3 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner3.d.ts'
import type { ClosingFuture$Combiner4 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner4.d.ts'
import type { ClosingFuture$Combiner5 } from '../../../../../com/google/common/util/concurrent/ClosingFuture$Combiner5.d.ts'
import type { ClosingFuture$DeferredCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$DeferredCloser.d.ts'
import type { ClosingFuture$State } from '../../../../../com/google/common/util/concurrent/ClosingFuture$State.d.ts'
import type { ClosingFuture$ValueAndCloser } from '../../../../../com/google/common/util/concurrent/ClosingFuture$ValueAndCloser.d.ts'
import type { ClosingFuture$ValueAndCloserConsumer } from '../../../../../com/google/common/util/concurrent/ClosingFuture$ValueAndCloserConsumer.d.ts'
import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { CountDownLatch } from '../../../../../java/util/concurrent/CountDownLatch.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ClosingFuture<V extends Object | number | string | boolean> extends Object {
    static eventuallyClosing(paramfuture: ListenableFuture<Object>, paramclosingExecutor: Executor): ClosingFuture<Object>;
    static from(paramfuture: ListenableFuture<Object>): ClosingFuture<Object>;
    static submit(paramcallable: (param0: ClosingFuture$DeferredCloser) => Object | null, paramexecutor: Executor): ClosingFuture<Object>;
    static submitAsync(paramcallable: (param0: ClosingFuture$DeferredCloser) => ClosingFuture<Object>, paramexecutor: Executor): ClosingFuture<Object>;
    static whenAllComplete(paramfuture1: ClosingFuture<Object>, parammoreFutures: Object | null): ClosingFuture$Combiner;
    static whenAllComplete(paramfutures: ClosingFuture<Object>[]): ClosingFuture$Combiner;
    static whenAllSucceed(paramfuture1: ClosingFuture<Object>, paramfuture2: ClosingFuture<Object>, paramfuture3: ClosingFuture<Object>, paramfuture4: ClosingFuture<Object>, paramfuture5: ClosingFuture<Object>): ClosingFuture$Combiner5<Object, Object, Object, Object, Object>;
    static whenAllSucceed(paramfuture1: ClosingFuture<Object>, paramfuture2: ClosingFuture<Object>, paramfuture3: ClosingFuture<Object>, paramfuture4: ClosingFuture<Object>): ClosingFuture$Combiner4<Object, Object, Object, Object>;
    static whenAllSucceed(paramfuture1: ClosingFuture<Object>, paramfuture2: ClosingFuture<Object>, paramfuture3: ClosingFuture<Object>): ClosingFuture$Combiner3<Object, Object, Object>;
    static whenAllSucceed(paramfuture1: ClosingFuture<Object>, paramfuture2: ClosingFuture<Object>): ClosingFuture$Combiner2<Object, Object>;
    static whenAllSucceed(paramfuture1: ClosingFuture<Object>, paramfuture2: ClosingFuture<Object>, paramfuture3: ClosingFuture<Object>, paramfuture4: ClosingFuture<Object>, paramfuture5: ClosingFuture<Object>, paramfuture6: ClosingFuture<Object>, parammoreFutures: Object | null): ClosingFuture$Combiner;
    static whenAllSucceed(paramfutures: ClosingFuture<Object>[]): ClosingFuture$Combiner;
    static withoutCloser(paramfunction: (param0: Object | null) => ListenableFuture<Object>): (param0: ClosingFuture$DeferredCloser, param1: Object | null) => ClosingFuture<Object>;
    private constructor(future: ListenableFuture<V>)
    private constructor(future: ListenableFuture<V>, closeables: { [key: string]: any })
    // private closeables: { [key: string]: any };
    // private future: FluentFuture<V>;
    // private state: AtomicReference<ClosingFuture$State>;
    // private becomeSubsumedInto(otherCloseables: { [key: string]: any }): void;
    cancel(mayInterruptIfRunning: boolean): boolean;
    catching<X extends Throwable>(exceptionType: Class<X>, fallback: (param0: ClosingFuture$DeferredCloser, param1: X) => V, executor: Executor): ClosingFuture<V>;
    catchingAsync<X extends Throwable>(exceptionType: Class<X>, fallback: (param0: ClosingFuture$DeferredCloser, param1: X) => ClosingFuture<V>, executor: Executor): ClosingFuture<V>;
    // private catchingAsyncMoreGeneric<X extends Throwable, W extends V>(exceptionType: Class<X>, fallback: (param0: ClosingFuture$DeferredCloser, param1: X) => ClosingFuture<W>, executor: Executor): ClosingFuture<V>;
    // private catchingMoreGeneric<X extends Throwable, W extends V>(exceptionType: Class<X>, fallback: (param0: ClosingFuture$DeferredCloser, param1: X) => W, executor: Executor): ClosingFuture<V>;
    // private checkAndUpdateState(oldState: ClosingFuture$State, newState: ClosingFuture$State): void;
    // private close(): void;
    // private compareAndUpdateState(oldState: ClosingFuture$State, newState: ClosingFuture$State): boolean;
    // private derive<U extends Object | number | string | boolean>(future: FluentFuture<U>): ClosingFuture<U>;
    finalize(): void;
    finishToFuture(): FluentFuture<V>;
    finishToValueAndCloser(consumer: (param0: ClosingFuture$ValueAndCloser<V>) => void, executor: Executor): void;
    statusFuture(): ListenableFuture<Object>;
    toString(): string;
    transform<U extends Object | number | string | boolean>(function_: (param0: ClosingFuture$DeferredCloser, param1: V) => U, executor: Executor): ClosingFuture<U>;
    transformAsync<U extends Object | number | string | boolean>(function_: (param0: ClosingFuture$DeferredCloser, param1: V) => ClosingFuture<U>, executor: Executor): ClosingFuture<U>;
    whenClosedCountDown(): CountDownLatch;
}