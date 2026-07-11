import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { KQueueChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueChannelConfig.d.ts'
import type { KQueueSocketChannel } from '../../../../io/netty/channel/kqueue/KQueueSocketChannel.d.ts'
import type { SocketChannelConfig } from '../../../../io/netty/channel/socket/SocketChannelConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueSocketChannelConfig extends KQueueChannelConfig implements SocketChannelConfig {
    constructor(arg0: KQueueSocketChannel)
    readonly allowHalfClosure: boolean;
    // private tcpFastopen: boolean;
    // private calculateMaxBytesPerGatheringWrite(): void;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    getSndLowAt(): number;
    getSoLinger(): number;
    getTrafficClass(): number;
    isAllowHalfClosure(): boolean;
    isKeepAlive(): boolean;
    isReuseAddress(): boolean;
    isTcpFastOpenConnect(): boolean;
    isTcpNoDelay(): boolean;
    isTcpNoPush(): boolean;
    setAllocator(arg0: ByteBufAllocator): KQueueSocketChannelConfig;
    setAllowHalfClosure(arg0: boolean): KQueueSocketChannelConfig;
    setAutoClose(arg0: boolean): KQueueSocketChannelConfig;
    setAutoRead(arg0: boolean): KQueueSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): KQueueSocketChannelConfig;
    setKeepAlive(arg0: boolean): KQueueSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): KQueueSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): KQueueSocketChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): KQueueSocketChannelConfig;
    setRcvAllocTransportProvidesGuess(arg0: boolean): KQueueSocketChannelConfig;
    setReceiveBufferSize(arg0: number): KQueueSocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): KQueueSocketChannelConfig;
    setReuseAddress(arg0: boolean): KQueueSocketChannelConfig;
    setSendBufferSize(arg0: number): KQueueSocketChannelConfig;
    setSndLowAt(arg0: number): void;
    setSoLinger(arg0: number): KQueueSocketChannelConfig;
    setTcpFastOpenConnect(arg0: boolean): KQueueSocketChannelConfig;
    setTcpNoDelay(arg0: boolean): KQueueSocketChannelConfig;
    setTcpNoPush(arg0: boolean): void;
    setTrafficClass(arg0: number): KQueueSocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): KQueueSocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): KQueueSocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): KQueueSocketChannelConfig;
    setWriteSpinCount(arg0: number): KQueueSocketChannelConfig;
}