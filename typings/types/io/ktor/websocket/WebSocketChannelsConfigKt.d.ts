import type { ChannelConfig } from '../../../io/ktor/websocket/ChannelConfig.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
import type { Channel$Factory } from '../../../kotlinx/coroutines/channels/Channel$Factory.d.ts'
export class WebSocketChannelsConfigKt extends Object {
    static from<T extends unknown>(self: Channel$Factory, config: ChannelConfig): Channel<T>;
}