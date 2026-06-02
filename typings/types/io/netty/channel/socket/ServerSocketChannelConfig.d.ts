import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ServerSocketChannelConfig extends ChannelConfig, Object{
    getBacklog(): number;
    getReceiveBufferSize(): number;
    isReuseAddress(): boolean;
    setAllocator(arg0: ByteBufAllocator): ServerSocketChannelConfig;
    setAutoRead(arg0: boolean): ServerSocketChannelConfig;
    setBacklog(arg0: number): ServerSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): ServerSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): ServerSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): ServerSocketChannelConfig;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): ServerSocketChannelConfig;
    setReceiveBufferSize(arg0: number): ServerSocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): ServerSocketChannelConfig;
    setReuseAddress(arg0: boolean): ServerSocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): ServerSocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): ServerSocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): ServerSocketChannelConfig;
    setWriteSpinCount(arg0: number): ServerSocketChannelConfig;
}