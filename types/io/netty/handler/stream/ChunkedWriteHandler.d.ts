import type { ChannelDuplexHandler } from '../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ChunkedInput } from '../../../../io/netty/handler/stream/ChunkedInput.d.ts'
import type { ChunkedWriteHandler$PendingWrite } from '../../../../io/netty/handler/stream/ChunkedWriteHandler$PendingWrite.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ChunkedWriteHandler extends ChannelDuplexHandler {
    constructor()
    constructor(arg0: number)
    // private ctx: ChannelHandlerContext;
    // private queue: ChunkedWriteHandler$PendingWrite[];
    // private allocateQueue(): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelWritabilityChanged(arg0: ChannelHandlerContext): void;
    // private discard(arg0: Throwable): void;
    // private doFlush(arg0: ChannelHandlerContext): void;
    flush(arg0: ChannelHandlerContext): void;
    // private handleFuture(arg0: ChannelFuture, arg1: ChunkedInput<Object>, arg2: ChunkedWriteHandler$PendingWrite, arg3: boolean): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    // private queueIsEmpty(): boolean;
    resumeTransfer(): void;
    // private resumeTransfer0(arg0: ChannelHandlerContext): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}