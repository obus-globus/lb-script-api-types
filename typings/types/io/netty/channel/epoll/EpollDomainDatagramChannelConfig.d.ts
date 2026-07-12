import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { EpollChannelConfig } from '../../../../io/netty/channel/epoll/EpollChannelConfig.d.ts'
import type { EpollDomainDatagramChannel } from '../../../../io/netty/channel/epoll/EpollDomainDatagramChannel.d.ts'
import type { EpollMode } from '../../../../io/netty/channel/epoll/EpollMode.d.ts'
import type { DomainDatagramChannelConfig } from '../../../../io/netty/channel/unix/DomainDatagramChannelConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollDomainDatagramChannelConfig extends EpollChannelConfig implements DomainDatagramChannelConfig {
    constructor(arg0: EpollDomainDatagramChannel)
    // private activeOnOpen: boolean;
    getActiveOnOpen(): boolean;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getSendBufferSize(): number;
    // private setActiveOnOpen(arg0: boolean): void;
    setAllocator(arg0: ByteBufAllocator): EpollDomainDatagramChannelConfig;
    setAutoClose(arg0: boolean): EpollDomainDatagramChannelConfig;
    setAutoRead(arg0: boolean): EpollDomainDatagramChannelConfig;
    setConnectTimeoutMillis(arg0: number): EpollDomainDatagramChannelConfig;
    setEpollMode(arg0: EpollMode): EpollDomainDatagramChannelConfig;
    setMaxMessagesPerRead(arg0: number): EpollDomainDatagramChannelConfig;
    setMaxMessagesPerWrite(arg0: number): EpollDomainDatagramChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): EpollDomainDatagramChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): EpollDomainDatagramChannelConfig;
    setSendBufferSize(arg0: number): EpollDomainDatagramChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): EpollDomainDatagramChannelConfig;
    setWriteSpinCount(arg0: number): EpollDomainDatagramChannelConfig;
}