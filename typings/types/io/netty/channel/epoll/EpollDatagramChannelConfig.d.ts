import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { EpollChannelConfig } from '../../../../io/netty/channel/epoll/EpollChannelConfig.d.ts'
import type { EpollDatagramChannel } from '../../../../io/netty/channel/epoll/EpollDatagramChannel.d.ts'
import type { EpollMode } from '../../../../io/netty/channel/epoll/EpollMode.d.ts'
import type { DatagramChannelConfig } from '../../../../io/netty/channel/socket/DatagramChannelConfig.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EpollDatagramChannelConfig extends EpollChannelConfig implements DatagramChannelConfig {
    constructor(arg0: EpollDatagramChannel)
    // private activeOnOpen: boolean;
    // private gro: boolean;
    // private maxDatagramSize: number;
    getActiveOnOpen(): boolean;
    getInterface(): InetAddress;
    getMaxDatagramPayloadSize(): number;
    getNetworkInterface(): NetworkInterface;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    getTimeToLive(): number;
    getTrafficClass(): number;
    isBroadcast(): boolean;
    isFreeBind(): boolean;
    isIpMulticastAll(): boolean;
    isIpRecvOrigDestAddr(): boolean;
    isIpTransparent(): boolean;
    isLoopbackModeDisabled(): boolean;
    isReuseAddress(): boolean;
    isReusePort(): boolean;
    isUdpGro(): boolean;
    // private setActiveOnOpen(arg0: boolean): void;
    setAllocator(arg0: ByteBufAllocator): EpollDatagramChannelConfig;
    setAutoClose(arg0: boolean): EpollDatagramChannelConfig;
    setAutoRead(arg0: boolean): EpollDatagramChannelConfig;
    setBroadcast(arg0: boolean): EpollDatagramChannelConfig;
    setConnectTimeoutMillis(arg0: number): EpollDatagramChannelConfig;
    setEpollMode(arg0: EpollMode): EpollDatagramChannelConfig;
    setFreeBind(arg0: boolean): EpollDatagramChannelConfig;
    setInterface(arg0: InetAddress): EpollDatagramChannelConfig;
    setIpMulticastAll(arg0: boolean): EpollDatagramChannelConfig;
    setIpRecvOrigDestAddr(arg0: boolean): EpollDatagramChannelConfig;
    setIpTransparent(arg0: boolean): EpollDatagramChannelConfig;
    setLoopbackModeDisabled(arg0: boolean): DatagramChannelConfig;
    setMaxDatagramPayloadSize(arg0: number): EpollDatagramChannelConfig;
    setMaxMessagesPerRead(arg0: number): EpollDatagramChannelConfig;
    setMaxMessagesPerWrite(arg0: number): EpollDatagramChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): EpollDatagramChannelConfig;
    setNetworkInterface(arg0: NetworkInterface): EpollDatagramChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setReceiveBufferSize(arg0: number): EpollDatagramChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): EpollDatagramChannelConfig;
    setReuseAddress(arg0: boolean): EpollDatagramChannelConfig;
    setReusePort(arg0: boolean): EpollDatagramChannelConfig;
    setSendBufferSize(arg0: number): EpollDatagramChannelConfig;
    setTimeToLive(arg0: number): EpollDatagramChannelConfig;
    setTrafficClass(arg0: number): EpollDatagramChannelConfig;
    setUdpGro(arg0: boolean): EpollDatagramChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): EpollDatagramChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): EpollDatagramChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): EpollDatagramChannelConfig;
    setWriteSpinCount(arg0: number): EpollDatagramChannelConfig;
}