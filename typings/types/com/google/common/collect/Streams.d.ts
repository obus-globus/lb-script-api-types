import type { Optional } from '../../../../com/google/common/base/Optional.d.ts'
import type { Streams$DoubleFunctionWithIndex } from '../../../../com/google/common/collect/Streams$DoubleFunctionWithIndex.d.ts'
import type { Streams$FunctionWithIndex } from '../../../../com/google/common/collect/Streams$FunctionWithIndex.d.ts'
import type { Streams$IntFunctionWithIndex } from '../../../../com/google/common/collect/Streams$IntFunctionWithIndex.d.ts'
import type { Streams$LongFunctionWithIndex } from '../../../../com/google/common/collect/Streams$LongFunctionWithIndex.d.ts'
import type { Optional as Optional_2 } from '../../../../java/util/Optional.d.ts'
import type { OptionalDouble } from '../../../../java/util/OptionalDouble.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { OptionalLong } from '../../../../java/util/OptionalLong.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../java/util/function/BiFunction.d.ts'
import type { DoubleStream } from '../../../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Streams extends Object {
    static concat<T extends unknown>(...paramstreams: Stream<T>[]): Stream<T>;
    static concat(...paramstreams: DoubleStream[]): DoubleStream;
    static concat(...paramstreams: IntStream[]): IntStream;
    static concat(...paramstreams: LongStream[]): LongStream;
    static findLast<T extends unknown>(paramstream: Stream<T>): Optional_2<T>;
    static findLast(paramstream: DoubleStream): OptionalDouble;
    static findLast(paramstream: IntStream): OptionalInt;
    static findLast(paramstream: LongStream): OptionalLong;
    static forEachPair<A extends unknown, B extends unknown>(paramstreamA: Stream<A>, paramstreamB: Stream<B>, paramconsumer: (param0: Object, param1: Object) => void): void;
    static mapWithIndex<R extends unknown>(paramstream: DoubleStream, paramfunction: Streams$DoubleFunctionWithIndex<R>): Stream<R>;
    static mapWithIndex<R extends unknown>(paramstream: IntStream, paramfunction: Streams$IntFunctionWithIndex<R>): Stream<R>;
    static mapWithIndex<R extends unknown>(paramstream: LongStream, paramfunction: Streams$LongFunctionWithIndex<R>): Stream<R>;
    static mapWithIndex<T extends unknown, R extends unknown>(paramstream: Stream<T>, paramfunction: Streams$FunctionWithIndex<Object, R>): Stream<R>;
    static stream<T extends unknown>(paramoptional: Optional<T>): Stream<T>;
    static stream<T extends unknown>(paramiterable: T[]): Stream<T>;
    static stream<T extends unknown>(paramcollection: T[]): Stream<T>;
    static stream<T extends unknown>(paramiterator: Iterator<T>): Stream<T>;
    static stream<T extends unknown>(paramoptional: Optional_2<T>): Stream<T>;
    static stream(paramoptional: OptionalDouble): DoubleStream;
    static stream(paramoptional: OptionalInt): IntStream;
    static stream(paramoptional: OptionalLong): LongStream;
    static zip<A extends unknown, B extends unknown, R extends unknown>(paramstreamA: Stream<A>, paramstreamB: Stream<B>, paramfunction: (param0: Object, param1: Object) => R): Stream<R>;
    private constructor()
}