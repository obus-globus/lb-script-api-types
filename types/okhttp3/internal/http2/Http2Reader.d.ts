import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Header } from '../../../okhttp3/internal/http2/Header.d.ts'
import type { Hpack$Reader } from '../../../okhttp3/internal/http2/Hpack$Reader.d.ts'
import type { Http2Reader$Companion } from '../../../okhttp3/internal/http2/Http2Reader$Companion.d.ts'
import type { Http2Reader$ContinuationSource } from '../../../okhttp3/internal/http2/Http2Reader$ContinuationSource.d.ts'
import type { Http2Reader$Handler } from '../../../okhttp3/internal/http2/Http2Reader$Handler.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
export class Http2Reader extends Object implements Closeable {
    static Companion: Http2Reader$Companion;
    constructor(source: BufferedSource, client: boolean)
    // private client: boolean;
    // private continuation: Http2Reader$ContinuationSource;
    // private hpackReader: Hpack$Reader;
    // private source: BufferedSource;
    close(): void;
    nextFrame(requireSettings: boolean, handler: Http2Reader$Handler): boolean;
    readConnectionPreface(handler: Http2Reader$Handler): void;
    // private readData(handler: Http2Reader$Handler, length: number, flags: number, streamId: number): void;
    // private readGoAway(handler: Http2Reader$Handler, length: number, flags: number, streamId: number): void;
    // private readHeaderBlock(length: number, padding: number, flags: number, streamId: number): Header[];
    // private readHeaders(handler: Http2Reader$Handler, length: number, flags: number, streamId: number): void;
    // private readPing(handler: Http2Reader$Handler, length: number, flags: number, streamId: number): void;
    // private readPriority(handler: Http2Reader$Handler, streamId: number): void;
    // private readPriority(handler: Http2Reader$Handler, length: number, flags: number, streamId: number): void;
    // private readPushPromise(handler: Http2Reader$Handler, length: number, flags: number, streamId: number): void;
    // private readRstStream(handler: Http2Reader$Handler, length: number, flags: number, streamId: number): void;
    // private readSettings(handler: Http2Reader$Handler, length: number, flags: number, streamId: number): void;
    // private readWindowUpdate(handler: Http2Reader$Handler, length: number, flags: number, streamId: number): void;
}