import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ByteToMessageDecoder } from '../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BandwidthDebugMonitor } from '../../../net/minecraft/network/BandwidthDebugMonitor.d.ts'
export class Varint21FrameDecoder extends ByteToMessageDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(monitor: BandwidthDebugMonitor)
    // private helperBuf: ByteBuf;
    // private monitor: BandwidthDebugMonitor;
    decode(ctx: ChannelHandlerContext, in_: ByteBuf, out: Object[]): void;
    handlerRemoved0(ctx: ChannelHandlerContext): void;
}