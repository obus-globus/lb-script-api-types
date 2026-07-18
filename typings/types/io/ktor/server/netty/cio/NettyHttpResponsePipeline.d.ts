import type { NettyApplicationCall } from '../../../../../io/ktor/server/netty/NettyApplicationCall.d.ts'
import type { NettyApplicationResponse } from '../../../../../io/ktor/server/netty/NettyApplicationResponse.d.ts'
import type { NettyHttpHandlerState } from '../../../../../io/ktor/server/netty/NettyHttpHandlerState.d.ts'
import type { ShouldFlush } from '../../../../../io/ktor/server/netty/cio/ShouldFlush.d.ts'
import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class NettyHttpResponsePipeline extends Object implements CoroutineScope {
    constructor(context: ChannelHandlerContext, httpHandlerState: NettyHttpHandlerState, coroutineContext: CoroutineContext)
    // private context: ChannelHandlerContext;
    readonly coroutineContext: CoroutineContext;
    // private httpHandlerState: NettyHttpHandlerState;
    // private previousCallHandled: ChannelPromise;
    close(lastFuture: ChannelFuture): void;
    flushIfNeeded(): void;
    // private handleLastResponseMessage(call: NettyApplicationCall, lastMessage: Object | null, lastFuture: ChannelFuture): void;
    // private handleRequestMessage(call: NettyApplicationCall): void;
    // private isHeaderFlushNeeded(): boolean;
    // private processElement(call: NettyApplicationCall): void;
    processResponse(call: NettyApplicationCall): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private respondBodyWithFlushOnLimit(call: NettyApplicationCall, response: NettyApplicationResponse, requestMessageFuture: ChannelFuture, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private respondBodyWithFlushOnLimitOrEmptyChannel(call: NettyApplicationCall, response: NettyApplicationResponse, requestMessageFuture: ChannelFuture, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private respondWithBigBody(call: NettyApplicationCall, response: NettyApplicationResponse, requestMessageFuture: ChannelFuture, shouldFlush: ShouldFlush, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private respondWithBodyAndTrailerMessage(call: NettyApplicationCall, response: NettyApplicationResponse, bodySize: number, requestMessageFuture: ChannelFuture, $completion: Continuation<void>): any;
    // private respondWithEmptyBody(call: NettyApplicationCall, lastFuture: ChannelFuture): void;
    // private respondWithFailure(call: NettyApplicationCall, actualException: Throwable): void;
    // private respondWithHeader(responseMessage: Object): ChannelFuture;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private respondWithSmallBody(call: NettyApplicationCall, response: NettyApplicationResponse, size: number, $completion: Continuation<void>): any;
    // private respondWithUpgrade(call: NettyApplicationCall, responseMessage: Object): ChannelFuture;
    // private scheduleFlush(): void;
    // private setOnResponseReadyHandler(call: NettyApplicationCall, block: () => void): void;
}