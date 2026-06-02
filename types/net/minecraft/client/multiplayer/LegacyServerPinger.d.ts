import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { LegacyServerPinger$Output } from '../../../../net/minecraft/client/multiplayer/LegacyServerPinger$Output.d.ts'
import type { ServerAddress } from '../../../../net/minecraft/client/multiplayer/resolver/ServerAddress.d.ts'
export class LegacyServerPinger extends SimpleChannelInboundHandler<ByteBuf> {
    constructor(address: ServerAddress, output: (param0: number, param1: string, param2: string, param3: number, param4: number) => void)
    // private address: ServerAddress;
    // private output: (param0: number, param1: string, param2: string, param3: number, param4: number) => void;
    channelActive(ctx: ChannelHandlerContext): void;
    channelRead0(ctx: ChannelHandlerContext, msg: ByteBuf): void;
    exceptionCaught(ctx: ChannelHandlerContext, cause: Throwable): void;
}