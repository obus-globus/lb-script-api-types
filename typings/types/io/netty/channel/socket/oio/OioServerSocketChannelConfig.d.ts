import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { MessageSizeEstimator } from '../../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { ServerSocketChannelConfig } from '../../../../../io/netty/channel/socket/ServerSocketChannelConfig.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface OioServerSocketChannelConfig extends ServerSocketChannelConfig, Object{
    getSoTimeout(): number;
    setAllocator(arg0: ByteBufAllocator): OioServerSocketChannelConfig;
    setAutoClose(arg0: boolean): OioServerSocketChannelConfig;
    setAutoRead(arg0: boolean): OioServerSocketChannelConfig;
    setBacklog(arg0: number): OioServerSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): OioServerSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): OioServerSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): OioServerSocketChannelConfig;
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