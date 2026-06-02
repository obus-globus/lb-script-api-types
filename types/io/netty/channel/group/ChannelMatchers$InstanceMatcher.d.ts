import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelMatcher } from '../../../../io/netty/channel/group/ChannelMatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChannelMatchers$InstanceMatcher extends Object implements ChannelMatcher {
    constructor(arg0: Channel)
    // private channel: Channel;
    matches(arg0: Channel): boolean;
}