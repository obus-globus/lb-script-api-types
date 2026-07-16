import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Channel } from '../../../../../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { RakChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakChannel.d.ts'
import type { RakClientOfflineHandler } from '../../../../../../../org/cloudburstmc/netty/handler/codec/raknet/client/RakClientOfflineHandler.d.ts'
export class RakClientOfflineHandlerCompatible extends RakClientOfflineHandler {
    static NAME: string;
    constructor(arg0: RakChannel, arg1: ChannelPromise)
    onOpenConnectionReply2(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    onRetryAttempt(arg0: Channel): void;
    onSuccess(arg0: ChannelHandlerContext): void;
}