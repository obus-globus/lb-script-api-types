import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ServerSSESession } from '../../../../io/ktor/server/sse/ServerSSESession.d.ts'
import type { ServerSentEvent } from '../../../../io/ktor/sse/ServerSentEvent.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Mutex } from '../../../../kotlinx/coroutines/sync/Mutex.d.ts'
export class DefaultServerSSESession extends Object implements ServerSSESession {
    constructor(output: ByteWriteChannel, call: ApplicationCall, coroutineContext: CoroutineContext)
    readonly call: ApplicationCall;
    readonly coroutineContext: CoroutineContext;
    // private mutex: Mutex;
    // private output: ByteWriteChannel;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    close($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(event: ServerSentEvent, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(data: string | null, event: string | null, id: string | null, retry: number | null, comments: string | null, $completion: Continuation<void>): any;
}