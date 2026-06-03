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
    static concat(paramstreams: Object | null): Stream<Object>;
    static concat(paramstreams: (Object | null)[]): DoubleStream;
    static concat(paramstreams: (Object | null)[]): IntStream;
    static concat(paramstreams: (Object | null)[]): LongStream;
    static findLast(paramstream: Stream<Object>): Optional_2<Object>;
    static findLast(paramstream: DoubleStream): OptionalDouble;
    static findLast(paramstream: IntStream): OptionalInt;
    static findLast(paramstream: LongStream): OptionalLong;
    static forEachPair(paramstreamA: Stream<Object>, paramstreamB: Stream<Object>, paramconsumer: (param0: Object | null, param1: Object | null) => void): void;
    static mapWithIndex(paramstream: DoubleStream, paramfunction: Streams$DoubleFunctionWithIndex<Object>): Stream<Object>;
    static mapWithIndex(paramstream: IntStream, paramfunction: Streams$IntFunctionWithIndex<Object>): Stream<Object>;
    static mapWithIndex(paramstream: LongStream, paramfunction: Streams$LongFunctionWithIndex<Object>): Stream<Object>;
    static mapWithIndex(paramstream: Stream<Object>, paramfunction: Streams$FunctionWithIndex<Object, Object>): Stream<Object>;
    static stream(paramoptional: Optional<Object>): Stream<Object>;
    static stream(paramiterable: (Object | null)[]): Stream<Object>;
    static stream(paramcollection: E[]): Stream<Object>;
    static stream(paramiterator: Iterator<Object>): Stream<Object>;
    static stream(paramoptional: Optional_2<Object>): Stream<Object>;
    static stream(paramoptional: OptionalDouble): DoubleStream;
    static stream(paramoptional: OptionalInt): IntStream;
    static stream(paramoptional: OptionalLong): LongStream;
    static zip(paramstreamA: Stream<Object>, paramstreamB: Stream<Object>, paramfunction: (param0: Object | null, param1: Object | null) => Object | null): Stream<Object>;
    private constructor()
}