import type { ServerSSESession } from '../../../../io/ktor/server/sse/ServerSSESession.d.ts'
import type { ServerSentEvent } from '../../../../io/ktor/sse/ServerSentEvent.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export interface ServerSSESessionWithSerialization extends ServerSSESession, Object {
    readonly serializer: (param0: TypeInfo, param1: Object) => string;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    close($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(event: ServerSentEvent, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(data: string | null, event: string | null, id: string | null, retry: number | null, comments: string | null, $completion: Continuation<void>): any;
}