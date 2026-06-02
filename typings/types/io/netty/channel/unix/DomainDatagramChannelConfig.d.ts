import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DomainDatagramChannelConfig extends ChannelConfig, Object{
    getSendBufferSize(): number;
    setAllocator(arg0: ByteBufAllocator): DomainDatagramChannelConfig;
    setAutoClose(arg0: boolean): DomainDatagramChannelConfig;
    setAutoRead(arg0: boolean): DomainDatagramChannelConfig;
    setConnectTimeoutMillis(arg0: number): DomainDatagramChannelConfig;
    setMaxMessagesPerRead(arg0: number): DomainDatagramChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): DomainDatagramChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): DomainDatagramChannelConfig;
    setSendBufferSize(arg0: number): DomainDatagramChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): DomainDatagramChannelConfig;
    setWriteSpinCount(arg0: number): DomainDatagramChannelConfig;
}