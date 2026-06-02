import type { MaxBytesRecvByteBufAllocator } from '../../../io/netty/channel/MaxBytesRecvByteBufAllocator.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class DefaultMaxBytesRecvByteBufAllocator extends Object implements MaxBytesRecvByteBufAllocator {
    constructor()
    constructor(arg0: number, arg1: number)
    // private maxBytesPerIndividualRead: number;
    // private maxBytesPerRead: number;
    maxBytesPerIndividualRead(): number;
    maxBytesPerIndividualRead(arg0: number): DefaultMaxBytesRecvByteBufAllocator;
    maxBytesPerRead(): number;
    maxBytesPerRead(arg0: number): DefaultMaxBytesRecvByteBufAllocator;
    maxBytesPerReadPair(): Map$Entry<number, number>;
    maxBytesPerReadPair(arg0: number, arg1: number): DefaultMaxBytesRecvByteBufAllocator;
    newHandle(): RecvByteBufAllocator$Handle;
}