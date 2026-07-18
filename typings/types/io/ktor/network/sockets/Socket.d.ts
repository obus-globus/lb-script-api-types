import type { ABoundSocket } from '../../../../io/ktor/network/sockets/ABoundSocket.d.ts'
import type { AConnectedSocket } from '../../../../io/ktor/network/sockets/AConnectedSocket.d.ts'
import type { ReadWriteSocket } from '../../../../io/ktor/network/sockets/ReadWriteSocket.d.ts'
import type { ByteChannel } from '../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { ReaderJob } from '../../../../io/ktor/utils/io/ReaderJob.d.ts'
import type { WriterJob } from '../../../../io/ktor/utils/io/WriterJob.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export interface Socket extends ABoundSocket, AConnectedSocket, ReadWriteSocket, Object, CoroutineScope{
    attachForReading(channel: ByteChannel): WriterJob;
    attachForWriting(channel: ByteChannel): ReaderJob;
    close(): void;
}