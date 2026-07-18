import type { ByteChannel } from '../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { ReaderJob } from '../../../../io/ktor/utils/io/ReaderJob.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AWritable extends Object{
    attachForWriting(channel: ByteChannel): ReaderJob;
}