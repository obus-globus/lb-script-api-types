import type { Selectable } from '../../../../io/ktor/network/selector/Selectable.d.ts'
import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { SocketOptions$TCPClientSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$TCPClientSocketOptions.d.ts'
import type { ByteChannel } from '../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { WriterJob } from '../../../../io/ktor/utils/io/WriterJob.d.ts'
import type { ObjectPool } from '../../../../io/ktor/utils/io/pool/ObjectPool.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { ReadableByteChannel } from '../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class CIOReaderKt extends Object {
    static attachForReadingDirectImpl(self: CoroutineScope, channel: ByteChannel, nioChannel: ReadableByteChannel, selectable: Selectable, selector: SelectorManager, socketOptions: SocketOptions$TCPClientSocketOptions | null): WriterJob;
    static attachForReadingImpl(self: CoroutineScope, channel: ByteChannel, nioChannel: ReadableByteChannel, selectable: Selectable, selector: SelectorManager, pool: ObjectPool<ByteBuffer>, socketOptions: SocketOptions$TCPClientSocketOptions | null): WriterJob;
}