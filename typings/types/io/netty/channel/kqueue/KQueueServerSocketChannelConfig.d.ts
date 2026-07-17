import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { AcceptFilter } from '../../../../io/netty/channel/kqueue/AcceptFilter.d.ts'
import type { KQueueServerChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueServerChannelConfig.d.ts'
import type { KQueueServerSocketChannel } from '../../../../io/netty/channel/kqueue/KQueueServerSocketChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueServerSocketChannelConfig extends KQueueServerChannelConfig {
    constructor(arg0: KQueueServerSocketChannel)
    getAcceptFilter(): AcceptFilter;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): JavaMap<ChannelOption<Object>, Object>;
    getOptions(arg0: JavaMap<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): JavaMap<ChannelOption<Object>, Object>;
    isReusePort(): boolean;
    setAcceptFilter(arg0: AcceptFilter): KQueueServerSocketChannelConfig;
    setAllocator(arg0: ByteBufAllocator): KQueueServerSocketChannelConfig;
    setAutoRead(arg0: boolean): KQueueServerSocketChannelConfig;
    setBacklog(arg0: number): KQueueServerSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): KQueueServerSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): KQueueServerSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): KQueueServerSocketChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): KQueueServerSocketChannelConfig;
    setRcvAllocTransportProvidesGuess(arg0: boolean): KQueueServerSocketChannelConfig;
    setReceiveBufferSize(arg0: number): KQueueServerSocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): KQueueServerSocketChannelConfig;
    setReuseAddress(arg0: boolean): KQueueServerSocketChannelConfig;
    setReusePort(arg0: boolean): KQueueServerSocketChannelConfig;
    setTcpFastOpen(arg0: boolean): KQueueServerSocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): KQueueServerSocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): KQueueServerSocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): KQueueServerSocketChannelConfig;
    setWriteSpinCount(arg0: number): KQueueServerSocketChannelConfig;
}