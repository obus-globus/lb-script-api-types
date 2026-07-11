import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelHandler } from '../../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelId } from '../../../../io/netty/channel/ChannelId.d.ts'
import type { ChannelInitializer } from '../../../../io/netty/channel/ChannelInitializer.d.ts'
import type { EmbeddedChannel } from '../../../../io/netty/channel/embedded/EmbeddedChannel.d.ts'
import type { Ticker } from '../../../../io/netty/util/concurrent/Ticker.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EmbeddedChannel$Builder extends Object {
    constructor(arg0: ChannelInitializer<Channel>)
    // private channelId: ChannelId;
    // private config: ChannelConfig;
    // private handler: ChannelHandler;
    // private handlers: ChannelHandler[];
    // private hasDisconnect: boolean;
    // private parent: Channel;
    // private register: boolean;
    // private ticker: Ticker;
    build(): EmbeddedChannel;
    channelId(arg0: ChannelId): EmbeddedChannel$Builder;
    config(arg0: ChannelConfig): EmbeddedChannel$Builder;
    handlers(arg0: ChannelHandler): EmbeddedChannel$Builder;
    handlers(...arg0: ChannelHandler[]): EmbeddedChannel$Builder;
    hasDisconnect(arg0: boolean): EmbeddedChannel$Builder;
    parent(arg0: Channel): EmbeddedChannel$Builder;
    register(arg0: boolean): EmbeddedChannel$Builder;
    ticker(arg0: Ticker): EmbeddedChannel$Builder;
}