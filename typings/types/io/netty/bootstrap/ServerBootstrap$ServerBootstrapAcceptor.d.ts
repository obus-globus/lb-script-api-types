import type { ChannelInitializerExtension } from '../../../io/netty/bootstrap/ChannelInitializerExtension.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { ChannelOption } from '../../../io/netty/channel/ChannelOption.d.ts'
import type { AttributeKey } from '../../../io/netty/util/AttributeKey.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class ServerBootstrap$ServerBootstrapAcceptor extends ChannelInboundHandlerAdapter {
    constructor(arg0: Channel, arg1: (Object | null)[], arg2: ChannelHandler, arg3: Map$Entry<ChannelOption<Object>, Object>[], arg4: Map$Entry<AttributeKey<Object>, Object>[], arg5: ChannelInitializerExtension[])
    // private childAttrs: Map$Entry<AttributeKey<Object>, Object>[];
    // private childGroup: (Object | null)[];
    // private childHandler: ChannelHandler;
    // private childOptions: Map$Entry<ChannelOption<Object>, Object>[];
    // private enableAutoReadTask: () => void;
    // private extensions: ChannelInitializerExtension[];
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
}