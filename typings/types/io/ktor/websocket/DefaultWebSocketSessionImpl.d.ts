import type { ChannelConfig } from '../../../io/ktor/websocket/ChannelConfig.d.ts'
import type { CloseReason } from '../../../io/ktor/websocket/CloseReason.d.ts'
import type { DefaultWebSocketSession } from '../../../io/ktor/websocket/DefaultWebSocketSession.d.ts'
import type { DefaultWebSocketSessionImpl$Companion } from '../../../io/ktor/websocket/DefaultWebSocketSessionImpl$Companion.d.ts'
import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { Frame$Ping } from '../../../io/ktor/websocket/Frame$Ping.d.ts'
import type { WebSocketExtension } from '../../../io/ktor/websocket/WebSocketExtension.d.ts'
import type { WebSocketSession } from '../../../io/ktor/websocket/WebSocketSession.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CompletableDeferred } from '../../../kotlinx/coroutines/CompletableDeferred.d.ts'
import type { CompletableJob } from '../../../kotlinx/coroutines/CompletableJob.d.ts'
import type { Deferred } from '../../../kotlinx/coroutines/Deferred.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { ReceiveChannel } from '../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
import type { SendChannel } from '../../../kotlinx/coroutines/channels/SendChannel.d.ts'
import type { Sink } from '../../../kotlinx/io/Sink.d.ts'
export class DefaultWebSocketSessionImpl extends Object implements DefaultWebSocketSession, WebSocketSession {
    static Companion: DefaultWebSocketSessionImpl$Companion;
    constructor(raw: WebSocketSession, pingIntervalMillis: number, timeoutMillis: number, incomingFramesConfig: ChannelConfig, outgoingFramesConfig: ChannelConfig)
    // private _extensions: WebSocketExtension<Object>[];
    readonly closeReason: Deferred<CloseReason>;
    // private closeReasonRef: CompletableDeferred<CloseReason>;
    // private context: CompletableJob;
    readonly coroutineContext: CoroutineContext;
    readonly extensions: WebSocketExtension<Object>[];
    // private filtered: Channel<Frame>;
    readonly incoming: ReceiveChannel<Frame>;
    masking: boolean;
    maxFrameSize: number;
    readonly outgoing: SendChannel<Frame>;
    // private outgoingToBeProcessed: Channel<Frame>;
    pingIntervalMillis: number;
    // private raw: WebSocketSession;
    timeoutMillis: number;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private checkMaxFrameSize(packet: Sink | null, frame: Frame, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    flush($completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    goingAway(message: string, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private outgoingProcessorLoop($completion: Continuation<void>): any;
    // private processIncomingExtensions(frame: Frame): Frame;
    // private processOutgoingExtensions(frame: Frame): Frame;
    // private runIncomingProcessor(ponger: SendChannel<Frame$Ping>): Job;
    // private runOrCancelPinger(): void;
    // private runOutgoingProcessor(): Job;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    send(frame: Frame, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private sendCloseSequence(reason: CloseReason | null, exception: Throwable | null, $completion: Continuation<void>): any;
    start(negotiatedExtensions: WebSocketExtension<Object>[]): void;
    terminate(): void;
    // private tryClose(): boolean;
}