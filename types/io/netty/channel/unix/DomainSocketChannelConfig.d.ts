import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { DomainSocketReadMode } from '../../../../io/netty/channel/unix/DomainSocketReadMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DomainSocketChannelConfig extends ChannelConfig, Object{
    getReadMode(): DomainSocketReadMode;
    setAllocator(arg0: ByteBufAllocator): DomainSocketChannelConfig;
    setAutoClose(arg0: boolean): DomainSocketChannelConfig;
    setAutoRead(arg0: boolean): DomainSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): DomainSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): DomainSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): DomainSocketChannelConfig;
    setReadMode(arg0: DomainSocketReadMode): DomainSocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): DomainSocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): DomainSocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): DomainSocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): DomainSocketChannelConfig;
    setWriteSpinCount(arg0: number): DomainSocketChannelConfig;
}