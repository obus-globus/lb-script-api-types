import type { RecvByteBufAllocator$ExtendedHandle } from '../../../../io/netty/channel/RecvByteBufAllocator$ExtendedHandle.d.ts'
import type { EpollRecvByteAllocatorHandle } from '../../../../io/netty/channel/epoll/EpollRecvByteAllocatorHandle.d.ts'
export class EpollRecvByteAllocatorStreamingHandle extends EpollRecvByteAllocatorHandle {
    constructor(arg0: RecvByteBufAllocator$ExtendedHandle)
    maybeMoreDataToRead(): boolean;
}