import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ChannelOption } from '../../../../../io/netty/channel/ChannelOption.d.ts'
import type { DefaultChannelConfig } from '../../../../../io/netty/channel/DefaultChannelConfig.d.ts'
import type { NioServerDomainSocketChannel } from '../../../../../io/netty/channel/socket/nio/NioServerDomainSocketChannel.d.ts'
import type { ServerSocketChannel } from '../../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NioServerDomainSocketChannel$NioDomainServerSocketChannelConfig extends DefaultChannelConfig {
    private constructor(null_: NioServerDomainSocketChannel, arg1: NioServerDomainSocketChannel)
    // private backlog: number;
    autoReadCleared(): void;
    // private getBacklog(): number;
    getOption<T extends unknown>(arg0: ChannelOption<T>): T;
    getOptions(): JavaMap<ChannelOption<Object>, Object>;
    getOptions(arg0: JavaMap<ChannelOption<Object>, Object>, ...arg1: ChannelOption<Object>[]): JavaMap<ChannelOption<Object>, Object>;
    // private jdkChannel(): ServerSocketChannel;
    // private setBacklog(arg0: number): NioServerDomainSocketChannel$NioDomainServerSocketChannelConfig;
    setOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): boolean;
}