import type { WebSocketServerSession } from '../../../../io/ktor/server/websocket/WebSocketServerSession.d.ts'
import type { DefaultWebSocketSession } from '../../../../io/ktor/websocket/DefaultWebSocketSession.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export interface DefaultWebSocketServerSession extends WebSocketServerSession, DefaultWebSocketSession, Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flush($completion: Continuation<void>): any;
    terminate(): void;
}