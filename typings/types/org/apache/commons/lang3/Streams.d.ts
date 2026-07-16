import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Streams$FailableStream } from '../../../../org/apache/commons/lang3/Streams$FailableStream.d.ts'
export class Streams extends Object {
    static stream<O extends unknown>(paramarg0: O[]): Streams$FailableStream<O>;
    static stream<O extends unknown>(paramarg0: Stream<O>): Streams$FailableStream<O>;
    static toArray<O extends unknown>(paramarg0: Class<O>): Collector<O, Object, O[]>;
    constructor()
}