import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Callable } from '../../../../../java/util/concurrent/Callable.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { BiPredicate } from '../../../../../java/util/function/BiPredicate.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { FailableBiConsumer } from '../../../../../org/apache/commons/lang3/function/FailableBiConsumer.d.ts'
import type { FailableBiFunction } from '../../../../../org/apache/commons/lang3/function/FailableBiFunction.d.ts'
import type { FailableBiPredicate } from '../../../../../org/apache/commons/lang3/function/FailableBiPredicate.d.ts'
import type { FailableBooleanSupplier } from '../../../../../org/apache/commons/lang3/function/FailableBooleanSupplier.d.ts'
import type { FailableCallable } from '../../../../../org/apache/commons/lang3/function/FailableCallable.d.ts'
import type { FailableConsumer } from '../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableDoubleBinaryOperator } from '../../../../../org/apache/commons/lang3/function/FailableDoubleBinaryOperator.d.ts'
import type { FailableDoubleConsumer } from '../../../../../org/apache/commons/lang3/function/FailableDoubleConsumer.d.ts'
import type { FailableDoubleSupplier } from '../../../../../org/apache/commons/lang3/function/FailableDoubleSupplier.d.ts'
import type { FailableFunction } from '../../../../../org/apache/commons/lang3/function/FailableFunction.d.ts'
import type { FailableIntConsumer } from '../../../../../org/apache/commons/lang3/function/FailableIntConsumer.d.ts'
import type { FailableIntSupplier } from '../../../../../org/apache/commons/lang3/function/FailableIntSupplier.d.ts'
import type { FailableLongConsumer } from '../../../../../org/apache/commons/lang3/function/FailableLongConsumer.d.ts'
import type { FailableLongSupplier } from '../../../../../org/apache/commons/lang3/function/FailableLongSupplier.d.ts'
import type { FailablePredicate } from '../../../../../org/apache/commons/lang3/function/FailablePredicate.d.ts'
import type { FailableRunnable } from '../../../../../org/apache/commons/lang3/function/FailableRunnable.d.ts'
import type { FailableShortSupplier } from '../../../../../org/apache/commons/lang3/function/FailableShortSupplier.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
import type { Streams$FailableStream } from '../../../../../org/apache/commons/lang3/stream/Streams$FailableStream.d.ts'
export class Failable extends Object {
    static accept(paramarg0: (param0: number) => void, paramarg1: number): void;
    static accept(paramarg0: (param0: Object | null) => void, paramarg1: Object | null): void;
    static accept(paramarg0: (param0: Object | null, param1: Object | null) => void, paramarg1: Object | null, paramarg2: Object | null): void;
    static apply(paramarg0: (param0: Object | null) => Object | null, paramarg1: Object | null): Object | null;
    static apply(paramarg0: (param0: Object | null, param1: Object | null) => Object | null, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static applyAsDouble(paramarg0: (param0: number, param1: number) => number, paramarg1: number, paramarg2: number): number;
    static applyNonNull(paramarg0: Object | null, paramarg1: (param0: Object) => Object | null): Object | null;
    static applyNonNull(paramarg0: Object | null, paramarg1: (param0: Object) => Object | null, paramarg2: (param0: Object) => Object | null): Object | null;
    static applyNonNull(paramarg0: Object | null, paramarg1: (param0: Object) => Object | null, paramarg2: (param0: Object) => Object | null, paramarg3: (param0: Object) => Object | null): Object | null;
    static asBiConsumer(paramarg0: (param0: Object | null, param1: Object | null) => void): (param0: Object | null, param1: Object | null) => void;
    static asBiFunction(paramarg0: (param0: Object | null, param1: Object | null) => Object | null): (param0: Object | null, param1: Object | null) => Object | null;
    static asBiPredicate(paramarg0: (param0: Object | null, param1: Object | null) => boolean): (param0: Object | null, param1: Object | null) => boolean;
    static asCallable(paramarg0: () => Object | null): () => Object | null;
    static asConsumer(paramarg0: (param0: Object | null) => void): (param0: Object | null) => void;
    static asFunction(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => Object | null;
    static asPredicate(paramarg0: (param0: Object | null) => boolean): (param0: Object | null) => boolean;
    static asRunnable(paramarg0: () => void): () => void;
    static asSupplier(paramarg0: () => Object | null): () => Object | null;
    static call(paramarg0: () => Object | null): Object | null;
    static get(paramarg0: () => Object | null): Object | null;
    static getAsBoolean(paramarg0: () => boolean): boolean;
    static getAsDouble(paramarg0: () => number): number;
    static getAsInt(paramarg0: () => number): number;
    static getAsLong(paramarg0: () => number): number;
    static getAsShort(paramarg0: () => number): number;
    static rethrow(paramarg0: Throwable): RuntimeException;
    static run(paramarg0: () => void): void;
    static stream(paramarg0: (Object | null)[]): Streams$FailableStream<Object>;
    static stream(paramarg0: Stream<Object>): Streams$FailableStream<Object>;
    static test(paramarg0: (param0: Object | null) => boolean, paramarg1: Object | null): boolean;
    static test(paramarg0: (param0: Object | null, param1: Object | null) => boolean, paramarg1: Object | null, paramarg2: Object | null): boolean;
    static tryWithResources(paramarg0: () => void, paramarg1: (param0: Throwable) => void, paramarg2: () => void[]): void;
    static tryWithResources(paramarg0: () => void, paramarg1: () => void[]): void;
    private constructor()
}