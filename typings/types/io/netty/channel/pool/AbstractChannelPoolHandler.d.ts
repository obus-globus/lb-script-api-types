import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelPoolHandler } from '../../../../io/netty/channel/pool/ChannelPoolHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractChannelPoolHandler extends Object implements ChannelPoolHandler {
    constructor()
    channelAcquired(arg0: Channel): void;
    channelCreated(arg0: Channel): void;
    channelReleased(arg0: Channel): void;
}