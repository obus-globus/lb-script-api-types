import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { DefaultServerSocketChannelConfig } from '../../../../../io/netty/channel/socket/DefaultServerSocketChannelConfig.d.ts'
import type { ServerSocketChannel } from '../../../../../io/netty/channel/socket/ServerSocketChannel.d.ts'
import type { OioServerSocketChannel } from '../../../../../io/netty/channel/socket/oio/OioServerSocketChannel.d.ts'
import type { OioServerSocketChannelConfig } from '../../../../../io/netty/channel/socket/oio/OioServerSocketChannelConfig.d.ts'
import type { ServerSocket } from '../../../../../java/net/ServerSocket.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultOioServerSocketChannelConfig extends DefaultServerSocketChannelConfig implements OioServerSocketChannelConfig {
    constructor(arg0: ServerSocketChannel, arg1: ServerSocket)
    constructor(arg0: OioServerSocketChannel, arg1: ServerSocket)
    autoReadCleared(): void;
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getSoTimeout(): number;
    setAllocator(arg0: ByteBufAllocator): OioServerSocketChannelConfig;
    setAutoClose(arg0: boolean): OioServerSocketChannelConfig;
    setAutoRead(arg0: boolean): OioServerSocketChannelConfig;
    setBacklog(arg0: number): OioServerSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): OioServerSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): OioServerSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): OioServerSocketChannelConfig;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): OioServerSocketChannelConfig;
    setReceiveBufferSize(arg0: number): OioServerSocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): OioServerSocketChannelConfig;
    setReuseAddress(arg0: boolean): OioServerSocketChannelConfig;
    setSoTimeout(arg0: number): OioServerSocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): OioServerSocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): OioServerSocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): OioServerSocketChannelConfig;
    setWriteSpinCount(arg0: number): OioServerSocketChannelConfig;
}