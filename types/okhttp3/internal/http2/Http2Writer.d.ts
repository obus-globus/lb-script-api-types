import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Lockable } from '../../../okhttp3/internal/concurrent/Lockable.d.ts'
import type { ErrorCode } from '../../../okhttp3/internal/http2/ErrorCode.d.ts'
import type { Header } from '../../../okhttp3/internal/http2/Header.d.ts'
import type { Hpack$Writer } from '../../../okhttp3/internal/http2/Hpack$Writer.d.ts'
import type { Http2Writer$Companion } from '../../../okhttp3/internal/http2/Http2Writer$Companion.d.ts'
import type { Settings } from '../../../okhttp3/internal/http2/Settings.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { BufferedSink } from '../../../okio/BufferedSink.d.ts'
export class Http2Writer extends Object implements Closeable, Lockable {
    static Companion: Http2Writer$Companion;
    constructor(sink: BufferedSink, client: boolean)
    // private client: boolean;
    // private closed: boolean;
    // private hpackBuffer: Buffer;
    readonly hpackWriter: Hpack$Writer;
    // private maxFrameSize: number;
    // private sink: BufferedSink;
    applyAndAckSettings(peerSettings: Settings): void;
    close(): void;
    connectionPreface(): void;
    data(outFinished: boolean, streamId: number, source: Buffer | null, byteCount: number): void;
    dataFrame(streamId: number, flags: number, buffer: Buffer | null, byteCount: number): void;
    flush(): void;
    frameHeader(streamId: number, length: number, type: number, flags: number): void;
    goAway(lastGoodStreamId: number, errorCode: ErrorCode, debugData: number[]): void;
    headers(outFinished: boolean, streamId: number, headerBlock: Header[]): void;
    maxDataLength(): number;
    ping(ack: boolean, payload1: number, payload2: number): void;
    pushPromise(streamId: number, promisedStreamId: number, requestHeaders: Header[]): void;
    rstStream(streamId: number, errorCode: ErrorCode): void;
    settings(settings: Settings): void;
    windowUpdate(streamId: number, windowSizeIncrement: number): void;
    // private writeContinuationFrames(streamId: number, byteCount: number): void;
}