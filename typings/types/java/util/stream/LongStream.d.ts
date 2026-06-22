import type { LongSummaryStatistics } from '../../../java/util/LongSummaryStatistics.d.ts'
import type { OptionalDouble } from '../../../java/util/OptionalDouble.d.ts'
import type { OptionalLong } from '../../../java/util/OptionalLong.d.ts'
import type { PrimitiveIterator$OfLong } from '../../../java/util/PrimitiveIterator$OfLong.d.ts'
import type { Spliterator$OfLong } from '../../../java/util/Spliterator$OfLong.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { LongBinaryOperator } from '../../../java/util/function/LongBinaryOperator.d.ts'
import type { LongConsumer } from '../../../java/util/function/LongConsumer.d.ts'
import type { LongFunction } from '../../../java/util/function/LongFunction.d.ts'
import type { LongPredicate } from '../../../java/util/function/LongPredicate.d.ts'
import type { LongToDoubleFunction } from '../../../java/util/function/LongToDoubleFunction.d.ts'
import type { LongToIntFunction } from '../../../java/util/function/LongToIntFunction.d.ts'
import type { LongUnaryOperator } from '../../../java/util/function/LongUnaryOperator.d.ts'
import type { ObjLongConsumer } from '../../../java/util/function/ObjLongConsumer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { BaseStream } from '../../../java/util/stream/BaseStream.d.ts'
import type { DoubleStream } from '../../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream$LongMapMultiConsumer } from '../../../java/util/stream/LongStream$LongMapMultiConsumer.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface LongStream extends BaseStream<number, LongStream>, Object {
    allMatch(arg0: (param0: number) => boolean): boolean;
    anyMatch(arg0: (param0: number) => boolean): boolean;
    asDoubleStream(): DoubleStream;
    average(): OptionalDouble;
    boxed(): Stream<number>;
    close(): void;
    collect<R extends Object | number | string | boolean>(arg0: () => R, arg1: (param0: R, param1: number) => void, arg2: (param0: R, param1: R) => void): R;
    count(): number;
    distinct(): LongStream;
    dropWhile(arg0: (param0: number) => boolean): LongStream;
    filter(arg0: (param0: number) => boolean): LongStream;
    findAny(): OptionalLong;
    findFirst(): OptionalLong;
    flatMap(arg0: (param0: number) => LongStream): LongStream;
    forEach(arg0: (param0: number) => void): void;
    forEachOrdered(arg0: (param0: number) => void): void;
    iterator(): PrimitiveIterator$OfLong;
    limit(arg0: number): LongStream;
    map(arg0: (param0: number) => number): LongStream;
    mapMulti(arg0: (param0: number, param1: (param0: number) => void) => void): LongStream;
    mapToDouble(arg0: (param0: number) => number): DoubleStream;
    mapToInt(arg0: (param0: number) => number): IntStream;
    mapToObj<U extends Object | number | string | boolean>(arg0: (param0: number) => U): Stream<U>;
    max(): OptionalLong;
    min(): OptionalLong;
    noneMatch(arg0: (param0: number) => boolean): boolean;
    parallel(): LongStream;
    peek(arg0: (param0: number) => void): LongStream;
    reduce(arg0: (param0: number, param1: number) => number): OptionalLong;
    reduce(arg0: number, arg1: (param0: number, param1: number) => number): number;
    sequential(): LongStream;
    skip(arg0: number): LongStream;
    sorted(): LongStream;
    spliterator(): Spliterator$OfLong;
    sum(): number;
    summaryStatistics(): LongSummaryStatistics;
    takeWhile(arg0: (param0: number) => boolean): LongStream;
    toArray(): number[];
}