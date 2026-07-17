import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { KQueueChannelConfig } from '../../../../io/netty/channel/kqueue/KQueueChannelConfig.d.ts'
import type { KQueueDatagramChannel } from '../../../../io/netty/channel/kqueue/KQueueDatagramChannel.d.ts'
import type { DatagramChannelConfig } from '../../../../io/netty/channel/socket/DatagramChannelConfig.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { NetworkInterface } from '../../../../java/net/NetworkInterface.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class KQueueDatagramChannelConfig extends KQueueChannelConfig implements DatagramChannelConfig {
    constructor(arg0: KQueueDatagramChannel)
    // private activeOnOpen: boolean;
    getActiveOnOpen(): boolean;
    getInterface(): InetAddress;
    getNetworkInterface(): NetworkInterface;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): JavaMap<ChannelOption<Object>, Object>;
    getOptions(arg0: JavaMap<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): JavaMap<ChannelOption<Object>, Object>;
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    getTimeToLive(): number;
    getTrafficClass(): number;
    isBroadcast(): boolean;
    isLoopbackModeDisabled(): boolean;
    isReuseAddress(): boolean;
    isReusePort(): boolean;
    // private setActiveOnOpen(arg0: boolean): void;
    setAllocator(arg0: ByteBufAllocator): KQueueDatagramChannelConfig;
    setAutoClose(arg0: boolean): KQueueDatagramChannelConfig;
    setAutoRead(arg0: boolean): KQueueDatagramChannelConfig;
    setBroadcast(arg0: boolean): KQueueDatagramChannelConfig;
    setConnectTimeoutMillis(arg0: number): KQueueDatagramChannelConfig;
    setInterface(arg0: InetAddress): KQueueDatagramChannelConfig;
    setLoopbackModeDisabled(arg0: boolean): DatagramChannelConfig;
    setMaxMessagesPerRead(arg0: number): KQueueDatagramChannelConfig;
    setMaxMessagesPerWrite(arg0: number): KQueueDatagramChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): KQueueDatagramChannelConfig;
    setNetworkInterface(arg0: NetworkInterface): KQueueDatagramChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setRcvAllocTransportProvidesGuess(arg0: boolean): KQueueDatagramChannelConfig;
    setReceiveBufferSize(arg0: number): KQueueDatagramChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): KQueueDatagramChannelConfig;
    setReuseAddress(arg0: boolean): KQueueDatagramChannelConfig;
    setReusePort(arg0: boolean): KQueueDatagramChannelConfig;
    setSendBufferSize(arg0: number): KQueueDatagramChannelConfig;
    setTimeToLive(arg0: number): KQueueDatagramChannelConfig;
    setTrafficClass(arg0: number): KQueueDatagramChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): KQueueDatagramChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): KQueueDatagramChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): KQueueDatagramChannelConfig;
    setWriteSpinCount(arg0: number): KQueueDatagramChannelConfig;
}