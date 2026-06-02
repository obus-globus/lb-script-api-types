import type { MaxMessagesRecvByteBufAllocator } from '../../../io/netty/channel/MaxMessagesRecvByteBufAllocator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class DefaultMaxMessagesRecvByteBufAllocator extends Object implements MaxMessagesRecvByteBufAllocator {
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    // private ignoreBytesRead: boolean;
    // private maxMessagesPerRead: number;
    // private respectMaybeMoreData: boolean;
    maxMessagesPerRead(): number;
    maxMessagesPerRead(arg0: number): MaxMessagesRecvByteBufAllocator;
    respectMaybeMoreData(): boolean;
    respectMaybeMoreData(arg0: boolean): DefaultMaxMessagesRecvByteBufAllocator;
}