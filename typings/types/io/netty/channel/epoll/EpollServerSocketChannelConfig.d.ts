import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { EpollServerChannelConfig } from '../../../../io/netty/channel/epoll/EpollServerChannelConfig.d.ts'
import type { EpollServerSocketChannel } from '../../../../io/netty/channel/epoll/EpollServerSocketChannel.d.ts'
import type { ServerSocketChannelConfig } from '../../../../io/netty/channel/socket/ServerSocketChannelConfig.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollServerSocketChannelConfig extends EpollServerChannelConfig implements ServerSocketChannelConfig {
    constructor(arg0: EpollServerSocketChannel)
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getTcpDeferAccept(): number;
    isFreeBind(): boolean;
    isIpTransparent(): boolean;
    isReusePort(): boolean;
    setAllocator(arg0: ByteBufAllocator): EpollServerSocketChannelConfig;
    setAutoRead(arg0: boolean): EpollServerSocketChannelConfig;
    setBacklog(arg0: number): EpollServerSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): EpollServerSocketChannelConfig;
    setFreeBind(arg0: boolean): EpollServerSocketChannelConfig;
    setIpTransparent(arg0: boolean): EpollServerSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): EpollServerSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): EpollServerSocketChannelConfig;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): EpollServerSocketChannelConfig;
    setReceiveBufferSize(arg0: number): EpollServerSocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): EpollServerSocketChannelConfig;
    setReuseAddress(arg0: boolean): EpollServerSocketChannelConfig;
    setReusePort(arg0: boolean): EpollServerSocketChannelConfig;
    setTcpDeferAccept(arg0: number): EpollServerSocketChannelConfig;
    setTcpMd5Sig(arg0: Map<InetAddress, number[]>): EpollServerSocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): EpollServerSocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): EpollServerSocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): EpollServerSocketChannelConfig;
    setWriteSpinCount(arg0: number): EpollServerSocketChannelConfig;
}