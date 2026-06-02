import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultChannelConfig } from '../../../../../io/netty/channel/DefaultChannelConfig.d.ts'
import type { MessageSizeEstimator } from '../../../../../io/netty/channel/MessageSizeEstimator.d.ts'
import type { RecvByteBufAllocator } from '../../../../../io/netty/channel/RecvByteBufAllocator.d.ts'
import type { WriteBufferWaterMark } from '../../../../../io/netty/channel/WriteBufferWaterMark.d.ts'
import type { DuplexChannelConfig } from '../../../../../io/netty/channel/socket/DuplexChannelConfig.d.ts'
import type { NioDomainSocketChannel } from '../../../../../io/netty/channel/socket/nio/NioDomainSocketChannel.d.ts'
import type { SocketChannel } from '../../../../../java/nio/channels/SocketChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NioDomainSocketChannel$NioDomainSocketChannelConfig extends DefaultChannelConfig implements DuplexChannelConfig {
    private constructor(null_: NioDomainSocketChannel$NioDomainSocketChannelConfig, arg1: NioDomainSocketChannel, arg2: SocketChannel)
    readonly allowHalfClosure: boolean;
    // private javaChannel: SocketChannel;
    // private maxBytesPerGatheringWrite: number;
    autoReadCleared(): void;
    // private calculateMaxBytesPerGatheringWrite(): void;
    getMaxBytesPerGatheringWrite(): number;
    getOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    // private getReceiveBufferSize(): number;
    // private getSendBufferSize(): number;
    isAllowHalfClosure(): boolean;
    // private jdkChannel(): SocketChannel;
    setAllocator(arg0: ByteBufAllocator): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    setAllowHalfClosure(arg0: boolean): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    setAutoClose(arg0: boolean): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    setAutoRead(arg0: boolean): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    setConnectTimeoutMillis(arg0: number): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    setMaxBytesPerGatheringWrite(arg0: number): void;
    setMaxMessagesPerRead(arg0: number): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    setMessageSizeEstimator(arg0: MessageSizeEstimator): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    setOption<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): boolean;
    // private setReceiveBufferSize(arg0: number): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    setRecvByteBufAllocator(arg0: RecvByteBufAllocator): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    // private setSendBufferSize(arg0: number): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    setWriteBufferHighWaterMark(arg0: number): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    setWriteBufferLowWaterMark(arg0: number): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    setWriteBufferWaterMark(arg0: WriteBufferWaterMark): NioDomainSocketChannel$NioDomainSocketChannelConfig;
    setWriteSpinCount(arg0: number): NioDomainSocketChannel$NioDomainSocketChannelConfig;
}