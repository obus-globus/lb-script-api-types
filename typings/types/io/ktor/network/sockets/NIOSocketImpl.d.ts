import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { ReadWriteSocket } from '../../../../io/ktor/network/sockets/ReadWriteSocket.d.ts'
import type { SocketBase } from '../../../../io/ktor/network/sockets/SocketBase.d.ts'
import type { SocketOptions$TCPClientSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$TCPClientSocketOptions.d.ts'
import type { ByteChannel } from '../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { ReaderJob } from '../../../../io/ktor/utils/io/ReaderJob.d.ts'
import type { WriterJob } from '../../../../io/ktor/utils/io/WriterJob.d.ts'
import type { ObjectPool } from '../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel as ByteChannel_2 } from '../../../../java/nio/channels/ByteChannel.d.ts'
import type { SelectableChannel } from '../../../../java/nio/channels/SelectableChannel.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class NIOSocketImpl<S extends ByteChannel_2 & SelectableChannel> extends SocketBase implements ReadWriteSocket {
    constructor(channel: S, selector: SelectorManager, pool: ObjectPool<ByteBuffer> | null, socketOptions: SocketOptions$TCPClientSocketOptions | null)
    readonly channel: S;
    readonly pool: ObjectPool<ByteBuffer> | null;
    readonly selector: SelectorManager;
    // private socketOptions: SocketOptions$TCPClientSocketOptions | null;
    actualClose(): Throwable | null;
    attachForReadingImpl(channel: ByteChannel): WriterJob;
    attachForWritingImpl(channel: ByteChannel): ReaderJob;
}