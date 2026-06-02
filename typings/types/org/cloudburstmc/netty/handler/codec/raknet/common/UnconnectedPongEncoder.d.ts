import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandlerAdapter } from '../../../../../../../io/netty/channel/ChannelOutboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class UnconnectedPongEncoder extends ChannelOutboundHandlerAdapter {
    static INSTANCE: UnconnectedPongEncoder;
    static NAME: string;
    private constructor()
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}