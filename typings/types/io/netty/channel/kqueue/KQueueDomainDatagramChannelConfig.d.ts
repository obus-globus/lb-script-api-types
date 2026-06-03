import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { KQueueChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueChannelConfig.d.ts'
import type { KQueueDomainDatagramChannel } from '../../../../io/netty/channel/kqueue/KQueueDomainDatagramChannel.d.ts'
import type { DomainDatagramChannelConfig } from '../../../../io/netty/channel/unix/DomainDatagramChannelConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueDomainDatagramChannelConfig extends KQueueChannelConfig implements DomainDatagramChannelConfig {
    constructor(arg0: KQueueDomainDatagramChannel)
    // private activeOnOpen: boolean;
    getActiveOnOpen(): boolean;
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getSendBufferSize(): number;
    // private setActiveOnOpen(arg0: boolean): void;
    setAllocator(arg0: ByteBufAllocator): KQueueDomainDatagramChannelConfig;
    setAutoClose(arg0: boolean): KQueueDomainDatagramChannelConfig;
    setAutoRead(arg0: boolean): KQueueDomainDatagramChannelConfig;
    setConnectTimeoutMillis(arg0: number): KQueueDomainDatagramChannelConfig;
    setMaxMessagesPerRead(arg0: number): KQueueDomainDatagramChannelConfig;
    setMaxMessagesPerWrite(arg0: number): KQueueDomainDatagramChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): KQueueDomainDatagramChannelConfig;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    setRcvAllocTransportProvidesGuess(arg0: boolean): KQueueDomainDatagramChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): KQueueDomainDatagramChannelConfig;
    setSendBufferSize(arg0: number): KQueueDomainDatagramChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): KQueueDomainDatagramChannelConfig;
    setWriteSpinCount(arg0: number): KQueueDomainDatagramChannelConfig;
}