import type { ChannelFactory as ChannelFactory_2 } from '../../../io/netty/bootstrap/ChannelFactory.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ChannelFactory<T extends Channel> extends ChannelFactory_2<T>, Object{
    newChannel(): T;
}