import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelConfig } from '../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelMetadata } from '../../../io/netty/channel/ChannelMetadata.d.ts'
import type { ChannelOption } from '../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultChannelConfig extends Object implements ChannelConfig {
    constructor(arg0: Channel)
    constructor(arg0: Channel, arg1: RecvByteBufAllocator)
    readonly allocator: ByteBufAllocator;
    readonly autoClose: boolean;
    readonly autoRead: number;
    // private channel: Channel;
    readonly connectTimeoutMillis: number;
    readonly maxMessagesPerWrite: number;
    // private msgSizeEstimator: MessageSizeEstimator;
    // private pinEventExecutor: boolean;
    // private rcvBufAllocator: RecvByteBufAllocator;
    readonly writeBufferWaterMark: WriteBufferWaterMark;
    readonly writeSpinCount: number;
    autoReadCleared(): void;
    getAllocator(): ByteBufAllocator;
    getConnectTimeoutMillis(): number;
    getMaxMessagesPerRead(): number;
    getMaxMessagesPerWrite(): number;
    getMessageSizeEstimator(): MessageSizeEstimator;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): JavaMap<ChannelOption<Object>, Object>;
    getOptions(arg0: JavaMap<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): JavaMap<ChannelOption<Object>, Object>;
    // private getPinEventExecutorPerGroup(): boolean;
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
    setMaxMessagesPerWrite(arg0: number): ChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): ChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setOptions(arg0: JavaMap<ChannelOption<Object>, Object | null>): boolean;
    // private setPinEventExecutorPerGroup(arg0: boolean): ChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): ChannelConfig;
    // private setRecvByteBufAllocator(arg0: RecvByteBufAllocator, arg1: ChannelMetadata): void;
    setWriteBufferHighWaterMark(arg0: number): ChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): ChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): ChannelConfig;
    setWriteSpinCount(arg0: number): ChannelConfig;
    validate<T extends unknown>(arg0: ChannelOption<T>, arg1: T): void;
}