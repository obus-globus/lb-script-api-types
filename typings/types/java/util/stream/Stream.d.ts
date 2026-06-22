import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { BinaryOperator } from '../../../java/util/function/BinaryOperator.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { DoubleConsumer } from '../../../java/util/function/DoubleConsumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { IntConsumer } from '../../../java/util/function/IntConsumer.d.ts'
import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { LongConsumer } from '../../../java/util/function/LongConsumer.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { ToDoubleFunction } from '../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../java/util/function/ToLongFunction.d.ts'
import type { BaseStream } from '../../../java/util/stream/BaseStream.d.ts'
import type { Collector } from '../../../java/util/stream/Collector.d.ts'
import type { DoubleStream } from '../../../java/util/stream/DoubleStream.d.ts'
import type { Gatherer } from '../../../java/util/stream/Gatherer.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Stream<T extends Object | number | string | boolean> extends BaseStream<T, Stream<T>>, Object {
    allMatch(arg0: (param0: T) => boolean): boolean;
    anyMatch(arg0: (param0: T) => boolean): boolean;
    close(): void;
    collect<R extends Object | number | string | boolean>(arg0: () => R, arg1: (param0: R, param1: T) => void, arg2: (param0: R, param1: R) => void): R;
    collect<R extends Object | number | string | boolean, A extends Object | number | string | boolean>(arg0: Collector<T, A, R>): R;
    count(): number;
    distinct(): Stream<T>;
    dropWhile(arg0: (param0: T) => boolean): Stream<T>;
    filter(arg0: (param0: T) => boolean): Stream<T>;
    findAny(): Optional<T>;
    findFirst(): Optional<T>;
    flatMap<R extends Object | number | string | boolean>(arg0: (param0: T) => Stream<R>): Stream<R>;
    flatMapToDouble(arg0: (param0: T) => DoubleStream): DoubleStream;
    flatMapToInt(arg0: (param0: T) => IntStream): IntStream;
    flatMapToLong(arg0: (param0: T) => LongStream): LongStream;
    forEach(arg0: (param0: T) => void): void;
    forEachOrdered(arg0: (param0: T) => void): void;
    gather<R extends Object | number | string | boolean>(arg0: Gatherer<T, Object, R>): Stream<R>;
    limit(arg0: number): Stream<T>;
    map<R extends Object | number | string | boolean>(arg0: (param0: T) => R): Stream<R>;
    mapMulti<R extends Object | number | string | boolean>(arg0: (param0: T, param1: (param0: R) => void) => void): Stream<R>;
    mapMultiToDouble(arg0: (param0: T, param1: (param0: number) => void) => void): DoubleStream;
    mapMultiToInt(arg0: (param0: T, param1: (param0: number) => void) => void): IntStream;
    mapMultiToLong(arg0: (param0: T, param1: (param0: number) => void) => void): LongStream;
    mapToDouble(arg0: (param0: T) => number): DoubleStream;
    mapToInt(arg0: (param0: T) => number): IntStream;
    mapToLong(arg0: (param0: T) => number): LongStream;
    max(arg0: (param0: Object) => boolean): Optional<T>;
    min(arg0: (param0: Object) => boolean): Optional<T>;
    noneMatch(arg0: (param0: T) => boolean): boolean;
    peek(arg0: (param0: T) => void): Stream<T>;
    reduce(arg0: T, arg1: (param0: T, param1: Object | null) => Object | null): T;
    reduce<U extends Object | number | string | boolean>(arg0: U, arg1: (param0: U, param1: T) => U, arg2: (param0: U, param1: Object | null) => Object | null): U;
    reduce(arg0: (param0: T, param1: Object | null) => Object | null): Optional<T>;
    skip(arg0: number): Stream<T>;
    sorted(): Stream<T>;
    sorted(arg0: (param0: Object) => boolean): Stream<T>;
    takeWhile(arg0: (param0: T) => boolean): Stream<T>;
    toArray(): Object[];
    toArray<A extends Object | number | string | boolean>(arg0: (param0: number) => A[]): A[];
    toList(): T[];
}