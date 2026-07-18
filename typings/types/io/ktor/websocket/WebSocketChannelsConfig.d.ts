import type { ChannelConfig } from '../../../io/ktor/websocket/ChannelConfig.d.ts'
import type { ChannelOverflow } from '../../../io/ktor/websocket/ChannelOverflow.d.ts'
import type { WebSocketChannelsConfig$Companion } from '../../../io/ktor/websocket/WebSocketChannelsConfig$Companion.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WebSocketChannelsConfig extends Object {
    static Companion: WebSocketChannelsConfig$Companion;
    constructor()
    incoming: ChannelConfig;
    outgoing: ChannelConfig;
    bounded(capacity: number, onOverflow: ChannelOverflow): ChannelConfig;
    unlimited(): ChannelConfig;
}