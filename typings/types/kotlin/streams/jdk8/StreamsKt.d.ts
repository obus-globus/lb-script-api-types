import type { DoubleStream } from '../../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
export class StreamsKt extends Object {
    static asSequence<T extends unknown>(self: Stream<T>): Sequence<T>;
    static asSequence(self: DoubleStream): Sequence<number>;
    static asSequence(self: IntStream): Sequence<number>;
    static asSequence(self: LongStream): Sequence<number>;
    static asStream<T extends unknown>(self: Sequence<T>): Stream<T>;
    static toList<T extends unknown>(self: Stream<T>): T[];
    static toList(self: DoubleStream): number[];
    static toList(self: IntStream): number[];
    static toList(self: LongStream): number[];
}