import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BandwidthDebugMonitor } from '../../../net/minecraft/network/BandwidthDebugMonitor.d.ts'
export class MonitoredLocalFrameDecoder extends ChannelInboundHandlerAdapter {
    constructor(monitor: BandwidthDebugMonitor)
    // private monitor: BandwidthDebugMonitor;
    channelRead(ctx: ChannelHandlerContext, msg: Object): void;
}