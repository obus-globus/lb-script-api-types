import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DuplexChannelConfig extends ChannelConfig, Object{
    isAllowHalfClosure(): boolean;
    setAllocator(arg0: ByteBufAllocator): DuplexChannelConfig;
    setAllowHalfClosure(arg0: boolean): DuplexChannelConfig;
    setAutoClose(arg0: boolean): DuplexChannelConfig;
    setAutoRead(arg0: boolean): DuplexChannelConfig;
    setMaxMessagesPerRead(arg0: number): DuplexChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): DuplexChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): DuplexChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): DuplexChannelConfig;
    setWriteSpinCount(arg0: number): DuplexChannelConfig;
}