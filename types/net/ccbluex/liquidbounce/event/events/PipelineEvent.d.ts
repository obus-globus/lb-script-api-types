import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class PipelineEvent extends Event {
    constructor(channelPipeline: Map$Entry<string, ChannelHandler>[], local: boolean)
    readonly channelPipeline: Map$Entry<string, ChannelHandler>[];
    readonly local: boolean;
}