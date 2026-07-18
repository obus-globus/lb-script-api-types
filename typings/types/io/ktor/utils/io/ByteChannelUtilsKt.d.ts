import type { ByteChannel } from '../../../../io/ktor/utils/io/ByteChannel.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ChannelJob } from '../../../../io/ktor/utils/io/ChannelJob.d.ts'
import type { WriterJob } from '../../../../io/ktor/utils/io/WriterJob.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
export class ByteChannelUtilsKt extends Object {
    static attachJob(self: ByteChannel, job: ChannelJob): void;
    static attachJob(self: ByteChannel, job: Job): void;
    static attachWriterJob(self: ByteReadChannel, writerJob: WriterJob): void;
}