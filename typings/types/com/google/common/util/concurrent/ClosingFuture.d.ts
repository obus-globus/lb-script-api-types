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
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { CountDownLatch } from '../../../../../java/util/concurrent/CountDownLatch.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ClosingFuture<V extends unknown> extends Object {
    static eventuallyClosing<C extends unknown & AutoCloseable>(paramfuture: ListenableFuture<C>, paramclosingExecutor: Executor): ClosingFuture<C>;
    static from<V extends unknown>(paramfuture: ListenableFuture<V>): ClosingFuture<V>;
    static submit<V extends unknown>(paramcallable: (param0: ClosingFuture$DeferredCloser) => V, paramexecutor: Executor): ClosingFuture<V>;
    static submitAsync<V extends unknown>(paramcallable: (param0: ClosingFuture$DeferredCloser) => ClosingFuture<V>, paramexecutor: Executor): ClosingFuture<V>;
    static whenAllComplete(paramfuture1: ClosingFuture<Object>, ...parammoreFutures: ClosingFuture<Object>[]): ClosingFuture$Combiner;
    static whenAllComplete(paramfutures: ClosingFuture<Object>[]): ClosingFuture$Combiner;
    static whenAllSucceed<V1 extends unknown, V2 extends unknown, V3 extends unknown, V4 extends unknown, V5 extends unknown>(paramfuture1: ClosingFuture<V1>, paramfuture2: ClosingFuture<V2>, paramfuture3: ClosingFuture<V3>, paramfuture4: ClosingFuture<V4>, paramfuture5: ClosingFuture<V5>): ClosingFuture$Combiner5<V1, V2, V3, V4, V5>;
    static whenAllSucceed<V1 extends unknown, V2 extends unknown, V3 extends unknown, V4 extends unknown>(paramfuture1: ClosingFuture<V1>, paramfuture2: ClosingFuture<V2>, paramfuture3: ClosingFuture<V3>, paramfuture4: ClosingFuture<V4>): ClosingFuture$Combiner4<V1, V2, V3, V4>;
    static whenAllSucceed<V1 extends unknown, V2 extends unknown, V3 extends unknown>(paramfuture1: ClosingFuture<V1>, paramfuture2: ClosingFuture<V2>, paramfuture3: ClosingFuture<V3>): ClosingFuture$Combiner3<V1, V2, V3>;
    static whenAllSucceed<V1 extends unknown, V2 extends unknown>(paramfuture1: ClosingFuture<V1>, paramfuture2: ClosingFuture<V2>): ClosingFuture$Combiner2<V1, V2>;
    static whenAllSucceed(paramfuture1: ClosingFuture<Object>, paramfuture2: ClosingFuture<Object>, paramfuture3: ClosingFuture<Object>, paramfuture4: ClosingFuture<Object>, paramfuture5: ClosingFuture<Object>, paramfuture6: ClosingFuture<Object>, ...parammoreFutures: ClosingFuture<Object>[]): ClosingFuture$Combiner;
    static whenAllSucceed(paramfutures: ClosingFuture<Object>[]): ClosingFuture$Combiner;
    static withoutCloser<V extends unknown, U extends unknown>(paramfunction: (param0: V) => ListenableFuture<U>): (param0: ClosingFuture$DeferredCloser, param1: V) => ClosingFuture<U>;
    constructor(arg0: ListenableFuture<Object>, arg1: () => V)
    // private state: ClosingFuture$State<V>;
    // private becomeSubsumedInto(otherCloseables: { [key: string]: any }): void;
    cancel(mayInterruptIfRunning: boolean): boolean;
    catching<X extends Throwable>(exceptionType: Class<X>, fallback: (param0: ClosingFuture$DeferredCloser, param1: X) => V, executor: Executor): ClosingFuture<V>;
    catchingAsync<X extends Throwable>(exceptionType: Class<X>, fallback: (param0: ClosingFuture$DeferredCloser, param1: X) => ClosingFuture<V>, executor: Executor): ClosingFuture<V>;
    // private catchingAsyncMoreGeneric<X extends Throwable, W extends V>(exceptionType: Class<X>, fallback: (param0: ClosingFuture$DeferredCloser, param1: X) => ClosingFuture<W>, executor: Executor): ClosingFuture<V>;
    // private catchingMoreGeneric<X extends Throwable, W extends V>(exceptionType: Class<X>, fallback: (param0: ClosingFuture$DeferredCloser, param1: X) => W, executor: Executor): ClosingFuture<V>;
    // private derive<U extends unknown>(future: FluentFuture<U>): ClosingFuture<U>;
    finishToFuture(): FluentFuture<V>;
    finishToValueAndCloser(consumer: (param0: ClosingFuture$ValueAndCloser<V>) => void, executor: Executor): void;
    statusFuture(): ListenableFuture<Object>;
    toString(): string;
    transform<U extends unknown>(function_: (param0: ClosingFuture$DeferredCloser, param1: V) => U, executor: Executor): ClosingFuture<U>;
    transformAsync<U extends unknown>(function_: (param0: ClosingFuture$DeferredCloser, param1: V) => ClosingFuture<U>, executor: Executor): ClosingFuture<U>;
    whenClosedCountDown(): CountDownLatch;
}