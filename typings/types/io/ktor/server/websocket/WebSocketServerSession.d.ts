import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { Frame } from '../../../../io/ktor/websocket/Frame.d.ts'
import type { WebSocketSession } from '../../../../io/ktor/websocket/WebSocketSession.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export interface WebSocketServerSession extends WebSocketSession, Object{
    readonly call: ApplicationCall;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flush($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(frame: Frame, $completion: Continuation<void>): any;
    terminate(): void;
}