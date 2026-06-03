import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultChannelConfig } from '../../../../io/netty/channel/DefaultChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { EpollMode } from '../../../../io/netty/channel/epoll/EpollMode.d.ts'
import type { LinuxSocket } from '../../../../io/netty/channel/epoll/LinuxSocket.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollChannelConfig extends DefaultChannelConfig {
    constructor(arg0: Channel)
    constructor(arg0: Channel, arg1: RecvByteBufAllocator)
    // private maxBytesPerGatheringWrite: number;
    autoReadCleared(): void;
    // private checkChannelNotRegistered(): void;
    getEpollMode(): EpollMode;
    getMaxBytesPerGatheringWrite(): number;
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    setAllocator(arg0: ByteBufAllocator): EpollChannelConfig;
    setAutoRead(arg0: boolean): EpollChannelConfig;
    setConnectTimeoutMillis(arg0: number): EpollChannelConfig;
    setEpollMode(arg0: EpollMode): EpollChannelConfig;
    setMaxBytesPerGatheringWrite(arg0: number): void;
    setMaxMessagesPerRead(arg0: number): EpollChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): EpollChannelConfig;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): EpollChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): EpollChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): EpollChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): EpollChannelConfig;
    setWriteSpinCount(arg0: number): EpollChannelConfig;
    socket(): LinuxSocket;
}