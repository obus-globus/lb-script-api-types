import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { ForwardingSink } from '../../../okio/ForwardingSink.d.ts'
import type { Sink } from '../../../okio/Sink.d.ts'
export class Exchange$RequestBodySink extends ForwardingSink {
    constructor(null_: Exchange$RequestBodySink, delegate: Sink, contentLength: number, isSocket: boolean)
    // private bytesReceived: number;
    // private closed: boolean;
    // private completed: boolean;
    // private contentLength: number;
    // private invokeStartEvent: boolean;
    // private isSocket: boolean;
    close(): void;
    // private complete(e: IOException | null): IOException | null;
    flush(): void;
    write(source: Buffer, byteCount: number): void;
}