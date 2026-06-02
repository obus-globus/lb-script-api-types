import type { RecvByteBufAllocator } from '../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MaxMessagesRecvByteBufAllocator extends RecvByteBufAllocator, Object{
    maxMessagesPerRead(): number;
    maxMessagesPerRead(arg0: number): MaxMessagesRecvByteBufAllocator;
}