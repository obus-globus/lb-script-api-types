import type { NioServerSocketChannel$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultServerSocketChannelConfig } from '../../../../../io/netty/channel/socket/DefaultServerSocketChannelConfig.d.ts'
import type { NioServerSocketChannel } from '../../../../../io/netty/channel/socket/nio/NioServerSocketChannel.d.ts'
import type { ServerSocket } from '../../../../../java/net/ServerSocket.d.ts'
import type { ServerSocketChannel } from '../../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NioServerSocketChannel$NioServerSocketChannelConfig extends DefaultServerSocketChannelConfig {
    private constructor(null_: NioServerSocketChannel, arg1: NioServerSocketChannel, arg2: ServerSocket)
    constructor(null_: NioServerSocketChannel, arg1: NioServerSocketChannel, arg2: ServerSocket, arg3: NioServerSocketChannel$1)
    autoReadCleared(): void;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): Map<ChannelOption<Object>, Object>;
    getOptions(arg0: Map<ChannelOption<Object>, Object>, arg1: ChannelOption<Object>[]): Map<ChannelOption<Object>, Object>;
    // private jdkChannel(): ServerSocketChannel;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
}