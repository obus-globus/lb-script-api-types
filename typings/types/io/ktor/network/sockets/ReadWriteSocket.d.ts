import type { AReadable } from '../../../../io/ktor/network/sockets/AReadable.d.ts'
import type { ASocket } from '../../../../io/ktor/network/sockets/ASocket.d.ts'
import type { AWritable } from '../../../../io/ktor/network/sockets/AWritable.d.ts'
import type { ByteChannel } from '../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { ReaderJob } from '../../../../io/ktor/utils/io/ReaderJob.d.ts'
import type { WriterJob } from '../../../../io/ktor/utils/io/WriterJob.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReadWriteSocket extends AReadable, ASocket, AWritable, Object{
    attachForReading(channel: ByteChannel): WriterJob;
    attachForWriting(channel: ByteChannel): ReaderJob;
    close(): void;
    dispose(): void;
}