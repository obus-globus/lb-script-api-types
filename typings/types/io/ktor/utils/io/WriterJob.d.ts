import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ChannelJob } from '../../../../io/ktor/utils/io/ChannelJob.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
export class WriterJob extends Object implements ChannelJob {
    constructor(channel: ByteReadChannel, job: Job)
    readonly channel: ByteReadChannel;
    readonly job: Job;
}