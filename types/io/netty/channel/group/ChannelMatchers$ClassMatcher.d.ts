import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelMatcher } from '../../../../io/netty/channel/group/ChannelMatcher.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChannelMatchers$ClassMatcher extends Object implements ChannelMatcher {
    constructor(arg0: Class<Channel>)
    // private clazz: Class<Channel>;
    matches(arg0: Channel): boolean;
}