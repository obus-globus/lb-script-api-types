import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageEncoder } from '../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BundlerInfo } from '../../../net/minecraft/network/protocol/BundlerInfo.d.ts'
import type { Packet } from '../../../net/minecraft/network/protocol/Packet.d.ts'
export class PacketBundleUnpacker extends MessageToMessageEncoder<Packet<any>> {
    constructor(bundlerInfo: BundlerInfo)
    // private bundlerInfo: BundlerInfo;
    encode(ctx: ChannelHandlerContext, msg: Packet<any>, out: Object[]): void;
}