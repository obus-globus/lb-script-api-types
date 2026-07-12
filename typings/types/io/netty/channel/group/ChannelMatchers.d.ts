import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelMatcher } from '../../../../io/netty/channel/group/ChannelMatcher.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChannelMatchers extends Object {
    static all(): ChannelMatcher;
    static compose(...paramarg0: (Object | null)[]): ChannelMatcher;
    static invert(paramarg0: ChannelMatcher): ChannelMatcher;
    static is(paramarg0: Channel): ChannelMatcher;
    static isInstanceOf(paramarg0: Class<Channel>): ChannelMatcher;
    static isNonServerChannel(): ChannelMatcher;
    static isNot(paramarg0: Channel): ChannelMatcher;
    static isNotInstanceOf(paramarg0: Class<Channel>): ChannelMatcher;
    static isServerChannel(): ChannelMatcher;
    private constructor()
}