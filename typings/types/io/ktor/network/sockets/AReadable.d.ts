import type { ByteChannel } from '../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { WriterJob } from '../../../../io/ktor/utils/io/WriterJob.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AReadable extends Object{
    attachForReading(channel: ByteChannel): WriterJob;
}