import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enumeration } from '../../../../../java/util/Enumeration.d.ts'
import type { Collector } from '../../../../../java/util/stream/Collector.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Streams$FailableStream } from '../../../../../org/apache/commons/lang3/stream/Streams$FailableStream.d.ts'
export class Streams extends Object {
    static failableStream(paramarg0: Object | null): Streams$FailableStream<Object>;
    static failableStream(paramarg0: Object | null): Streams$FailableStream<Object>;
    static failableStream(paramarg0: (Object | null)[]): Streams$FailableStream<Object>;
    static failableStream(paramarg0: Stream<Object>): Streams$FailableStream<Object>;
    static instancesOf(paramarg0: Class<Object>, paramarg1: Object[]): Stream<Object>;
    static nonNull(paramarg0: Object | null): Stream<Object>;
    static nonNull(paramarg0: Object | null): Stream<Object>;
    static nonNull(paramarg0: (Object | null)[]): Stream<Object>;
    static nonNull(paramarg0: Stream<Object>): Stream<Object>;
    static of(paramarg0: (Object | null)[]): Stream<Object>;
    static of(paramarg0: (Object | null)[]): Stream<Object>;
    static of(paramarg0: Enumeration<Object>): Stream<Object>;
    static of(paramarg0: Iterator<Object>): Stream<Object>;
    static of(paramarg0: Object | null): Stream<Object>;
    static stream(paramarg0: (Object | null)[]): Streams$FailableStream<Object>;
    static stream(paramarg0: Stream<Object>): Streams$FailableStream<Object>;
    static toArray(paramarg0: Class<Object>): Collector<Object, (Object | null)[], Object>;
    constructor()
}