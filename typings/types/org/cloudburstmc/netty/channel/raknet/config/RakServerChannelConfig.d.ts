import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelConfig } from '../../../../../../io/netty/channel/ChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RakServerMetrics } from '../../../../../../org/cloudburstmc/netty/channel/raknet/config/RakServerMetrics.d.ts'
export interface RakServerChannelConfig extends ChannelConfig, Object{
    getAdvertisement(): ByteBuf;
    getAllocator(): ByteBufAllocator;
    getConnectTimeoutMillis(): number;
    getGlobalPacketLimit(): number;
    getGuid(): number;
    getHandlePing(): boolean;
    getIpDontFragment(): boolean;
    getMaxChannels(): number;
    getMaxConnections(): number;
    getMaxMessagesPerRead(): number;
    getMaxMtu(): number;
    getMessageSizeEstimator(): MessageSizeEstimator;
    getMetrics(): RakServerMetrics;
    getMinMtu(): number;
    getPacketLimit(): number;
    getSendCookie(): boolean;
    getSupportedProtocols(): number[];
    getUnconnectedMagic(): ByteBuf;
    getWriteBufferHighWaterMark(): number;
    getWriteBufferLowWaterMark(): number;
    getWriteBufferWaterMark(): WriteBufferWaterMark;
    getWriteSpinCount(): number;
    isAutoClose(): boolean;
    isAutoRead(): boolean;
    setAdvertisement(arg0: ByteBuf): RakServerChannelConfig;
    setAllocator(arg0: ByteBufAllocator): ChannelConfig;
    setAutoClose(arg0: boolean): ChannelConfig;
    setAutoRead(arg0: boolean): ChannelConfig;
    setConnectTimeoutMillis(arg0: number): ChannelConfig;
    setGlobalPacketLimit(arg0: number): void;
    setGuid(arg0: number): RakServerChannelConfig;
    setHandlePing(arg0: boolean): RakServerChannelConfig;
    setIpDontFragment(arg0: boolean): void;
    setMaxChannels(arg0: number): RakServerChannelConfig;
    setMaxConnections(arg0: number): RakServerChannelConfig;
    setMaxMessagesPerRead(arg0: number): ChannelConfig;
    setMaxMtu(arg0: number): RakServerChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): ChannelConfig;
    setMetrics(arg0: RakServerMetrics): void;
    setMinMtu(arg0: number): RakServerChannelConfig;
    setPacketLimit(arg0: number): void;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): ChannelConfig;
    setSendCookie(arg0: boolean): void;
    setSupportedProtocols(arg0: number[]): RakServerChannelConfig;
    setUnconnectedMagic(arg0: ByteBuf): RakServerChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): ChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): ChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): ChannelConfig;
    setWriteSpinCount(arg0: number): ChannelConfig;
}