import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultChannelConfig } from '../../../../io/netty/channel/DefaultChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { SocketChannel } from '../../../../io/netty/channel/socket/SocketChannel.d.ts'
import type { SocketChannelConfig } from '../../../../io/netty/channel/socket/SocketChannelConfig.d.ts'
import type { Socket } from '../../../../java/net/Socket.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultSocketChannelConfig extends DefaultChannelConfig implements SocketChannelConfig {
    constructor(arg0: SocketChannel, arg1: Socket)
    readonly allowHalfClosure: boolean;
    // private javaSocket: Socket;
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    getSoLinger(): number;
    getTrafficClass(): number;
    isAllowHalfClosure(): boolean;
    isKeepAlive(): boolean;
    isReuseAddress(): boolean;
    isTcpNoDelay(): boolean;
    setAllocator(arg0: ByteBufAllocator): SocketChannelConfig;
    setAllowHalfClosure(arg0: boolean): SocketChannelConfig;
    setAutoClose(arg0: boolean): SocketChannelConfig;
    setAutoRead(arg0: boolean): SocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): SocketChannelConfig;
    setKeepAlive(arg0: boolean): SocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): SocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): SocketChannelConfig;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): SocketChannelConfig;
    setReceiveBufferSize(arg0: number): SocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): SocketChannelConfig;
    setReuseAddress(arg0: boolean): SocketChannelConfig;
    setSendBufferSize(arg0: number): SocketChannelConfig;
    setSoLinger(arg0: number): SocketChannelConfig;
    setTcpNoDelay(arg0: boolean): SocketChannelConfig;
    setTrafficClass(arg0: number): SocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): SocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): SocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): SocketChannelConfig;
    setWriteSpinCount(arg0: number): SocketChannelConfig;
}