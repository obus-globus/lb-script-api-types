import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { MessageSizeEstimator } from '../../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { SocketChannelConfig } from '../../../../../io/netty/channel/socket/SocketChannelConfig.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface OioSocketChannelConfig extends SocketChannelConfig, Object{
    getSoTimeout(): number;
    setAllocator(arg0: ByteBufAllocator): OioSocketChannelConfig;
    setAllowHalfClosure(arg0: boolean): OioSocketChannelConfig;
    setAutoClose(arg0: boolean): OioSocketChannelConfig;
    setAutoRead(arg0: boolean): OioSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): OioSocketChannelConfig;
    setKeepAlive(arg0: boolean): OioSocketChannelConfig;
    setMaxMessagesPerRead(arg0: number): OioSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): OioSocketChannelConfig;
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