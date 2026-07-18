import type { OutgoingContent } from '../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { OutgoingContent$NoContent } from '../../../../io/ktor/http/content/OutgoingContent$NoContent.d.ts'
import type { BaseApplicationResponse } from '../../../../io/ktor/server/engine/BaseApplicationResponse.d.ts'
import type { NettyApplicationCall } from '../../../../io/ktor/server/netty/NettyApplicationCall.d.ts'
import type { NettyApplicationResponse$Companion } from '../../../../io/ktor/server/netty/NettyApplicationResponse$Companion.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export abstract class NettyApplicationResponse extends BaseApplicationResponse {
    static Companion: NettyApplicationResponse$Companion;
    constructor(call: NettyApplicationCall, context: ChannelHandlerContext, engineContext: CoroutineContext, userContext: CoroutineContext)
    // private /*not mapped: */ getCanRespond(): boolean;
    // private context: ChannelHandlerContext;
    // private /*not mapped: */ getContext(): ChannelHandlerContext;
    // private engineContext: CoroutineContext;
    // private /*not mapped: */ getEngineContext(): CoroutineContext;
    // private responseChannel: ByteReadChannel;
    /*not mapped: */ getResponseChannel$ktor_server_netty(): ByteReadChannel;
    responseMessage: Object;
    // private responseMessageSent: boolean;
    // private /*not mapped: */ getResponseMessageSent(): boolean;
    // private responseReady: ChannelPromise;
    /*not mapped: */ getResponseReady$ktor_server_netty(): ChannelPromise;
    // private userContext: CoroutineContext;
    // private /*not mapped: */ getUserContext(): CoroutineContext;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private awaitProcessingResponseIfInfoOrNoContent($completion: Continuation<void>): any;
    cancel(): void;
    // private cancelIfChannelNotActive(): void;
    close(): void;
    ensureResponseSent(): void;
    prepareTrailerMessage(): Object | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected respondFromBytes(bytes: number[], $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected respondNoContent(content: OutgoingContent$NoContent, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected respondOutgoingContent(content: OutgoingContent, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected responseChannel($completion: Continuation<ByteWriteChannel>): any;
    protected responseMessage(chunked: boolean, last: boolean): Object;
    protected responseMessage(chunked: boolean, data: number[]): Object;
    sendResponse(chunked: boolean, content: ByteReadChannel): void;
}