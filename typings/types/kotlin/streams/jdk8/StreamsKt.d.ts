import type { DoubleStream } from '../../../java/util/stream/DoubleStream.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { LongStream } from '../../../java/util/stream/LongStream.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
export class StreamsKt extends Object {
    static asSequence(paramarg0: Stream<Object>): Sequence<Object>;
    static asSequence(paramarg0: DoubleStream): Sequence<number>;
    static asSequence(paramarg0: IntStream): Sequence<number>;
    static asSequence(paramarg0: LongStream): Sequence<number>;
    static asStream(paramarg0: Sequence<Object>): Stream<Object>;
    static toList(paramarg0: Stream<Object>): (Object | null)[];
    static toList(paramarg0: DoubleStream): number[];
    static toList(paramarg0: IntStream): number[];
    static toList(paramarg0: LongStream): number[];
}