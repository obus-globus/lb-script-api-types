import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ChannelFactory<T extends Channel> extends Object{
    newChannel(): T;
}