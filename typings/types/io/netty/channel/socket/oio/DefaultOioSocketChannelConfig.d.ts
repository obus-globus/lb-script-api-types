import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { MessageSizeEstimator } from '../../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { DefaultSocketChannelConfig } from '../../../../../io/netty/channel/socket/DefaultSocketChannelConfig.d.ts'
import type { SocketChannel } from '../../../../../io/netty/channel/socket/SocketChannel.d.ts'
import type { OioSocketChannel } from '../../../../../io/netty/channel/socket/oio/OioSocketChannel.d.ts'
import type { OioSocketChannelConfig } from '../../../../../io/netty/channel/socket/oio/OioSocketChannelConfig.d.ts'
import type { Socket } from '../../../../../java/net/Socket.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultOioSocketChannelConfig extends DefaultSocketChannelConfig implements OioSocketChannelConfig {
    constructor(arg0: SocketChannel, arg1: Socket)
    constructor(arg0: OioSocketChannel, arg1: Socket)
    autoReadCleared(): void;
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    getSoTimeout(): number;
    setAllocator(arg0: ByteBufAllocator): OioSocketChannelConfig;
    setAllowHalfClosure(arg0: boolean): OioSocketChannelConfig;
    setAutoClose(arg0: boolean): OioSocketChannelConfig;
    setAutoRead(arg0: boolean): OioSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): OioSocketChannelConfig;
    setKeepAlive(arg0: boolean): OioSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): OioSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): OioSocketChannelConfig;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): OioSocketChannelConfig;
    setReceiveBufferSize(arg0: number): OioSocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): OioSocketChannelConfig;
    setReuseAddress(arg0: boolean): OioSocketChannelConfig;
    setSendBufferSize(arg0: number): OioSocketChannelConfig;
    setSoLinger(arg0: number): OioSocketChannelConfig;
    setSoTimeout(arg0: number): OioSocketChannelConfig;
    setTcpNoDelay(arg0: boolean): OioSocketChannelConfig;
    setTrafficClass(arg0: number): OioSocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): OioSocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): OioSocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): OioSocketChannelConfig;
    setWriteSpinCount(arg0: number): OioSocketChannelConfig;
}