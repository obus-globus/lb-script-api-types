import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageDecoder } from '../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BundlerInfo } from '../../../net/minecraft/network/protocol/BundlerInfo.d.ts'
import type { BundlerInfo$Bundler } from '../../../net/minecraft/network/protocol/BundlerInfo$Bundler.d.ts'
import type { Packet } from '../../../net/minecraft/network/protocol/Packet.d.ts'
export class PacketBundlePacker extends MessageToMessageDecoder<Packet<any>> {
    constructor(bundlerInfo: BundlerInfo)
    // private bundlerInfo: BundlerInfo;
    // private currentBundler: BundlerInfo$Bundler;
    decode(ctx: ChannelHandlerContext, msg: Packet<any>, out: Object[]): void;
}