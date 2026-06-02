import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { DatagramChannel } from '../../../../../io/netty/channel/socket/DatagramChannel.d.ts'
import type { DefaultDatagramChannelConfig } from '../../../../../io/netty/channel/socket/DefaultDatagramChannelConfig.d.ts'
import type { OioDatagramChannelConfig } from '../../../../../io/netty/channel/socket/oio/OioDatagramChannelConfig.d.ts'
import type { DatagramSocket } from '../../../../../java/net/DatagramSocket.d.ts'
import type { InetAddress } from '../../../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultOioDatagramChannelConfig extends DefaultDatagramChannelConfig implements OioDatagramChannelConfig {
    constructor(arg0: DatagramChannel, arg1: DatagramSocket)
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getSoTimeout(): number;
    setAllocator(arg0: ByteBufAllocator): OioDatagramChannelConfig;
    setAutoClose(arg0: boolean): OioDatagramChannelConfig;
    setAutoRead(arg0: boolean): OioDatagramChannelConfig;
    setBroadcast(arg0: boolean): OioDatagramChannelConfig;
    setConnectTimeoutMillis(arg0: number): OioDatagramChannelConfig;
    setInterface(arg0: InetAddress): OioDatagramChannelConfig;
    setLoopbackModeDisabled(arg0: boolean): OioDatagramChannelConfig;
    setMaxMessagesPerRead(arg0: number): OioDatagramChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): OioDatagramChannelConfig;
    setNetworkInterface(arg0: NetworkInterface): OioDatagramChannelConfig;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    setReceiveBufferSize(arg0: number): OioDatagramChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): OioDatagramChannelConfig;
    setReuseAddress(arg0: boolean): OioDatagramChannelConfig;
    setSendBufferSize(arg0: number): OioDatagramChannelConfig;
    setSoTimeout(arg0: number): OioDatagramChannelConfig;
    setTimeToLive(arg0: number): OioDatagramChannelConfig;
    setTrafficClass(arg0: number): OioDatagramChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): OioDatagramChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): OioDatagramChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): OioDatagramChannelConfig;
    setWriteSpinCount(arg0: number): OioDatagramChannelConfig;
}