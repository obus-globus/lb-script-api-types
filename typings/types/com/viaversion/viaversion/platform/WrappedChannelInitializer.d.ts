import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelInitializer } from '../../../../io/netty/channel/ChannelInitializer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface WrappedChannelInitializer extends Object{
    original(): ChannelInitializer<Channel>;
}