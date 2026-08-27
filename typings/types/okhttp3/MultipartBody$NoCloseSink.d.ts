import type { ForwardingSink } from '../okio/ForwardingSink.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
export class MultipartBody$NoCloseSink extends ForwardingSink {
    constructor(sink: Sink)
    close(): void;
}