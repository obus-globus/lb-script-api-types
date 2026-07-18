import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { ReferenceCounted } from '../../../../../io/netty/util/ReferenceCounted.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CompletableDeferred } from '../../../../../kotlinx/coroutines/CompletableDeferred.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../../../../kotlinx/coroutines/Job.d.ts'
import type { Channel } from '../../../../../kotlinx/coroutines/channels/Channel.d.ts'
export class RequestBodyHandler extends ChannelInboundHandlerAdapter implements CoroutineScope {
    constructor(context: ChannelHandlerContext)
    readonly context: ChannelHandlerContext;
    readonly coroutineContext: CoroutineContext;
    // private handlerJob: CompletableDeferred<void>;
    // private job: Job;
    // private queue: Channel<Object>;
    channelRead(context: ChannelHandlerContext, msg: Object | null): void;
    close(): void;
    // private consumeAndReleaseQueue(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private copy(buf: ByteBuf, dst: ByteWriteChannel, $completion: Continuation<void>): any;
    exceptionCaught(ctx: ChannelHandlerContext | null, cause: Throwable): void;
    // private handleBytesRead(content: ReferenceCounted): void;
    handlerAdded(ctx: ChannelHandlerContext | null): void;
    handlerRemoved(ctx: ChannelHandlerContext | null): void;
    newChannel(): ByteReadChannel;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private processContent(current: ByteWriteChannel, buf: ByteBuf, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private processContent(current: ByteWriteChannel, event: ByteBufHolder, $completion: Continuation<void>): any;
    // private requestMoreEvents(): void;
    // private tryOfferChannelOrToken(token: Object): void;
    upgrade(): ByteReadChannel;
}