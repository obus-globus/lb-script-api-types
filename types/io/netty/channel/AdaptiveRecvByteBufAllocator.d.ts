import type { DefaultMaxMessagesRecvByteBufAllocator } from '../../../io/netty/channel/DefaultMaxMessagesRecvByteBufAllocator.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
export class AdaptiveRecvByteBufAllocator extends DefaultMaxMessagesRecvByteBufAllocator {
    static DEFAULT: AdaptiveRecvByteBufAllocator;
    static DEFAULT_INITIAL: number;
    static DEFAULT_MAXIMUM: number;
    static DEFAULT_MINIMUM: number;
    constructor()
    constructor(arg0: number, arg1: number, arg2: number)
    // private initial: number;
    // private maximum: number;
    // private minimum: number;
    newHandle(): RecvByteBufAllocator$Handle;
    respectMaybeMoreData(arg0: boolean): AdaptiveRecvByteBufAllocator;
}