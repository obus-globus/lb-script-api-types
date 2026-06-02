import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { Timeout } from '../../../../io/netty/util/Timeout.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerConnectionListener$LatencySimulator$DelayedMessage } from '../../../../net/minecraft/server/network/ServerConnectionListener$LatencySimulator$DelayedMessage.d.ts'
export class ServerConnectionListener$LatencySimulator extends ChannelInboundHandlerAdapter {
    constructor(delay: number, jitter: number)
    // private delay: number;
    // private jitter: number;
    // private queuedMessages: ServerConnectionListener$LatencySimulator$DelayedMessage[];
    channelRead(ctx: ChannelHandlerContext, msg: Object): void;
    // private delayDownstream(ctx: ChannelHandlerContext, msg: Object): void;
    // private onTimeout(timeout: Timeout): void;
}