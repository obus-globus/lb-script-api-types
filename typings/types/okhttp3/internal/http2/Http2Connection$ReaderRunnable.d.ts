import type { Object } from '../../../java/lang/Object.d.ts'
import type { ErrorCode } from '../../../okhttp3/internal/http2/ErrorCode.d.ts'
import type { Header } from '../../../okhttp3/internal/http2/Header.d.ts'
import type { Http2Connection } from '../../../okhttp3/internal/http2/Http2Connection.d.ts'
import type { Http2Reader } from '../../../okhttp3/internal/http2/Http2Reader.d.ts'
import type { Http2Reader$Handler } from '../../../okhttp3/internal/http2/Http2Reader$Handler.d.ts'
import type { Settings } from '../../../okhttp3/internal/http2/Settings.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class Http2Connection$ReaderRunnable extends Object implements Http2Reader$Handler {
    constructor(null_: Http2Connection, reader: Http2Reader)
    // private reader: Http2Reader;
    /*not mapped: */ getReader$okhttp(): Http2Reader;
    ackSettings(): void;
    alternateService(streamId: number, origin: string, protocol: ByteString, host: string, port: number, maxAge: number): void;
    applyAndAckSettings(clearPrevious: boolean, settings: Settings): void;
    data(inFinished: boolean, streamId: number, source: BufferedSource, length: number): void;
    goAway(lastGoodStreamId: number, errorCode: ErrorCode, debugData: ByteString): void;
    headers(inFinished: boolean, streamId: number, associatedStreamId: number, headerBlock: Header[]): void;
    invoke(): void;
    ping(ack: boolean, payload1: number, payload2: number): void;
    priority(streamId: number, streamDependency: number, weight: number, exclusive: boolean): void;
    pushPromise(streamId: number, promisedStreamId: number, requestHeaders: Header[]): void;
    rstStream(streamId: number, errorCode: ErrorCode): void;
    settings(clearPrevious: boolean, settings: Settings): void;
    windowUpdate(streamId: number, windowSizeIncrement: number): void;
}