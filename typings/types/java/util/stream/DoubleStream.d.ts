import type { DoubleSummaryStatistics } from '../../../java/util/DoubleSummaryStatistics.d.ts'
import type { OptionalDouble } from '../../../java/util/OptionalDouble.d.ts'
import type { PrimitiveIterator$OfDouble } from '../../../java/util/PrimitiveIterator$OfDouble.d.ts'
import type { Spliterator$OfDouble } from '../../../java/util/Spliterator$OfDouble.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { DoubleBinaryOperator } from '../../../java/util/function/DoubleBinaryOperator.d.ts'
import type { DoubleConsumer } from '../../../java/util/function/DoubleConsumer.d.ts'
import type { DoubleFunction } from '../../../java/util/function/DoubleFunction.d.ts'
import type { DoublePredicate } from '../../../java/util/function/DoublePredicate.d.ts'
import type { DoubleToIntFunction } from '../../../java/util/function/DoubleToIntFunction.d.ts'
import type { DoubleToLongFunction } from '../../../java/util/function/DoubleToLongFunction.d.ts'
import type { DoubleUnaryOperator } from '../../../java/util/function/DoubleUnaryOperator.d.ts'
import type { ObjDoubleConsumer } from '../../../java/util/function/ObjDoubleConsumer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { BaseStream } from '../../../java/util/stream/BaseStream.d.ts'
import type { DoubleStream$DoubleMapMultiConsumer } from '../../../java/util/stream/DoubleStream$DoubleMapMultiConsumer.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface DoubleStream extends BaseStream<number, DoubleStream>, Object {
    allMatch(arg0: (param0: number) => boolean): boolean;
    anyMatch(arg0: (param0: number) => boolean): boolean;
    average(): OptionalDouble;
    boxed(): Stream<number>;
    close(): void;
    collect<R extends Object | number | string | boolean>(arg0: () => R, arg1: (param0: R, param1: number) => void, arg2: (param0: R, param1: R) => void): R;
    count(): number;
    distinct(): DoubleStream;
    dropWhile(arg0: (param0: number) => boolean): DoubleStream;
    filter(arg0: (param0: number) => boolean): DoubleStream;
    findAny(): OptionalDouble;
    findFirst(): OptionalDouble;
    flatMap(arg0: (param0: number) => DoubleStream): DoubleStream;
    forEach(arg0: (param0: number) => void): void;
    forEachOrdered(arg0: (param0: number) => void): void;
    iterator(): PrimitiveIterator$OfDouble;
    limit(arg0: number): DoubleStream;
    map(arg0: (param0: number) => number): DoubleStream;
    mapMulti(arg0: (param0: number, param1: (param0: number) => void) => void): DoubleStream;
    mapToInt(arg0: (param0: number) => number): IntStream;
    mapToLong(arg0: (param0: number) => number): LongStream;
    mapToObj<U extends Object | number | string | boolean>(arg0: (param0: number) => U): Stream<U>;
    max(): OptionalDouble;
    min(): OptionalDouble;
    noneMatch(arg0: (param0: number) => boolean): boolean;
    parallel(): DoubleStream;
    peek(arg0: (param0: number) => void): DoubleStream;
    reduce(arg0: (param0: number, param1: number) => number): OptionalDouble;
    reduce(arg0: number, arg1: (param0: number, param1: number) => number): number;
    sequential(): DoubleStream;
    skip(arg0: number): DoubleStream;
    sorted(): DoubleStream;
    spliterator(): Spliterator$OfDouble;
    sum(): number;
    summaryStatistics(): DoubleSummaryStatistics;
    takeWhile(arg0: (param0: number) => boolean): DoubleStream;
    toArray(): number[];
}