import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { IntFunction } from '../../../../../java/util/function/IntFunction.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { BaseStream } from '../../../../../java/util/stream/BaseStream.d.ts'
import type { Collector } from '../../../../../java/util/stream/Collector.d.ts'
import type { DoubleStream } from '../../../../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { IOBaseStream } from '../../../../../org/apache/commons/io/function/IOBaseStream.d.ts'
import type { IOBiConsumer } from '../../../../../org/apache/commons/io/function/IOBiConsumer.d.ts'
import type { IOBiFunction } from '../../../../../org/apache/commons/io/function/IOBiFunction.d.ts'
import type { IOBinaryOperator } from '../../../../../org/apache/commons/io/function/IOBinaryOperator.d.ts'
import type { IOComparator } from '../../../../../org/apache/commons/io/function/IOComparator.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { IOFunction } from '../../../../../org/apache/commons/io/function/IOFunction.d.ts'
import type { IOIterator } from '../../../../../org/apache/commons/io/function/IOIterator.d.ts'
import type { IOPredicate } from '../../../../../org/apache/commons/io/function/IOPredicate.d.ts'
import type { IORunnable } from '../../../../../org/apache/commons/io/function/IORunnable.d.ts'
import type { IOSpliterator } from '../../../../../org/apache/commons/io/function/IOSpliterator.d.ts'
import type { IOSupplier } from '../../../../../org/apache/commons/io/function/IOSupplier.d.ts'
export interface IOStream<T extends unknown> extends Object, IOBaseStream<T, IOStream<T>, Stream<T>> {
    allMatch(arg0: (param0: T) => boolean): boolean;
    anyMatch(arg0: (param0: T) => boolean): boolean;
    asBaseStream(): BaseStream<T, Stream<T>>;
    close(): void;
    collect<R extends unknown, A extends unknown>(arg0: Collector<T, A, R>): R;
    collect<R extends unknown>(arg0: () => R, arg1: (param0: R, param1: T) => void, arg2: (param0: R, param1: R) => void): R;
    count(): number;
    distinct(): IOStream<T>;
    filter(arg0: (param0: T) => boolean): IOStream<T>;
    findAny(): Optional<T>;
    findFirst(): Optional<T>;
    flatMap<R extends unknown>(arg0: (param0: T) => IOStream<R>): IOStream<R>;
    flatMapToDouble(arg0: (param0: T) => DoubleStream): DoubleStream;
    flatMapToInt(arg0: (param0: T) => IntStream): IntStream;
    flatMapToLong(arg0: (param0: T) => LongStream): LongStream;
    forAll(arg0: (param0: T) => void): void;
    forAll(arg0: (param0: T) => void, arg1: (param0: number, param1: IOException) => IOException): void;
    forEach(arg0: (param0: T) => void): void;
    forEachOrdered(arg0: (param0: T) => void): void;
    isParallel(): boolean;
    iterator(): IOIterator<T>;
    limit(arg0: number): IOStream<T>;
    map<R extends unknown>(arg0: (param0: T) => R): IOStream<R>;
    mapToDouble(arg0: (param0: T) => number): DoubleStream;
    mapToInt(arg0: (param0: T) => number): IntStream;
    mapToLong(arg0: (param0: T) => number): LongStream;
    max(arg0: (param0: T, param1: T) => number): Optional<T>;
    min(arg0: (param0: T, param1: T) => number): Optional<T>;
    noneMatch(arg0: (param0: T) => boolean): boolean;
    onClose(arg0: () => void): IOStream<T>;
    parallel(): IOStream<T>;
    peek(arg0: (param0: T) => void): IOStream<T>;
    reduce(arg0: T, arg1: (param0: T, param1: T) => T): T;
    reduce<U extends unknown>(arg0: U, arg1: (param0: U, param1: T) => U, arg2: (param0: U, param1: U) => U): U;
    reduce(arg0: (param0: T, param1: T) => T): Optional<T>;
    sequential(): IOStream<T>;
    skip(arg0: number): IOStream<T>;
    sorted(): IOStream<T>;
    sorted(arg0: (param0: T, param1: T) => number): IOStream<T>;
    spliterator(): IOSpliterator<T>;
    toArray(): Object[];
    toArray<A extends unknown>(arg0: (param0: number) => A[]): A[];
    unordered(): IOStream<T>;
}