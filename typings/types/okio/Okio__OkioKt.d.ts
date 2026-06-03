import type { Object } from '../java/lang/Object.d.ts'
import type { BufferedSink } from '../okio/BufferedSink.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Source } from '../okio/Source.d.ts'
export class Okio__OkioKt extends Object {
    static blackhole(): Sink;
    static buffer(paramarg0: Sink): BufferedSink;
    static buffer(paramarg0: Source): BufferedSource;
    static use(paramarg0: Object | null, paramarg1: (param0: Object | null) => Object | null): Object | null;
}