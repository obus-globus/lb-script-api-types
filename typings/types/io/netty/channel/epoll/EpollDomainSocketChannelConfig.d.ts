import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { AbstractEpollChannel } from '../../../../io/netty/channel/epoll/AbstractEpollChannel.d.ts'
import type { EpollChannelConfig } from '../../../../io/netty/channel/epoll/EpollChannelConfig.d.ts'
import type { EpollMode } from '../../../../io/netty/channel/epoll/EpollMode.d.ts'
import type { DuplexChannelConfig } from '../../../../io/netty/channel/socket/DuplexChannelConfig.d.ts'
import type { DomainSocketChannelConfig } from '../../../../io/netty/channel/unix/DomainSocketChannelConfig.d.ts'
import type { DomainSocketReadMode } from '../../../../io/netty/channel/unix/DomainSocketReadMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollDomainSocketChannelConfig extends EpollChannelConfig implements DuplexChannelConfig, DomainSocketChannelConfig {
    constructor(arg0: AbstractEpollChannel)
    readonly allowHalfClosure: boolean;
    // private mode: DomainSocketReadMode;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): JavaMap<ChannelOption<Object>, Object>;
    getOptions(arg0: JavaMap<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): JavaMap<ChannelOption<Object>, Object>;
    getReadMode(): DomainSocketReadMode;
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    isAllowHalfClosure(): boolean;
    setAllocator(arg0: ByteBufAllocator): EpollDomainSocketChannelConfig;
    setAllowHalfClosure(arg0: boolean): EpollDomainSocketChannelConfig;
    setAutoClose(arg0: boolean): EpollDomainSocketChannelConfig;
    setAutoRead(arg0: boolean): EpollDomainSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): EpollDomainSocketChannelConfig;
    setEpollMode(arg0: EpollMode): EpollDomainSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): EpollDomainSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): EpollDomainSocketChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setReadMode(arg0: DomainSocketReadMode): EpollDomainSocketChannelConfig;
    setReceiveBufferSize(arg0: number): EpollDomainSocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): EpollDomainSocketChannelConfig;
    setSendBufferSize(arg0: number): EpollDomainSocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): EpollDomainSocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): EpollDomainSocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): EpollDomainSocketChannelConfig;
    setWriteSpinCount(arg0: number): EpollDomainSocketChannelConfig;
}