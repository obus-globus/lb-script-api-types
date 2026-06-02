import type { ByteBufAllocator } from '../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { MessageSizeEstimator } from '../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { DuplexChannelConfig } from '../../../../io/netty/channel/socket/DuplexChannelConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SocketChannelConfig extends DuplexChannelConfig, Object{
    getReceiveBufferSize(): number;
    getSendBufferSize(): number;
    getSoLinger(): number;
    getTrafficClass(): number;
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
    setPerformancePreferences(arg0: number, arg1: number, arg2: number): SocketChannelConfig;
    setReceiveBufferSize(arg0: number): SocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): SocketChannelConfig;
    setReuseAddress(arg0: boolean): SocketChannelConfig;
    setSendBufferSize(arg0: number): SocketChannelConfig;
    setSoLinger(arg0: number): SocketChannelConfig;
    setTcpNoDelay(arg0: boolean): SocketChannelConfig;
    setTrafficClass(arg0: number): SocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): SocketChannelConfig;
    setWriteSpinCount(arg0: number): SocketChannelConfig;
}