import type { RecvByteBufAllocator$Handle } from '../../../io/netty/channel/RecvByteBufAllocator$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RecvByteBufAllocator extends Object{
    newHandle(): RecvByteBufAllocator$Handle;
}