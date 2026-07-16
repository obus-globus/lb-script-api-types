import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { BiPredicate } from '../../../../java/util/function/BiPredicate.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Functions$FailableBiConsumer } from '../../../../org/apache/commons/lang3/Functions$FailableBiConsumer.d.ts'
import type { Functions$FailableBiFunction } from '../../../../org/apache/commons/lang3/Functions$FailableBiFunction.d.ts'
import type { Functions$FailableBiPredicate } from '../../../../org/apache/commons/lang3/Functions$FailableBiPredicate.d.ts'
import type { Functions$FailableCallable } from '../../../../org/apache/commons/lang3/Functions$FailableCallable.d.ts'
import type { Functions$FailableConsumer } from '../../../../org/apache/commons/lang3/Functions$FailableConsumer.d.ts'
import type { Functions$FailableFunction } from '../../../../org/apache/commons/lang3/Functions$FailableFunction.d.ts'
import type { Functions$FailablePredicate } from '../../../../org/apache/commons/lang3/Functions$FailablePredicate.d.ts'
import type { Functions$FailableRunnable } from '../../../../org/apache/commons/lang3/Functions$FailableRunnable.d.ts'
import type { Functions$FailableSupplier } from '../../../../org/apache/commons/lang3/Functions$FailableSupplier.d.ts'
import type { Streams$FailableStream } from '../../../../org/apache/commons/lang3/Streams$FailableStream.d.ts'
export class Functions extends Object {
    static accept<O extends unknown, T extends Throwable>(paramarg0: (param0: O) => void, paramarg1: O): void;
    static accept<O1 extends unknown, O2 extends unknown, T extends Throwable>(paramarg0: (param0: O1, param1: O2) => void, paramarg1: O1, paramarg2: O2): void;
    static apply<I extends unknown, O extends unknown, T extends Throwable>(paramarg0: (param0: I) => O, paramarg1: I): O;
    static apply<O1 extends unknown, O2 extends unknown, O extends unknown, T extends Throwable>(paramarg0: (param0: O1, param1: O2) => O, paramarg1: O1, paramarg2: O2): O;
    static asBiConsumer<O1 extends unknown, O2 extends unknown>(paramarg0: (param0: O1, param1: O2) => void): (param0: O1, param1: O2) => void;
    static asBiFunction<O1 extends unknown, O2 extends unknown, O extends unknown>(paramarg0: (param0: O1, param1: O2) => O): (param0: O1, param1: O2) => O;
    static asBiPredicate<O1 extends unknown, O2 extends unknown>(paramarg0: (param0: O1, param1: O2) => boolean): (param0: O1, param1: O2) => boolean;
    static asCallable<O extends unknown>(paramarg0: () => O): () => O;
    static asConsumer<I extends unknown>(paramarg0: (param0: I) => void): (param0: I) => void;
    static asFunction<I extends unknown, O extends unknown>(paramarg0: (param0: I) => O): (param0: I) => O;
    static asPredicate<I extends unknown>(paramarg0: (param0: I) => boolean): (param0: I) => boolean;
    static asRunnable(paramarg0: () => void): () => void;
    static asSupplier<O extends unknown>(paramarg0: () => O): () => O;
    static call<O extends unknown, T extends Throwable>(paramarg0: () => O): O;
    static get<O extends unknown, T extends Throwable>(paramarg0: () => O): O;
    static rethrow(paramarg0: Throwable): RuntimeException;
    static run<T extends Throwable>(paramarg0: () => void): void;
    static stream<O extends unknown>(paramarg0: O[]): Streams$FailableStream<O>;
    static stream<O extends unknown>(paramarg0: Stream<O>): Streams$FailableStream<O>;
    static test<O extends unknown, T extends Throwable>(paramarg0: (param0: O) => boolean, paramarg1: O): boolean;
    static test<O1 extends unknown, O2 extends unknown, T extends Throwable>(paramarg0: (param0: O1, param1: O2) => boolean, paramarg1: O1, paramarg2: O2): boolean;
    static tryWithResources(paramarg0: () => void, paramarg1: (param0: Throwable) => void, paramarg2: () => void[]): void;
    static tryWithResources(paramarg0: () => void, paramarg1: () => void[]): void;
    constructor()
}