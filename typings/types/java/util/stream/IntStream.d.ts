import type { IntSummaryStatistics } from '../../../java/util/IntSummaryStatistics.d.ts'
import type { OptionalDouble } from '../../../java/util/OptionalDouble.d.ts'
import type { OptionalInt } from '../../../java/util/OptionalInt.d.ts'
import type { PrimitiveIterator$OfInt } from '../../../java/util/PrimitiveIterator$OfInt.d.ts'
import type { Spliterator$OfInt } from '../../../java/util/Spliterator$OfInt.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { IntBinaryOperator } from '../../../java/util/function/IntBinaryOperator.d.ts'
import type { IntConsumer } from '../../../java/util/function/IntConsumer.d.ts'
import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { IntPredicate } from '../../../java/util/function/IntPredicate.d.ts'
import type { IntToDoubleFunction } from '../../../java/util/function/IntToDoubleFunction.d.ts'
import type { IntToLongFunction } from '../../../java/util/function/IntToLongFunction.d.ts'
import type { IntUnaryOperator } from '../../../java/util/function/IntUnaryOperator.d.ts'
import type { ObjIntConsumer } from '../../../java/util/function/ObjIntConsumer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { BaseStream } from '../../../java/util/stream/BaseStream.d.ts'
import type { DoubleStream } from '../../../java/util/stream/DoubleStream.d.ts'
import type { IntStream$IntMapMultiConsumer } from '../../../java/util/stream/IntStream$IntMapMultiConsumer.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface IntStream extends BaseStream<number, IntStream>, Object {
    allMatch(arg0: (param0: number) => boolean): boolean;
    anyMatch(arg0: (param0: number) => boolean): boolean;
    asDoubleStream(): DoubleStream;
    asLongStream(): LongStream;
    average(): OptionalDouble;
    boxed(): Stream<number>;
    collect<R extends Object | number | string | boolean>(arg0: () => R, arg1: (param0: R, param1: number) => void, arg2: (param0: R, param1: R) => void): R;
    count(): number;
    distinct(): IntStream;
    dropWhile(arg0: (param0: number) => boolean): IntStream;
    filter(arg0: (param0: number) => boolean): IntStream;
    findAny(): OptionalInt;
    findFirst(): OptionalInt;
    flatMap(arg0: (param0: number) => IntStream): IntStream;
    forEach(arg0: (param0: number) => void): void;
    forEachOrdered(arg0: (param0: number) => void): void;
    iterator(): PrimitiveIterator$OfInt;
    limit(arg0: number): IntStream;
    map(arg0: (param0: number) => number): IntStream;
    mapMulti(arg0: (param0: number, param1: (param0: number) => void) => void): IntStream;
    mapToDouble(arg0: (param0: number) => number): DoubleStream;
    mapToLong(arg0: (param0: number) => number): LongStream;
    mapToObj<U extends Object | number | string | boolean>(arg0: (param0: number) => U): Stream<U>;
    max(): OptionalInt;
    min(): OptionalInt;
    noneMatch(arg0: (param0: number) => boolean): boolean;
    parallel(): IntStream;
    peek(arg0: (param0: number) => void): IntStream;
    reduce(arg0: (param0: number, param1: number) => number): OptionalInt;
    reduce(arg0: number, arg1: (param0: number, param1: number) => number): number;
    sequential(): IntStream;
    skip(arg0: number): IntStream;
    sorted(): IntStream;
    spliterator(): Spliterator$OfInt;
    sum(): number;
    summaryStatistics(): IntSummaryStatistics;
    takeWhile(arg0: (param0: number) => boolean): IntStream;
    toArray(): number[];
}