import type { DefaultMaxMessagesRecvByteBufAllocator } from '../../../io/netty/channel/DefaultMaxMessagesRecvByteBufAllocator.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
export class FixedRecvByteBufAllocator extends DefaultMaxMessagesRecvByteBufAllocator {
    constructor(arg0: number)
    // private bufferSize: number;
    newHandle(): RecvByteBufAllocator$Handle;
    respectMaybeMoreData(): boolean;
    respectMaybeMoreData(arg0: boolean): FixedRecvByteBufAllocator;
}