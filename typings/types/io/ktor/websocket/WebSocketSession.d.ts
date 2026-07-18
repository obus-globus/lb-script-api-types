import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { WebSocketExtension } from '../../../io/ktor/websocket/WebSocketExtension.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
export interface WebSocketSession extends Object, CoroutineScope{
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