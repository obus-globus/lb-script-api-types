import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Channel } from '../../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { ScheduledFuture } from '../../../../../../../io/netty/util/concurrent/ScheduledFuture.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakChannel.d.ts'
import type { RakOfflineState } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakOfflineState.d.ts'
export class RakClientOfflineHandler extends SimpleChannelInboundHandler<ByteBuf> {
    static NAME: string;
    constructor(arg0: RakChannel, arg1: ChannelPromise)
    // private connectionAttempts: number;
    // private cookie: number;
    // private rakChannel: RakChannel;
    // private retryFuture: ScheduledFuture<Object>;
    // private security: boolean;
    // private state: RakOfflineState;
    // private successPromise: ChannelPromise;
    // private timeoutFuture: ScheduledFuture<Object>;
    channelRead0(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    connectionAttempts(): number;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    incrementConnectionAttempts(): void;
    onOpenConnectionReply1(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    onOpenConnectionReply2(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    onRetryAttempt(arg0: Channel): void;
    onSuccess(arg0: ChannelHandlerContext): void;
    onTimeout(): void;
    rakChannel(): RakChannel;
    sendOpenConnectionRequest1(arg0: Channel): void;
    sendOpenConnectionRequest2(arg0: Channel): void;
    state(): RakOfflineState;
    state(arg0: RakOfflineState): void;
    successPromise(): ChannelPromise;
}