import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultChannelConfig } from '../../../../io/netty/channel/DefaultChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { ServerSocketChannel } from '../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { ServerSocketChannelConfig } from '../../../../io/netty/channel/socket/ServerSocketChannelConfig.d.ts'
import type { ServerSocket } from '../../../../java/net/ServerSocket.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultServerSocketChannelConfig extends DefaultChannelConfig implements ServerSocketChannelConfig {
    constructor(arg0: ServerSocketChannel, arg1: ServerSocket)
    readonly backlog: number;
    // private javaSocket: ServerSocket;
    getBacklog(): number;
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getReceiveBufferSize(): number;
    isReuseAddress(): boolean;
    setAllocator(arg0: ByteBufAllocator): ServerSocketChannelConfig;
    setAutoRead(arg0: boolean): ServerSocketChannelConfig;
    setBacklog(arg0: number): ServerSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): ServerSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): ServerSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): ServerSocketChannelConfig;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): ServerSocketChannelConfig;
    setReceiveBufferSize(arg0: number): ServerSocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): ServerSocketChannelConfig;
    setReuseAddress(arg0: boolean): ServerSocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): ServerSocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): ServerSocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): ServerSocketChannelConfig;
    setWriteSpinCount(arg0: number): ServerSocketChannelConfig;
}