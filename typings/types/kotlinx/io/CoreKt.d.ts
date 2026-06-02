import type { Object } from '../../java/lang/Object.d.ts'
import type { RawSink } from '../../kotlinx/io/RawSink.d.ts'
import type { RawSource } from '../../kotlinx/io/RawSource.d.ts'
import type { Sink } from '../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../kotlinx/io/Source.d.ts'
export class CoreKt extends Object {
    static buffered(paramarg0: RawSink): Sink;
    static buffered(paramarg0: RawSource): Source;
    static discardingSink(): RawSink;
}