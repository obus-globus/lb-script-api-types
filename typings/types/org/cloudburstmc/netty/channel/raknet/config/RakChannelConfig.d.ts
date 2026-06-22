import type { ByteBufAllocator } from '../../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelConfig } from '../../../../../../io/netty/channel/ChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RakChannelMetrics } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakChannelMetrics.d.ts'
export interface RakChannelConfig extends ChannelConfig, Object{
    getAllocator(): ByteBufAllocator;
    getConnectTimeoutMillis(): number;
    getFlushInterval(): number;
    getGuid(): number;
    getMaxMessagesPerRead(): number;
    getMessageSizeEstimator(): MessageSizeEstimator;
    getMetrics(): RakChannelMetrics;
    getMtu(): number;
    getOrderingChannels(): number;
    getProtocolVersion(): number;
    getSessionTimeout(): number;
    getWriteBufferHighWaterMark(): number;
    getWriteBufferLowWaterMark(): number;
    getWriteBufferWaterMark(): WriteBufferWaterMark;
    getWriteSpinCount(): number;
    isAutoClose(): boolean;
    isAutoFlush(): boolean;
    isAutoRead(): boolean;
    setAllocator(arg0: ByteBufAllocator): ChannelConfig;
    setAutoClose(arg0: boolean): ChannelConfig;
    setAutoFlush(arg0: boolean): void;
    setAutoRead(arg0: boolean): ChannelConfig;
    setConnectTimeoutMillis(arg0: number): ChannelConfig;
    setFlushInterval(arg0: number): void;
    setGuid(arg0: number): RakChannelConfig;
    setMaxMessagesPerRead(arg0: number): ChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): ChannelConfig;
    setMetrics(arg0: RakChannelMetrics): RakChannelConfig;
    setMtu(arg0: number): RakChannelConfig;
    setOrderingChannels(arg0: number): RakChannelConfig;
    setProtocolVersion(arg0: number): RakChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): ChannelConfig;
    setSessionTimeout(arg0: number): RakChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): ChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): ChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): ChannelConfig;
    setWriteSpinCount(arg0: number): ChannelConfig;
}