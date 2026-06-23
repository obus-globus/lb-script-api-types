import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ChannelConfig extends Object{
    getAllocator(): ByteBufAllocator;
    getConnectTimeoutMillis(): number;
    getMaxMessagesPerRead(): number;
    getMessageSizeEstimator(): MessageSizeEstimator;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getRecvByteBufAllocator<T extends RecvByteBufAllocator>(): T;
    getWriteBufferHighWaterMark(): number;
    getWriteBufferLowWaterMark(): number;
    getWriteBufferWaterMark(): WriteBufferWaterMark;
    getWriteSpinCount(): number;
    isAutoClose(): boolean;
    isAutoRead(): boolean;
    setAllocator(arg0: ByteBufAllocator): ChannelConfig;
    setAutoClose(arg0: boolean): ChannelConfig;
    setAutoRead(arg0: boolean): ChannelConfig;
    setConnectTimeoutMillis(arg0: number): ChannelConfig;
    setMaxMessagesPerRead(arg0: number): ChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): ChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setOptions(arg0: Map<ChannelOption<Object>, Object | null>): boolean;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): ChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): ChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): ChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): ChannelConfig;
    setWriteSpinCount(arg0: number): ChannelConfig;
}