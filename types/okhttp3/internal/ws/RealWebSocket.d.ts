import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Random } from '../../../java/util/Random.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Call } from '../../../okhttp3/Call.d.ts'
import type { OkHttpClient } from '../../../okhttp3/OkHttpClient.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
import type { Response } from '../../../okhttp3/Response.d.ts'
import type { WebSocket } from '../../../okhttp3/WebSocket.d.ts'
import type { WebSocketListener } from '../../../okhttp3/WebSocketListener.d.ts'
import type { Lockable } from '../../../okhttp3/internal/concurrent/Lockable.d.ts'
import type { Task } from '../../../okhttp3/internal/concurrent/Task.d.ts'
import type { TaskQueue } from '../../../okhttp3/internal/concurrent/TaskQueue.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { BufferedSocket } from '../../../okhttp3/internal/connection/BufferedSocket.d.ts'
import type { RealWebSocket$Companion } from '../../../okhttp3/internal/ws/RealWebSocket$Companion.d.ts'
import type { WebSocketExtensions } from '../../../okhttp3/internal/ws/WebSocketExtensions.d.ts'
import type { WebSocketReader } from '../../../okhttp3/internal/ws/WebSocketReader.d.ts'
import type { WebSocketReader$FrameCallback } from '../../../okhttp3/internal/ws/WebSocketReader$FrameCallback.d.ts'
import type { WebSocketWriter } from '../../../okhttp3/internal/ws/WebSocketWriter.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
import type { Socket } from '../../../okio/Socket.d.ts'
export class RealWebSocket extends Object implements WebSocket, Lockable, WebSocketReader$FrameCallback {
    static CANCEL_AFTER_CLOSE_MILLIS: number;
    static Companion: RealWebSocket$Companion;
    static DEFAULT_MINIMUM_DEFLATE_SIZE: number;
    constructor(taskRunner: TaskRunner, originalRequest: Request, listener: WebSocketListener, random: Random, pingIntervalMillis: number, extensions: WebSocketExtensions | null, minimumDeflateSize: number, webSocketCloseTimeout: number)
    // private awaitingPong: boolean;
    // private call: Call | null;
    /*not mapped: */ getCall$okhttp(): Call | null;
    // private enqueuedClose: boolean;
    // private extensions: WebSocketExtensions | null;
    // private failed: boolean;
    // private key: string;
    // private listener: WebSocketListener;
    /*not mapped: */ getListener$okhttp(): WebSocketListener;
    // private messageAndCloseQueue: Object[];
    // private minimumDeflateSize: number;
    // private name: string | null;
    // private originalRequest: Request;
    // private pingIntervalMillis: number;
    // private pongQueue: ByteString[];
    // private queueSize: number;
    // private random: Random;
    // private reader: WebSocketReader | null;
    // private receivedCloseCode: number;
    // private receivedCloseReason: string | null;
    // private receivedPingCount: number;
    // private receivedPongCount: number;
    // private sentPingCount: number;
    // private socket: Socket | null;
    // private taskQueue: TaskQueue;
    // private webSocketCloseTimeout: number;
    // private writer: WebSocketWriter | null;
    // private writerTask: Task | null;
    cancel(): void;
    checkUpgradeSuccess(response: Response): Socket;
    close(code: number, reason: string | null): boolean;
    close(code: number, reason: string | null, cancelAfterCloseMillis: number): boolean;
    connect(client: OkHttpClient): void;
    failWebSocket(e: Exception, response: Response | null, isWriter: boolean): void;
    finishReader(): void;
    initReaderAndWriter(name: string, socket: BufferedSocket, client: boolean): void;
    loopReader(response: Response): void;
    onReadClose(code: number, reason: string): void;
    onReadMessage(text: string): void;
    onReadMessage(bytes: ByteString): void;
    onReadPing(payload: ByteString): void;
    onReadPong(payload: ByteString): void;
    pong(payload: ByteString): boolean;
    processNextFrame(): boolean;
    queueSize(): number;
    receivedPingCount(): number;
    receivedPongCount(): number;
    request(): Request;
    // private runWriter(): void;
    send(text: string): boolean;
    send(bytes: ByteString): boolean;
    // private send(data: ByteString, formatOpcode: number): boolean;
    sentPingCount(): number;
    tearDown(): void;
    writeOneFrame(): boolean;
    writePingFrame(): void;
}