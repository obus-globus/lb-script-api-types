import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultChannelConfig } from '../../../../io/netty/channel/DefaultChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { AbstractKQueueChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueChannelConfig extends DefaultChannelConfig {
    constructor(arg0: AbstractKQueueChannel)
    constructor(arg0: AbstractKQueueChannel, arg1: RecvByteBufAllocator)
    // private maxBytesPerGatheringWrite: number;
    // private transportProvidesGuess: boolean;
    autoReadCleared(): void;
    getMaxBytesPerGatheringWrite(): number;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): JavaMap<ChannelOption<Object>, Object>;
    getOptions(arg0: JavaMap<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): JavaMap<ChannelOption<Object>, Object>;
    getRcvAllocTransportProvidesGuess(): boolean;
    setAllocator(arg0: ByteBufAllocator): KQueueChannelConfig;
    setAutoRead(arg0: boolean): KQueueChannelConfig;
    setConnectTimeoutMillis(arg0: number): KQueueChannelConfig;
    setMaxBytesPerGatheringWrite(arg0: number): void;
    setMaxMessagesPerRead(arg0: number): KQueueChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): KQueueChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setRcvAllocTransportProvidesGuess(arg0: boolean): KQueueChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): KQueueChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): KQueueChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): KQueueChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): KQueueChannelConfig;
    setWriteSpinCount(arg0: number): KQueueChannelConfig;
}