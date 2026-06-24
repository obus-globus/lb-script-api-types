import type { AdaptiveRecvByteBufAllocator } from '../../../io/netty/channel/AdaptiveRecvByteBufAllocator.d.ts'
import type { DefaultMaxMessagesRecvByteBufAllocator$MaxMessageHandle } from '../../../io/netty/channel/DefaultMaxMessagesRecvByteBufAllocator$MaxMessageHandle.d.ts'
import type { AdaptiveCalculator } from '../../../io/netty/util/internal/AdaptiveCalculator.d.ts'
export class AdaptiveRecvByteBufAllocator$HandleImpl extends DefaultMaxMessagesRecvByteBufAllocator$MaxMessageHandle {
    constructor(null_: AdaptiveRecvByteBufAllocator, arg1: number, arg2: number, arg3: number)
    // private calculator: AdaptiveCalculator;
    guess(): number;
    lastBytesRead(): number;
    lastBytesRead(arg0: number): void;
    readComplete(): void;
}