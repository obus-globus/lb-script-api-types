import type { AbstractChannel$AbstractUnsafe } from '../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { IoEvent } from '../../../../io/netty/channel/IoEvent.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { RecvByteBufAllocator$ExtendedHandle } from '../../../../io/netty/channel/RecvByteBufAllocator$ExtendedHandle.d.ts'
import type { EpollIoHandle } from '../../../../io/netty/channel/epoll/EpollIoHandle.d.ts'
import type { EpollRecvByteAllocatorHandle } from '../../../../io/netty/channel/epoll/EpollRecvByteAllocatorHandle.d.ts'
import type { FileDescriptor } from '../../../../io/netty/channel/unix/FileDescriptor.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class AbstractEpollChannel$AbstractEpollUnsafe extends AbstractChannel$AbstractUnsafe implements EpollIoHandle {
    constructor(null_: AbstractEpollChannel$AbstractEpollUnsafe)
    // private allocHandle: EpollRecvByteAllocatorHandle;
    // private readPending: boolean;
    channel(): Channel;
    clearEpollIn0(): void;
    // private clearEpollRdHup(): void;
    close(): void;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
    // private doFinishConnect(): boolean;
    epollInReady(): void;
    epollOutReady(): void;
    epollRdHupReady(): void;
    fd(): FileDescriptor;
    // private finishConnect(): void;
    // private fireEventAndClose(arg0: Object): void;
    flush0(): void;
    // private fulfillConnectPromise(arg0: ChannelPromise, arg1: boolean): void;
    // private fulfillConnectPromise(arg0: ChannelPromise, arg1: Throwable): void;
    handle(arg0: IoRegistration, arg1: IoEvent): void;
    newEpollHandle(arg0: RecvByteBufAllocator$ExtendedHandle): EpollRecvByteAllocatorHandle;
    recvBufAllocHandle(): EpollRecvByteAllocatorHandle;
    shouldStopReading(arg0: ChannelConfig): boolean;
    shutdownInput(arg0: boolean): void;
}