import type { CloseReason } from '../../../io/ktor/websocket/CloseReason.d.ts'
import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { WebSocketExtension } from '../../../io/ktor/websocket/WebSocketExtension.d.ts'
import type { WebSocketSession } from '../../../io/ktor/websocket/WebSocketSession.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { Deferred } from '../../../kotlinx/coroutines/Deferred.d.ts'
export interface DefaultWebSocketSession extends WebSocketSession, Object{
    readonly closeReason: Deferred<CloseReason>;
    pingIntervalMillis: number;
    timeoutMillis: number;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flush($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(frame: Frame, $completion: Continuation<void>): any;
    start(negotiatedExtensions: WebSocketExtension<Object>[]): void;
    terminate(): void;
}