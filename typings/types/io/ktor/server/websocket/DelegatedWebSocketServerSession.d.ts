import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { WebSocketServerSession } from '../../../../io/ktor/server/websocket/WebSocketServerSession.d.ts'
import type { Frame } from '../../../../io/ktor/websocket/Frame.d.ts'
import type { WebSocketExtension } from '../../../../io/ktor/websocket/WebSocketExtension.d.ts'
import type { WebSocketSession } from '../../../../io/ktor/websocket/WebSocketSession.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { ReceiveChannel } from '../../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SendChannel } from '../../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export class DelegatedWebSocketServerSession extends Object implements WebSocketServerSession, WebSocketSession {
    constructor(call: ApplicationCall, delegate: WebSocketSession)
    readonly call: ApplicationCall;
    readonly coroutineContext: CoroutineContext;
    readonly delegate: WebSocketSession;
    readonly extensions: WebSocketExtension<Object>[];
    readonly incoming: ReceiveChannel<Frame>;
    masking: boolean;
    maxFrameSize: number;
    readonly outgoing: SendChannel<Frame>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flush($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(frame: Frame, $completion: Continuation<void>): any;
    terminate(): void;
}