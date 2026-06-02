import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HttpClientUpgradeHandler$SourceCodec extends Object{
    prepareUpgradeFrom(arg0: ChannelHandlerContext): void;
    upgradeFrom(arg0: ChannelHandlerContext): void;
}