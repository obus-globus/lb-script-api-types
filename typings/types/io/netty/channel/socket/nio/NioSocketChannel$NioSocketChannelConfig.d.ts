import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultSocketChannelConfig } from '../../../../../io/netty/channel/socket/DefaultSocketChannelConfig.d.ts'
import type { NioSocketChannel } from '../../../../../io/netty/channel/socket/nio/NioSocketChannel.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Socket } from '../../../../../java/net/Socket.d.ts'
import type { SocketChannel } from '../../../../../java/nio/channels/SocketChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NioSocketChannel$NioSocketChannelConfig extends DefaultSocketChannelConfig {
    constructor(null_: NioSocketChannel, arg1: NioSocketChannel, arg2: Socket, arg3: () => void)
    // private maxBytesPerGatheringWrite: number;
    autoReadCleared(): void;
    // private calculateMaxBytesPerGatheringWrite(): void;
    getMaxBytesPerGatheringWrite(): number;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    // private jdkChannel(): SocketChannel;
    setMaxBytesPerGatheringWrite(arg0: number): void;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
    setSendBufferSize(arg0: number): NioSocketChannel$NioSocketChannelConfig;
}