import type { WrappedByteChannel } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WrappedByteChannel.d.ts'
import type { ISSLChannel } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/interfaces/ISSLChannel.d.ts'
import type { Socket } from '../../../../../../java/net/Socket.d.ts'
import type { SocketAddress } from '../../../../../../java/net/SocketAddress.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../../../../../java/nio/channels/ByteChannel.d.ts'
import type { SelectableChannel } from '../../../../../../java/nio/channels/SelectableChannel.d.ts'
import type { SelectionKey } from '../../../../../../java/nio/channels/SelectionKey.d.ts'
import type { SocketChannel } from '../../../../../../java/nio/channels/SocketChannel.d.ts'
import type { ExecutorService } from '../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Future } from '../../../../../../java/util/concurrent/Future.d.ts'
import type { Logger } from '../../../../../../java/util/logging/Logger.d.ts'
import type { SSLEngine } from '../../../../../../javax/net/ssl/SSLEngine.d.ts'
import type { SSLEngineResult } from '../../../../../../javax/net/ssl/SSLEngineResult.d.ts'
import type { SSLSession } from '../../../../../../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SSLSocketChannel2 extends Object implements WrappedByteChannel, ISSLChannel, ByteChannel {
    constructor(arg0: SocketChannel, arg1: SSLEngine, arg2: ExecutorService, arg3: SelectionKey)
    // private bufferallocations: number;
    // private exec: ExecutorService;
    // private inCrypt: ByteBuffer;
    // private inData: ByteBuffer;
    // private log: Logger;
    // private outCrypt: ByteBuffer;
    // private readEngineResult: SSLEngineResult;
    // private saveCryptData: number[];
    // private selectionKey: SelectionKey;
    // private socketChannel: SocketChannel;
    // private sslEngine: SSLEngine;
    // private tasks: Future<Object>[];
    // private writeEngineResult: SSLEngineResult;
    close(): void;
    configureBlocking(arg0: boolean): SelectableChannel;
    connect(arg0: SocketAddress): boolean;
    consumeDelegatedTasks(): void;
    // private consumeFutureUninterruptible(arg0: Future<Object>): void;
    createBuffers(arg0: SSLSession): void;
    finishConnect(): boolean;
    getSSLEngine(): SSLEngine;
    isBlocking(): boolean;
    isConnected(): boolean;
    // private isHandShakeComplete(): boolean;
    isInboundDone(): boolean;
    isNeedRead(): boolean;
    isNeedWrite(): boolean;
    isOpen(): boolean;
    // private processHandshake(arg0: boolean): void;
    read(arg0: ByteBuffer): number;
    readMore(arg0: ByteBuffer): number;
    // private readRemaining(arg0: ByteBuffer): number;
    // private saveCryptedData(): void;
    socket(): Socket;
    // private transfereTo(arg0: ByteBuffer, arg1: ByteBuffer): number;
    // private tryRestoreCryptedData(): void;
    // private unwrap(): ByteBuffer;
    // private wrap(arg0: ByteBuffer): ByteBuffer;
    write(arg0: ByteBuffer): number;
    writeMore(): void;
}