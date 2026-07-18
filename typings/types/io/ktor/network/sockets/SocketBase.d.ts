import type { SelectableBase } from '../../../../io/ktor/network/selector/SelectableBase.d.ts'
import type { ReadWriteSocket } from '../../../../io/ktor/network/sockets/ReadWriteSocket.d.ts'
import type { ByteChannel } from '../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { ReaderJob } from '../../../../io/ktor/utils/io/ReaderJob.d.ts'
import type { WriterJob } from '../../../../io/ktor/utils/io/WriterJob.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CompletableJob } from '../../../../kotlinx/coroutines/CompletableJob.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export abstract class SocketBase extends SelectableBase implements ReadWriteSocket, CoroutineScope {
    constructor(parent: CoroutineContext)
    // private channelCompletionHandler: (param0: Throwable | null) => void;
    readonly coroutineContext: CoroutineContext;
    readonly socketContext: CompletableJob;
    actualClose(): Throwable | null;
    attachForReading(channel: ByteChannel): WriterJob;
    attachForReadingImpl(channel: ByteChannel): WriterJob;
    attachForWriting(channel: ByteChannel): ReaderJob;
    attachForWritingImpl(channel: ByteChannel): ReaderJob;
    // private checkChannels(): void;
    close(): void;
    // private combine(e1: Throwable | null, e2: Throwable | null): Throwable | null;
    dispose(): void;
}