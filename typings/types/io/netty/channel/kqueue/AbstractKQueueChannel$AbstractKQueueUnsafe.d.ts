import type { AbstractChannel$AbstractUnsafe } from '../../../../io/netty/channel/AbstractChannel$AbstractUnsafe.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { IoEvent } from '../../../../io/netty/channel/IoEvent.d.ts'
import type { IoRegistration } from '../../../../io/netty/channel/IoRegistration.d.ts'
import type { KQueueIoHandle } from '../../../../io/netty/channel/kqueue/KQueueIoHandle.d.ts'
import type { KQueueRecvByteAllocatorHandle } from '../../../../io/netty/channel/kqueue/KQueueRecvByteAllocatorHandle.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class AbstractKQueueChannel$AbstractKQueueUnsafe extends AbstractChannel$AbstractUnsafe implements KQueueIoHandle {
    constructor(null_: AbstractKQueueChannel$AbstractKQueueUnsafe)
    // private allocHandle: KQueueRecvByteAllocatorHandle;
    // private readPending: boolean;
    channel(): Channel;
    clearReadFilter0(): void;
    close(): void;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): void;
    // private doFinishConnect(): boolean;
    failConnectPromise(arg0: Throwable): boolean;
    // private finishConnect(): void;
    // private fireEventAndClose(arg0: Object): void;
    flush0(): void;
    // private fulfillConnectPromise(arg0: ChannelPromise, arg1: boolean): void;
    // private fulfillConnectPromise(arg0: ChannelPromise, arg1: Throwable): void;
    handle(arg0: IoRegistration, arg1: IoEvent): void;
    ident(): number;
    // private readEOF(): void;
    readReady(arg0: KQueueRecvByteAllocatorHandle): void;
    recvBufAllocHandle(): KQueueRecvByteAllocatorHandle;
    shouldStopReading(arg0: ChannelConfig): boolean;
    shutdownInput(arg0: boolean): void;
    // private writeReady(): void;
}