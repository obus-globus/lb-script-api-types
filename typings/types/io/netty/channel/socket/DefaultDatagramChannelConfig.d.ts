import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultChannelConfig } from '../../../../io/netty/channel/DefaultChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { DatagramChannel } from '../../../../io/netty/channel/socket/DatagramChannel.d.ts'
import type { DatagramChannelConfig } from '../../../../io/netty/channel/socket/DatagramChannelConfig.d.ts'
import type { DatagramSocket } from '../../../../java/net/DatagramSocket.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultDatagramChannelConfig extends DefaultChannelConfig implements DatagramChannelConfig {
    constructor(arg0: DatagramChannel, arg1: DatagramSocket)
    // private activeOnOpen: boolean;
    // private javaSocket: DatagramSocket;
    getInterface(): InetAddress;
    getNetworkInterface(): NetworkInterface;
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    getTimeToLive(): number;
    getTrafficClass(): number;
    isBroadcast(): boolean;
    isLoopbackModeDisabled(): boolean;
    isReuseAddress(): boolean;
    javaSocket(): DatagramSocket;
    // private setActiveOnOpen(arg0: boolean): void;
    setAllocator(arg0: ByteBufAllocator): DatagramChannelConfig;
    setAutoClose(arg0: boolean): DatagramChannelConfig;
    setAutoRead(arg0: boolean): DatagramChannelConfig;
    setBroadcast(arg0: boolean): DatagramChannelConfig;
    setConnectTimeoutMillis(arg0: number): DatagramChannelConfig;
    setInterface(arg0: InetAddress): DatagramChannelConfig;
    setLoopbackModeDisabled(arg0: boolean): DatagramChannelConfig;
    setMaxMessagesPerRead(arg0: number): DatagramChannelConfig;
    setMaxMessagesPerWrite(arg0: number): DatagramChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): DatagramChannelConfig;
    setNetworkInterface(arg0: NetworkInterface): DatagramChannelConfig;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    setReceiveBufferSize(arg0: number): DatagramChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): DatagramChannelConfig;
    setReuseAddress(arg0: boolean): DatagramChannelConfig;
    setSendBufferSize(arg0: number): DatagramChannelConfig;
    setTimeToLive(arg0: number): DatagramChannelConfig;
    setTrafficClass(arg0: number): DatagramChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): DatagramChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): DatagramChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): DatagramChannelConfig;
    setWriteSpinCount(arg0: number): DatagramChannelConfig;
}