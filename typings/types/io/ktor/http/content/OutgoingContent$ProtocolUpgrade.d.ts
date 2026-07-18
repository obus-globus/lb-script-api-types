import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent } from '../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
export abstract class OutgoingContent$ProtocolUpgrade extends OutgoingContent {
    constructor()
    readonly status: HttpStatusCode;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    upgrade(input: ByteReadChannel, output: ByteWriteChannel, engineContext: CoroutineContext, userContext: CoroutineContext, $completion: Continuation<Job>): any;
}