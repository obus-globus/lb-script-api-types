import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HttpServerUpgradeHandler$SourceCodec extends Object{
    upgradeFrom(arg0: ChannelHandlerContext): void;
}