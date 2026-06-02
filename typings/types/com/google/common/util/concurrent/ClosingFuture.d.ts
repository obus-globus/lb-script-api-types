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
import type { ClosingFuture$State } from '../../../../../com/google/common/util/concurrent/ClosingFuture$State.d.ts'
import type { ClosingFuture$ValueAndCloserConsumer } from '../../../../../com/google/common/util/concurrent/ClosingFuture$ValueAndCloserConsumer.d.ts'
import type { FluentFuture } from '../../../../../com/google/common/util/concurrent/FluentFuture.d.ts'
import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { CountDownLatch } from '../../../../../java/util/concurrent/CountDownLatch.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ClosingFuture<V extends Object | number | string | boolean> extends Object {
    static eventuallyClosing(paramfuture: ListenableFuture<Object>, paramclosingExecutor: Executor): ClosingFuture<Object>;
    static from(paramfuture: ListenableFuture<Object>): ClosingFuture<Object>;
    static submit(paramcallable: (param0: Object | null) => unknown, paramexecutor: Executor): ClosingFuture<Object>;
    static submitAsync(paramcallable: (param0: Object | null) => com.google.common.util.concurrent.ClosingFuture<unknown>, paramexecutor: Executor): ClosingFuture<Object>;
    static whenAllComplete(paramfuture1: ClosingFuture<Object>, parammoreFutures: Object | null): ClosingFuture$Combiner;
    static whenAllComplete(paramfutures: (Object | null)[]): ClosingFuture$Combiner;
    static whenAllSucceed(paramfuture1: ClosingFuture<Object>, paramfuture2: ClosingFuture<Object>, paramfuture3: ClosingFuture<Object>, paramfuture4: ClosingFuture<Object>, paramfuture5: ClosingFuture<Object>): ClosingFuture$Combiner5<Object, Object, Object, Object, Object>;
    static whenAllSucceed(paramfuture1: ClosingFuture<Object>, paramfuture2: ClosingFuture<Object>, paramfuture3: ClosingFuture<Object>, paramfuture4: ClosingFuture<Object>): ClosingFuture$Combiner4<Object, Object, Object, Object>;
    static whenAllSucceed(paramfuture1: ClosingFuture<Object>, paramfuture2: ClosingFuture<Object>, paramfuture3: ClosingFuture<Object>): ClosingFuture$Combiner3<Object, Object, Object>;
    static whenAllSucceed(paramfuture1: ClosingFuture<Object>, paramfuture2: ClosingFuture<Object>): ClosingFuture$Combiner2<Object, Object>;
    static whenAllSucceed(paramfuture1: ClosingFuture<Object>, paramfuture2: ClosingFuture<Object>, paramfuture3: ClosingFuture<Object>, paramfuture4: ClosingFuture<Object>, paramfuture5: ClosingFuture<Object>, paramfuture6: ClosingFuture<Object>, parammoreFutures: Object | null): ClosingFuture$Combiner;
    static whenAllSucceed(paramfutures: (Object | null)[]): ClosingFuture$Combiner;
    static withoutCloser(paramfunction: (param0: Object | null) => Object | null): (param0: Object | null, param1: Object | null) => com.google.common.util.concurrent.ClosingFuture<unknown>;
    private constructor(future: ListenableFuture<V>)
    private constructor(future: ListenableFuture<V>, closeables: ClosingFuture$CloseableList)
    // private closeables: ClosingFuture$CloseableList;
    // private future: FluentFuture<V>;
    // private state: AtomicReference<ClosingFuture$State>;
    // private becomeSubsumedInto(otherCloseables: ClosingFuture$CloseableList): void;
    cancel(mayInterruptIfRunning: boolean): boolean;
    catching(exceptionType: Class<X>, fallback: (param0: X, param1: V) => unknown, executor: Executor): ClosingFuture<V>;
    catchingAsync(exceptionType: Class<X>, fallback: (param0: X, param1: V) => com.google.common.util.concurrent.ClosingFuture<unknown>, executor: Executor): ClosingFuture<V>;
    // private catchingAsyncMoreGeneric(exceptionType: Class<X>, fallback: (param0: X, param1: W) => com.google.common.util.concurrent.ClosingFuture<unknown>, executor: Executor): ClosingFuture<V>;
    // private catchingMoreGeneric(exceptionType: Class<X>, fallback: (param0: X, param1: W) => unknown, executor: Executor): ClosingFuture<V>;
    // private checkAndUpdateState(oldState: ClosingFuture$State, newState: ClosingFuture$State): void;
    // private close(): void;
    // private compareAndUpdateState(oldState: ClosingFuture$State, newState: ClosingFuture$State): boolean;
    // private derive(future: FluentFuture<U>): ClosingFuture<U>;
    finalize(): void;
    finishToFuture(): FluentFuture<V>;
    finishToValueAndCloser(consumer: (param0: V) => void, executor: Executor): void;
    statusFuture(): ListenableFuture<Object>;
    toString(): string;
    transform(function_: (param0: V, param1: U) => unknown, executor: Executor): ClosingFuture<U>;
    transformAsync(function_: (param0: V, param1: U) => com.google.common.util.concurrent.ClosingFuture<unknown>, executor: Executor): ClosingFuture<U>;
    whenClosedCountDown(): CountDownLatch;
}