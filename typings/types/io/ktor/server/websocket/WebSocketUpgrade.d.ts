import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { OutgoingContent$ProtocolUpgrade } from '../../../../io/ktor/http/content/OutgoingContent$ProtocolUpgrade.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { WebSocketUpgrade$Companion } from '../../../../io/ktor/server/websocket/WebSocketUpgrade$Companion.d.ts'
import type { WebSockets } from '../../../../io/ktor/server/websocket/WebSockets.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { WebSocketSession } from '../../../../io/ktor/websocket/WebSocketSession.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
export class WebSocketUpgrade extends OutgoingContent$ProtocolUpgrade {
    static Companion: WebSocketUpgrade$Companion;
    constructor(call: ApplicationCall, protocol: string | null, installExtensions: boolean, handle: (param0: WebSocketSession) => void)
    constructor(call: ApplicationCall, protocol: string | null, handle: (param0: WebSocketSession) => void)
    readonly call: ApplicationCall;
    readonly handle: (param0: WebSocketSession) => void;
    readonly headers: Headers;
    // private installExtensions: boolean;
    // private key: string | null;
    // private plugin: WebSockets;
    readonly protocol: string | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    upgrade(input: ByteReadChannel, output: ByteWriteChannel, engineContext: CoroutineContext, userContext: CoroutineContext, $completion: Continuation<Job>): any;
}