import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { DefaultWebSocketServerSession } from '../../../../io/ktor/server/websocket/DefaultWebSocketServerSession.d.ts'
import type { CloseReason } from '../../../../io/ktor/websocket/CloseReason.d.ts'
import type { DefaultWebSocketSession } from '../../../../io/ktor/websocket/DefaultWebSocketSession.d.ts'
import type { Frame } from '../../../../io/ktor/websocket/Frame.d.ts'
import type { WebSocketExtension } from '../../../../io/ktor/websocket/WebSocketExtension.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Deferred } from '../../../../kotlinx/coroutines/Deferred.d.ts'
import type { ReceiveChannel } from '../../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SendChannel } from '../../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export class DelegatedDefaultWebSocketServerSession extends Object implements DefaultWebSocketServerSession, DefaultWebSocketSession {
    constructor(call: ApplicationCall, delegate: DefaultWebSocketSession)
    readonly call: ApplicationCall;
    readonly closeReason: Deferred<CloseReason>;
    readonly coroutineContext: CoroutineContext;
    readonly delegate: DefaultWebSocketSession;
    readonly extensions: WebSocketExtension<Object>[];
    readonly incoming: ReceiveChannel<Frame>;
    masking: boolean;
    maxFrameSize: number;
    readonly outgoing: SendChannel<Frame>;
    pingIntervalMillis: number;
    timeoutMillis: number;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flush($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(frame: Frame, $completion: Continuation<void>): any;
    start(negotiatedExtensions: WebSocketExtension<Object>[]): void;
    terminate(): void;
}