import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { ChannelJob } from '../../../../io/ktor/utils/io/ChannelJob.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
export class ReaderJob extends Object implements ChannelJob {
    constructor(channel: ByteWriteChannel, job: Job)
    readonly channel: ByteWriteChannel;
    readonly job: Job;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flushAndClose($completion: Continuation<void>): any;
}