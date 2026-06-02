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
    static accept(paramarg0: (param0: Object | null) => void, paramarg1: Object | null): void;
    static accept(paramarg0: (param0: Object | null, param1: Object | null) => void, paramarg1: Object | null, paramarg2: Object | null): void;
    static apply(paramarg0: (param0: Object | null) => Object | null, paramarg1: Object | null): Object | null;
    static apply(paramarg0: (param0: Object | null, param1: Object | null) => Object | null, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static asBiConsumer(paramarg0: (param0: Object | null, param1: Object | null) => void): (param0: Object | null, param1: Object | null) => void;
    static asBiFunction(paramarg0: (param0: Object | null, param1: Object | null) => Object | null): (param0: Object | null, param1: Object | null) => Object | null;
    static asBiPredicate(paramarg0: (param0: Object | null, param1: Object | null) => Object | null): (param0: Object | null, param1: Object | null) => kotlin.Boolean;
    static asCallable(paramarg0: () => Object | null): () => Object | null;
    static asConsumer(paramarg0: (param0: Object | null) => void): (param0: Object | null) => void;
    static asFunction(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => Object | null;
    static asPredicate(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Boolean;
    static asRunnable(paramarg0: () => void): () => void;
    static asSupplier(paramarg0: () => Object | null): () => Object | null;
    static call(paramarg0: () => Object | null): Object | null;
    static get(paramarg0: () => Object | null): Object | null;
    static rethrow(paramarg0: Throwable): RuntimeException;
    static run(paramarg0: () => void): void;
    static stream(paramarg0: E[]): Streams$FailableStream<Object>;
    static stream(paramarg0: Stream<Object>): Streams$FailableStream<Object>;
    static test(paramarg0: (param0: Object | null) => Object | null, paramarg1: Object | null): boolean;
    static test(paramarg0: (param0: Object | null, param1: Object | null) => Object | null, paramarg1: Object | null, paramarg2: Object | null): boolean;
    static tryWithResources(paramarg0: () => void, paramarg1: (param0: Throwable) => void, paramarg2: Object | null): void;
    static tryWithResources(paramarg0: () => void, paramarg1: Object | null): void;
    constructor()
}