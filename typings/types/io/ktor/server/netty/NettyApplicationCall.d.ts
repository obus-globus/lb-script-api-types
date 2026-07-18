import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { BaseApplicationCall } from '../../../../io/ktor/server/engine/BaseApplicationCall.d.ts'
import type { NettyApplicationRequest } from '../../../../io/ktor/server/netty/NettyApplicationRequest.d.ts'
import type { NettyApplicationResponse } from '../../../../io/ktor/server/netty/NettyApplicationResponse.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
export abstract class NettyApplicationCall extends BaseApplicationCall {
    constructor(application: Application, context: ChannelHandlerContext, requestMessage: Object)
    readonly context: ChannelHandlerContext;
    finishedEvent: ChannelPromise;
    /*not mapped: */ getFinishedEvent$ktor_server_netty(): ChannelPromise;
    // private isByteBufferContent: boolean;
    /*not mapped: */ isByteBufferContent$ktor_server_netty(): boolean;
    // private isStreamingResponse: boolean;
    /*not mapped: */ isStreamingResponse$ktor_server_netty(): boolean;
    previousCallFinished: ChannelPromise;
    /*not mapped: */ getPreviousCallFinished$ktor_server_netty(): ChannelPromise;
    readonly request: NettyApplicationRequest;
    // private requestMessage: Object;
    readonly response: NettyApplicationResponse;
    readonly responseWriteJob: Job;
    dispose(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    finish($completion: Continuation<void>): any;
    // private finishComplete(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private finishSuspend($completion: Continuation<void>): any;
    isContextCloseRequired(): boolean;
    prepareEndOfStreamMessage(lastTransformed: boolean): Object | null;
    prepareMessage(buf: ByteBuf, isLastContent: boolean): Object;
    // private releaseRequestMessage(): void;
    upgrade(dst: ChannelHandlerContext): void;
}