import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ChannelMatcher extends Object{
    matches(arg0: Channel): boolean;
}