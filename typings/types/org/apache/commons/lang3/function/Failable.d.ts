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
    static accept<E extends Throwable>(paramarg0: (param0: number) => void, paramarg1: number): void;
    static accept<T extends unknown, E extends Throwable>(paramarg0: (param0: T) => void, paramarg1: T): void;
    static accept<T extends unknown, U extends unknown, E extends Throwable>(paramarg0: (param0: T, param1: U) => void, paramarg1: T, paramarg2: U): void;
    static apply<T extends unknown, R extends unknown, E extends Throwable>(paramarg0: (param0: T) => R, paramarg1: T): R;
    static apply<T extends unknown, U extends unknown, R extends unknown, E extends Throwable>(paramarg0: (param0: T, param1: U) => R, paramarg1: T, paramarg2: U): R;
    static applyAsDouble<E extends Throwable>(paramarg0: (param0: number, param1: number) => number, paramarg1: number, paramarg2: number): number;
    static applyNonNull<T extends unknown, R extends unknown, E extends Throwable>(paramarg0: T, paramarg1: (param0: Object) => R): R;
    static applyNonNull<T extends unknown, U extends unknown, R extends unknown, E1 extends Throwable, E2 extends Throwable>(paramarg0: T, paramarg1: (param0: Object) => U, paramarg2: (param0: Object) => R): R;
    static applyNonNull<T extends unknown, U extends unknown, V extends unknown, R extends unknown, E1 extends Throwable, E2 extends Throwable, E3 extends Throwable>(paramarg0: T, paramarg1: (param0: Object) => U, paramarg2: (param0: Object) => V, paramarg3: (param0: Object) => R): R;
    static asBiConsumer<T extends unknown, U extends unknown>(paramarg0: (param0: T, param1: U) => void): (param0: T, param1: U) => void;
    static asBiFunction<T extends unknown, U extends unknown, R extends unknown>(paramarg0: (param0: T, param1: U) => R): (param0: T, param1: U) => R;
    static asBiPredicate<T extends unknown, U extends unknown>(paramarg0: (param0: T, param1: U) => boolean): (param0: T, param1: U) => boolean;
    static asCallable<V extends unknown>(paramarg0: () => V): () => V;
    static asConsumer<T extends unknown>(paramarg0: (param0: T) => void): (param0: T) => void;
    static asFunction<T extends unknown, R extends unknown>(paramarg0: (param0: T) => R): (param0: T) => R;
    static asPredicate<T extends unknown>(paramarg0: (param0: T) => boolean): (param0: T) => boolean;
    static asRunnable(paramarg0: () => void): () => void;
    static asSupplier<T extends unknown>(paramarg0: () => T): () => T;
    static call<V extends unknown, E extends Throwable>(paramarg0: () => V): V;
    static get<T extends unknown, E extends Throwable>(paramarg0: () => T): T;
    static getAsBoolean<E extends Throwable>(paramarg0: () => boolean): boolean;
    static getAsDouble<E extends Throwable>(paramarg0: () => number): number;
    static getAsInt<E extends Throwable>(paramarg0: () => number): number;
    static getAsLong<E extends Throwable>(paramarg0: () => number): number;
    static getAsShort<E extends Throwable>(paramarg0: () => number): number;
    static rethrow(paramarg0: Throwable): RuntimeException;
    static run<E extends Throwable>(paramarg0: () => void): void;
    static stream<E extends unknown>(paramarg0: E[]): Streams$FailableStream<E>;
    static stream<T extends unknown>(paramarg0: Stream<T>): Streams$FailableStream<T>;
    static test<T extends unknown, E extends Throwable>(paramarg0: (param0: T) => boolean, paramarg1: T): boolean;
    static test<T extends unknown, U extends unknown, E extends Throwable>(paramarg0: (param0: T, param1: U) => boolean, paramarg1: T, paramarg2: U): boolean;
    static tryWithResources(paramarg0: () => void, paramarg1: (param0: Throwable) => void, paramarg2: () => void[]): void;
    static tryWithResources(paramarg0: () => void, paramarg1: () => void[]): void;
    private constructor()
}