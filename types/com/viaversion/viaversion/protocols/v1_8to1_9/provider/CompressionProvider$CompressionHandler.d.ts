import type { ChannelHandler } from '../../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface CompressionProvider$CompressionHandler extends ChannelHandler, Object{
    setCompressionThreshold(arg0: number): void;
}