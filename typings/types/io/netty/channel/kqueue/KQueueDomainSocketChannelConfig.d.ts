import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { AbstractKQueueChannel } from '../../../../io/netty/channel/kqueue/AbstractKQueueChannel.d.ts'
import type { KQueueChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueChannelConfig.d.ts'
import type { DuplexChannelConfig } from '../../../../io/netty/channel/socket/DuplexChannelConfig.d.ts'
import type { DomainSocketChannelConfig } from '../../../../io/netty/channel/unix/DomainSocketChannelConfig.d.ts'
import type { DomainSocketReadMode } from '../../../../io/netty/channel/unix/DomainSocketReadMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueDomainSocketChannelConfig extends KQueueChannelConfig implements DuplexChannelConfig, DomainSocketChannelConfig {
    constructor(arg0: AbstractKQueueChannel)
    readonly allowHalfClosure: boolean;
    // private mode: DomainSocketReadMode;
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getReadMode(): DomainSocketReadMode;
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    isAllowHalfClosure(): boolean;
    setAllocator(arg0: ByteBufAllocator): KQueueDomainSocketChannelConfig;
    setAllowHalfClosure(arg0: boolean): KQueueDomainSocketChannelConfig;
    setAutoClose(arg0: boolean): KQueueDomainSocketChannelConfig;
    setAutoRead(arg0: boolean): KQueueDomainSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): KQueueDomainSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): KQueueDomainSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): KQueueDomainSocketChannelConfig;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    setRcvAllocTransportProvidesGuess(arg0: boolean): KQueueDomainSocketChannelConfig;
    setReadMode(arg0: DomainSocketReadMode): KQueueDomainSocketChannelConfig;
    setReceiveBufferSize(arg0: number): KQueueDomainSocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): KQueueDomainSocketChannelConfig;
    setSendBufferSize(arg0: number): KQueueDomainSocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): KQueueDomainSocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): KQueueDomainSocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): KQueueDomainSocketChannelConfig;
    setWriteSpinCount(arg0: number): KQueueDomainSocketChannelConfig;
}