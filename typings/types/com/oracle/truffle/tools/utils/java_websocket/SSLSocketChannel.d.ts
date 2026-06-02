import type { WrappedByteChannel } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WrappedByteChannel.d.ts'
import type { ISSLChannel } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/interfaces/ISSLChannel.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../../../../../java/nio/channels/ByteChannel.d.ts'
import type { SelectionKey } from '../../../../../../java/nio/channels/SelectionKey.d.ts'
import type { SocketChannel } from '../../../../../../java/nio/channels/SocketChannel.d.ts'
import type { ExecutorService } from '../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Logger } from '../../../../../../java/util/logging/Logger.d.ts'
import type { SSLEngine } from '../../../../../../javax/net/ssl/SSLEngine.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SSLSocketChannel extends Object implements WrappedByteChannel, ISSLChannel, ByteChannel {
    constructor(arg0: SocketChannel, arg1: SSLEngine, arg2: ExecutorService, arg3: SelectionKey)
    // private engine: SSLEngine;
    // private executor: ExecutorService;
    // private log: Logger;
    // private myAppData: ByteBuffer;
    // private myNetData: ByteBuffer;
    // private peerAppData: ByteBuffer;
    // private peerNetData: ByteBuffer;
    // private socketChannel: SocketChannel;
    close(): void;
    // private closeConnection(): void;
    // private doHandshake(): boolean;
    // private enlargeApplicationBuffer(arg0: ByteBuffer): ByteBuffer;
    // private enlargeBuffer(arg0: ByteBuffer, arg1: number): ByteBuffer;
    // private enlargePacketBuffer(arg0: ByteBuffer): ByteBuffer;
    getSSLEngine(): SSLEngine;
    // private handleBufferUnderflow(arg0: ByteBuffer): ByteBuffer;
    // private handleEndOfStream(): void;
    isBlocking(): boolean;
    isNeedRead(): boolean;
    isNeedWrite(): boolean;
    isOpen(): boolean;
    read(arg0: ByteBuffer): number;
    readMore(arg0: ByteBuffer): number;
    write(arg0: ByteBuffer): number;
    writeMore(): void;
}