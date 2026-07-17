import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { EpollChannelConfig } from '../../../../io/netty/channel/epoll/EpollChannelConfig.d.ts'
import type { EpollMode } from '../../../../io/netty/channel/epoll/EpollMode.d.ts'
import type { EpollSocketChannel } from '../../../../io/netty/channel/epoll/EpollSocketChannel.d.ts'
import type { SocketChannelConfig } from '../../../../io/netty/channel/socket/SocketChannelConfig.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollSocketChannelConfig extends EpollChannelConfig implements SocketChannelConfig {
    constructor(arg0: EpollSocketChannel)
    readonly allowHalfClosure: boolean;
    // private tcpFastopen: boolean;
    // private calculateMaxBytesPerGatheringWrite(): void;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): JavaMap<ChannelOption<Object>, Object>;
    getOptions(arg0: JavaMap<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): JavaMap<ChannelOption<Object>, Object>;
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    getSoBusyPoll(): number;
    getSoLinger(): number;
    getTcpKeepCnt(): number;
    getTcpKeepIdle(): number;
    getTcpKeepIntvl(): number;
    getTcpNotSentLowAt(): number;
    getTcpUserTimeout(): number;
    getTrafficClass(): number;
    isAllowHalfClosure(): boolean;
    isIpBindAddressNoPort(): boolean;
    isIpTransparent(): boolean;
    isKeepAlive(): boolean;
    isReuseAddress(): boolean;
    isTcpCork(): boolean;
    isTcpFastOpenConnect(): boolean;
    isTcpNoDelay(): boolean;
    isTcpQuickAck(): boolean;
    setAllocator(arg0: ByteBufAllocator): EpollSocketChannelConfig;
    setAllowHalfClosure(arg0: boolean): EpollSocketChannelConfig;
    setAutoClose(arg0: boolean): EpollSocketChannelConfig;
    setAutoRead(arg0: boolean): EpollSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): EpollSocketChannelConfig;
    setEpollMode(arg0: EpollMode): EpollSocketChannelConfig;
    setIpBindAddressNoPort(arg0: boolean): EpollSocketChannelConfig;
    setIpTransparent(arg0: boolean): EpollSocketChannelConfig;
    setKeepAlive(arg0: boolean): EpollSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): EpollSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): EpollSocketChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): EpollSocketChannelConfig;
    setReceiveBufferSize(arg0: number): EpollSocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): EpollSocketChannelConfig;
    setReuseAddress(arg0: boolean): EpollSocketChannelConfig;
    setSendBufferSize(arg0: number): EpollSocketChannelConfig;
    setSoBusyPoll(arg0: number): EpollSocketChannelConfig;
    setSoLinger(arg0: number): EpollSocketChannelConfig;
    setTcpCork(arg0: boolean): EpollSocketChannelConfig;
    setTcpFastOpenConnect(arg0: boolean): EpollSocketChannelConfig;
    setTcpKeepCnt(arg0: number): EpollSocketChannelConfig;
    setTcpKeepCntl(arg0: number): EpollSocketChannelConfig;
    setTcpKeepIdle(arg0: number): EpollSocketChannelConfig;
    setTcpKeepIntvl(arg0: number): EpollSocketChannelConfig;
    setTcpMd5Sig(arg0: JavaMap<InetAddress, number[]>): EpollSocketChannelConfig;
    setTcpNoDelay(arg0: boolean): EpollSocketChannelConfig;
    setTcpNotSentLowAt(arg0: number): EpollSocketChannelConfig;
    setTcpQuickAck(arg0: boolean): EpollSocketChannelConfig;
    setTcpUserTimeout(arg0: number): EpollSocketChannelConfig;
    setTrafficClass(arg0: number): EpollSocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): EpollSocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): EpollSocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): EpollSocketChannelConfig;
    setWriteSpinCount(arg0: number): EpollSocketChannelConfig;
}