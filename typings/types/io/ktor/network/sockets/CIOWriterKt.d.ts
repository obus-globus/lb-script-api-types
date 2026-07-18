import type { Selectable } from '../../../../io/ktor/network/selector/Selectable.d.ts'
import type { SelectorManager } from '../../../../io/ktor/network/selector/SelectorManager.d.ts'
import type { SocketOptions$TCPClientSocketOptions } from '../../../../io/ktor/network/sockets/SocketOptions$TCPClientSocketOptions.d.ts'
import type { ByteChannel } from '../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { ReaderJob } from '../../../../io/ktor/utils/io/ReaderJob.d.ts'
import type { WritableByteChannel } from '../../../../java/nio/channels/WritableByteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class CIOWriterKt extends Object {
    static attachForWritingDirectImpl(self: CoroutineScope, channel: ByteChannel, nioChannel: WritableByteChannel, selectable: Selectable, selector: SelectorManager, socketOptions: SocketOptions$TCPClientSocketOptions | null): ReaderJob;
}