import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Streams$FailableStream } from '../../../../org/apache/commons/lang3/Streams$FailableStream.d.ts'
export class Streams extends Object {
    static stream(paramarg0: E[]): Streams$FailableStream<Object>;
    static stream(paramarg0: Stream<Object>): Streams$FailableStream<Object>;
    static toArray(paramarg0: Class<Object>): Collector<Object, Object, Object>;
    constructor()
}