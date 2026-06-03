import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { AbstractKQueueChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel.d.ts'
import type { KQueueChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueChannelConfig.d.ts'
import type { ServerSocketChannelConfig } from '../../../../io/netty/channel/socket/ServerSocketChannelConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueServerChannelConfig extends KQueueChannelConfig implements ServerSocketChannelConfig {
    constructor(arg0: AbstractKQueueChannel)
    readonly backlog: number;
    // private enableTcpFastOpen: boolean;
    getBacklog(): number;
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getReceiveBufferSize(): number;
    isReuseAddress(): boolean;
    isTcpFastOpen(): boolean;
    setAllocator(arg0: ByteBufAllocator): KQueueServerChannelConfig;
    setAutoRead(arg0: boolean): KQueueServerChannelConfig;
    setBacklog(arg0: number): KQueueServerChannelConfig;
    setConnectTimeoutMillis(arg0: number): KQueueServerChannelConfig;
    setMaxMessagesPerRead(arg0: number): KQueueServerChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): KQueueServerChannelConfig;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): KQueueServerChannelConfig;
    setRcvAllocTransportProvidesGuess(arg0: boolean): KQueueServerChannelConfig;
    setReceiveBufferSize(arg0: number): KQueueServerChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): KQueueServerChannelConfig;
    setReuseAddress(arg0: boolean): KQueueServerChannelConfig;
    setTcpFastOpen(arg0: boolean): KQueueServerChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): KQueueServerChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): KQueueServerChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): KQueueServerChannelConfig;
    setWriteSpinCount(arg0: number): KQueueServerChannelConfig;
}