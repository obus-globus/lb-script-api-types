import type { RecvByteBufAllocator } from '../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { RecvByteBufAllocator$Handle } from '../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export interface MaxBytesRecvByteBufAllocator extends RecvByteBufAllocator, Object{
    maxBytesPerIndividualRead(): number;
    maxBytesPerIndividualRead(arg0: number): MaxBytesRecvByteBufAllocator;
    maxBytesPerRead(): number;
    maxBytesPerRead(arg0: number): MaxBytesRecvByteBufAllocator;
    maxBytesPerReadPair(): Map$Entry<number, number>;
    maxBytesPerReadPair(arg0: number, arg1: number): MaxBytesRecvByteBufAllocator;
    newHandle(): RecvByteBufAllocator$Handle;
}