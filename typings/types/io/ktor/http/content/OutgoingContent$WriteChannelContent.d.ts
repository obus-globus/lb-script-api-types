import type { OutgoingContent } from '../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export abstract class OutgoingContent$WriteChannelContent extends OutgoingContent {
    constructor()
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    writeTo(channel: ByteWriteChannel, $completion: Continuation<void>): any;
}