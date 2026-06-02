import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Lockable } from '../../../okhttp3/internal/concurrent/Lockable.d.ts'
import type { ErrorCode } from '../../../okhttp3/internal/http2/ErrorCode.d.ts'
import type { Header } from '../../../okhttp3/internal/http2/Header.d.ts'
import type { Http2Connection } from '../../../okhttp3/internal/http2/Http2Connection.d.ts'
import type { Http2Stream$Companion } from '../../../okhttp3/internal/http2/Http2Stream$Companion.d.ts'
import type { Http2Stream$FramingSink } from '../../../okhttp3/internal/http2/Http2Stream$FramingSink.d.ts'
import type { Http2Stream$FramingSource } from '../../../okhttp3/internal/http2/Http2Stream$FramingSource.d.ts'
import type { Http2Stream$StreamTimeout } from '../../../okhttp3/internal/http2/Http2Stream$StreamTimeout.d.ts'
import type { WindowCounter } from '../../../okhttp3/internal/http2/flowcontrol/WindowCounter.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
import type { Socket } from '../../../okio/Socket.d.ts'
import type { Timeout } from '../../../okio/Timeout.d.ts'
export class Http2Stream extends Object implements Lockable, Socket {
    static Companion: Http2Stream$Companion;
    static EMIT_BUFFER_SIZE: number;
    constructor(id: number, connection: Http2Connection, outFinished: boolean, inFinished: boolean, headers: Pair<string, string>[] | null)
    readonly connection: Http2Connection;
    // private errorCode: ErrorCode | null;
    /*not mapped: */ getErrorCode$okhttp(): ErrorCode | null;
    // private errorException: IOException | null;
    /*not mapped: */ getErrorException$okhttp(): IOException | null;
    // private hasResponseHeaders: boolean;
    // private headersQueue: Pair<string, string>[][];
    readonly id: number;
    /*not mapped: */ isLocallyInitiated(): boolean;
    /*not mapped: */ isOpen(): boolean;
    /*not mapped: */ isSourceComplete(): boolean;
    readonly readBytes: WindowCounter;
    // private readTimeout: Http2Stream$StreamTimeout;
    /*not mapped: */ getReadTimeout$okhttp(): Http2Stream$StreamTimeout;
    readonly sink: Http2Stream$FramingSink;
    readonly source: Http2Stream$FramingSource;
    writeBytesMaximum: number;
    writeBytesTotal: number;
    // private writeTimeout: Http2Stream$StreamTimeout;
    /*not mapped: */ getWriteTimeout$okhttp(): Http2Stream$StreamTimeout;
    addBytesToWriteWindow(delta: number): void;
    cancel(): void;
    cancelStreamIfNecessary(): void;
    checkOutNotClosed(): void;
    close(rstStatusCode: ErrorCode, errorException: IOException | null): void;
    // private closeInternal(errorCode: ErrorCode, errorException: IOException | null): boolean;
    closeLater(errorCode: ErrorCode): void;
    // private doReadTimeout(): boolean;
    enqueueTrailers(trailers: Pair<string, string>[]): void;
    peekTrailers(): Pair<string, string>[] | null;
    readTimeout(): Timeout;
    receiveData(source: BufferedSource, length: number): void;
    receiveHeaders(headers: Pair<string, string>[], inFinished: boolean): void;
    receiveRstStream(errorCode: ErrorCode): void;
    takeHeaders(callerIsIdle: boolean): Pair<string, string>[];
    waitForIo(): void;
    writeHeaders(responseHeaders: Header[], outFinished: boolean, flushHeaders: boolean): void;
    writeTimeout(): Timeout;
}