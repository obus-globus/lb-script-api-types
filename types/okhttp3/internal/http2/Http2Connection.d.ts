import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Lockable } from '../../../okhttp3/internal/concurrent/Lockable.d.ts'
import type { TaskQueue } from '../../../okhttp3/internal/concurrent/TaskQueue.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { BufferedSocket } from '../../../okhttp3/internal/connection/BufferedSocket.d.ts'
import type { ErrorCode } from '../../../okhttp3/internal/http2/ErrorCode.d.ts'
import type { FlowControlListener } from '../../../okhttp3/internal/http2/FlowControlListener.d.ts'
import type { Header } from '../../../okhttp3/internal/http2/Header.d.ts'
import type { Http2Connection$Builder } from '../../../okhttp3/internal/http2/Http2Connection$Builder.d.ts'
import type { Http2Connection$Companion } from '../../../okhttp3/internal/http2/Http2Connection$Companion.d.ts'
import type { Http2Connection$Listener } from '../../../okhttp3/internal/http2/Http2Connection$Listener.d.ts'
import type { Http2Connection$ReaderRunnable } from '../../../okhttp3/internal/http2/Http2Connection$ReaderRunnable.d.ts'
import type { Http2Stream } from '../../../okhttp3/internal/http2/Http2Stream.d.ts'
import type { Http2Writer } from '../../../okhttp3/internal/http2/Http2Writer.d.ts'
import type { PushObserver } from '../../../okhttp3/internal/http2/PushObserver.d.ts'
import type { Settings } from '../../../okhttp3/internal/http2/Settings.d.ts'
import type { WindowCounter } from '../../../okhttp3/internal/http2/flowcontrol/WindowCounter.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
export class Http2Connection extends Object implements Closeable, Lockable {
    static AWAIT_PING: number;
    static Companion: Http2Connection$Companion;
    static DEGRADED_PING: number;
    static DEGRADED_PONG_TIMEOUT_NS: number;
    static INTERVAL_PING: number;
    static OKHTTP_CLIENT_WINDOW_SIZE: number;
    constructor(builder: Http2Connection$Builder)
    // private awaitPingsSent: number;
    // private awaitPongsReceived: number;
    // private client: boolean;
    /*not mapped: */ getClient$okhttp(): boolean;
    // private connectionName: string;
    /*not mapped: */ getConnectionName$okhttp(): string;
    // private currentPushRequests: number[];
    // private degradedPingsSent: number;
    // private degradedPongDeadlineNs: number;
    // private degradedPongsReceived: number;
    // private flowControlListener: FlowControlListener;
    /*not mapped: */ getFlowControlListener$okhttp(): FlowControlListener;
    // private intervalPingsSent: number;
    // private intervalPongsReceived: number;
    // private isShutdown: boolean;
    // private lastGoodStreamId: number;
    /*not mapped: */ getLastGoodStreamId$okhttp(): number;
    // private listener: Http2Connection$Listener;
    /*not mapped: */ getListener$okhttp(): Http2Connection$Listener;
    // private nextStreamId: number;
    /*not mapped: */ getNextStreamId$okhttp(): number;
    readonly okHttpSettings: Settings;
    peerSettings: Settings;
    // private pushObserver: PushObserver;
    // private pushQueue: TaskQueue;
    readonly readBytes: WindowCounter;
    readonly readerRunnable: Http2Connection$ReaderRunnable;
    // private settingsListenerQueue: TaskQueue;
    // private socket: BufferedSocket;
    /*not mapped: */ getSocket$okhttp(): BufferedSocket;
    // private streams: { [key: number]: Http2Stream };
    /*not mapped: */ getStreams$okhttp(): { [key: number]: Http2Stream };
    // private taskRunner: TaskRunner;
    readonly writeBytesMaximum: number;
    readonly writeBytesTotal: number;
    readonly writer: Http2Writer;
    // private writerQueue: TaskQueue;
    awaitPong(): void;
    close(): void;
    close(connectionCode: ErrorCode, streamCode: ErrorCode, cause: IOException | null): void;
    // private failConnection(e: IOException | null): void;
    flush(): void;
    getStream(id: number): Http2Stream | null;
    isHealthy(nowNs: number): boolean;
    // private newStream(associatedStreamId: number, requestHeaders: Header[], out: boolean): Http2Stream;
    newStream(requestHeaders: Header[], out: boolean): Http2Stream;
    openStreamCount(): number;
    pushDataLater(streamId: number, source: BufferedSource, byteCount: number, inFinished: boolean): void;
    pushHeadersLater(streamId: number, requestHeaders: Header[], inFinished: boolean): void;
    pushRequestLater(streamId: number, requestHeaders: Header[]): void;
    pushResetLater(streamId: number, errorCode: ErrorCode): void;
    pushStream(associatedStreamId: number, requestHeaders: Header[], out: boolean): Http2Stream;
    pushedStream(streamId: number): boolean;
    removeStream(streamId: number): Http2Stream | null;
    sendDegradedPingLater(): void;
    setSettings(settings: Settings): void;
    shutdown(statusCode: ErrorCode): void;
    start(sendConnectionPreface: boolean): void;
    updateConnectionFlowControl(read: number): void;
    writeData(streamId: number, outFinished: boolean, buffer: Buffer | null, byteCount: number): void;
    writeHeaders(streamId: number, outFinished: boolean, alternating: Header[]): void;
    writePing(): void;
    writePing(reply: boolean, payload1: number, payload2: number): void;
    writePingAndAwaitPong(): void;
    writeSynReset(streamId: number, statusCode: ErrorCode): void;
    writeSynResetLater(streamId: number, errorCode: ErrorCode): void;
    writeWindowUpdateLater(streamId: number, unacknowledgedBytesRead: number): void;
}