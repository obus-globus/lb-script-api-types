import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ChannelPoolHandler extends Object{
    channelAcquired(arg0: Channel): void;
    channelCreated(arg0: Channel): void;
    channelReleased(arg0: Channel): void;
}