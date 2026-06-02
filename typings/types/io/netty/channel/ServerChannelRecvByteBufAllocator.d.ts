import type { DefaultMaxMessagesRecvByteBufAllocator } from '../../../io/netty/channel/DefaultMaxMessagesRecvByteBufAllocator.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
export class ServerChannelRecvByteBufAllocator extends DefaultMaxMessagesRecvByteBufAllocator {
    constructor()
    newHandle(): RecvByteBufAllocator$Handle;
}