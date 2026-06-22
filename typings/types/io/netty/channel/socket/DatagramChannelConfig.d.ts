import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelConfig } from '../../../../io/netty/channel/ChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DatagramChannelConfig extends ChannelConfig, Object{
    getAllocator(): ByteBufAllocator;
    getConnectTimeoutMillis(): number;
    getInterface(): InetAddress;
    getMaxMessagesPerRead(): number;
    getMessageSizeEstimator(): MessageSizeEstimator;
    getNetworkInterface(): NetworkInterface;
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    getTimeToLive(): number;
    getTrafficClass(): number;
    getWriteBufferHighWaterMark(): number;
    getWriteBufferLowWaterMark(): number;
    getWriteBufferWaterMark(): WriteBufferWaterMark;
    getWriteSpinCount(): number;
    isAutoClose(): boolean;
    isAutoRead(): boolean;
    isBroadcast(): boolean;
    isLoopbackModeDisabled(): boolean;
    isReuseAddress(): boolean;
    setAllocator(arg0: ByteBufAllocator): DatagramChannelConfig;
    setAutoClose(arg0: boolean): DatagramChannelConfig;
    setAutoRead(arg0: boolean): DatagramChannelConfig;
    setBroadcast(arg0: boolean): DatagramChannelConfig;
    setConnectTimeoutMillis(arg0: number): DatagramChannelConfig;
    setInterface(arg0: InetAddress): DatagramChannelConfig;
    setLoopbackModeDisabled(arg0: boolean): DatagramChannelConfig;
    setMaxMessagesPerRead(arg0: number): DatagramChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): DatagramChannelConfig;
    setNetworkInterface(arg0: NetworkInterface): DatagramChannelConfig;
    setReceiveBufferSize(arg0: number): DatagramChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): DatagramChannelConfig;
    setReuseAddress(arg0: boolean): DatagramChannelConfig;
    setSendBufferSize(arg0: number): DatagramChannelConfig;
    setTimeToLive(arg0: number): DatagramChannelConfig;
    setTrafficClass(arg0: number): DatagramChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): ChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): ChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): DatagramChannelConfig;
    setWriteSpinCount(arg0: number): DatagramChannelConfig;
}