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
    allMatch(arg0: (param0: number) => kotlin.Boolean): boolean;
    anyMatch(arg0: (param0: number) => kotlin.Boolean): boolean;
    average(): OptionalDouble;
    boxed(): Stream<number>;
    collect<R extends Object | number | string | boolean>(arg0: () => R, arg1: (param0: R, param1: Object | null) => void, arg2: (param0: R, param1: R) => void): R;
    count(): number;
    distinct(): DoubleStream;
    dropWhile(arg0: (param0: number) => kotlin.Boolean): DoubleStream;
    filter(arg0: (param0: number) => kotlin.Boolean): DoubleStream;
    findAny(): OptionalDouble;
    findFirst(): OptionalDouble;
    flatMap(arg0: (param0: DoubleStream) => unknown): DoubleStream;
    forEach(arg0: (param0: number) => void): void;
    forEachOrdered(arg0: (param0: number) => void): void;
    iterator(): PrimitiveIterator$OfDouble;
    limit(arg0: number): DoubleStream;
    map(arg0: (param0: number) => kotlin.Double): DoubleStream;
    mapMulti(arg0: (param0: number, param1: (param0: number) => void) => void): DoubleStream;
    mapToInt(arg0: (param0: number) => kotlin.Int): IntStream;
    mapToLong(arg0: (param0: number) => kotlin.Long): LongStream;
    mapToObj(arg0: (param0: U) => unknown): Stream<U>;
    max(): OptionalDouble;
    min(): OptionalDouble;
    noneMatch(arg0: (param0: number) => kotlin.Boolean): boolean;
    parallel(): DoubleStream;
    peek(arg0: (param0: number) => void): DoubleStream;
    reduce(arg0: (param0: number, param1: number) => kotlin.Double): OptionalDouble;
    reduce(arg0: number, arg1: (param0: number, param1: number) => kotlin.Double): number;
    sequential(): DoubleStream;
    skip(arg0: number): DoubleStream;
    sorted(): DoubleStream;
    spliterator(): Spliterator$OfDouble;
    sum(): number;
    summaryStatistics(): DoubleSummaryStatistics;
    takeWhile(arg0: (param0: number) => kotlin.Boolean): DoubleStream;
    toArray(): number[];
}