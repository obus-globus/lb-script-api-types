import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { AbstractEpollChannel } from '../../../../io/netty/channel/epoll/AbstractEpollChannel.d.ts'
import type { EpollChannelConfig } from '../../../../io/netty/channel/epoll/EpollChannelConfig.d.ts'
import type { EpollMode } from '../../../../io/netty/channel/epoll/EpollMode.d.ts'
import type { ServerSocketChannelConfig } from '../../../../io/netty/channel/socket/ServerSocketChannelConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollServerChannelConfig extends EpollChannelConfig implements ServerSocketChannelConfig {
    constructor(arg0: AbstractEpollChannel)
    readonly backlog: number;
    // private pendingFastOpenRequestsThreshold: number;
    getBacklog(): number;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getReceiveBufferSize(): number;
    getTcpFastopen(): number;
    isReuseAddress(): boolean;
    setAllocator(arg0: ByteBufAllocator): EpollServerChannelConfig;
    setAutoRead(arg0: boolean): EpollServerChannelConfig;
    setBacklog(arg0: number): EpollServerChannelConfig;
    setConnectTimeoutMillis(arg0: number): EpollServerChannelConfig;
    setEpollMode(arg0: EpollMode): EpollServerChannelConfig;
    setMaxMessagesPerRead(arg0: number): EpollServerChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): EpollServerChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): EpollServerChannelConfig;
    setReceiveBufferSize(arg0: number): EpollServerChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): EpollServerChannelConfig;
    setReuseAddress(arg0: boolean): EpollServerChannelConfig;
    setTcpFastopen(arg0: number): EpollServerChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): EpollServerChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): EpollServerChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): EpollServerChannelConfig;
    setWriteSpinCount(arg0: number): EpollServerChannelConfig;
}