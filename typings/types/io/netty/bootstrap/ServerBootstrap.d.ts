import type { AbstractBootstrap } from '../../../io/netty/bootstrap/AbstractBootstrap.d.ts'
import type { ServerBootstrapConfig } from '../../../io/netty/bootstrap/ServerBootstrapConfig.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelOption } from '../../../io/netty/channel/ChannelOption.d.ts'
import type { ServerChannel } from '../../../io/netty/channel/ServerChannel.d.ts'
import type { AttributeKey } from '../../../io/netty/util/AttributeKey.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ServerBootstrap extends AbstractBootstrap<ServerBootstrap, ServerChannel> {
    constructor()
    private constructor(arg0: ServerBootstrap)
    // private childAttrs: Map<AttributeKey<Object>, Object>;
    // private childGroup: (Object | null)[];
    // private childHandler: ChannelHandler;
    // private childOptions: Map<ChannelOption<Object>, Object>;
    // private config: ServerBootstrapConfig;
    childAttr<T extends unknown>(arg0: AttributeKey<T>, arg1: T): ServerBootstrap;
    childAttrs(): Map<AttributeKey<Object>, Object>;
    childGroup(): (Object | null)[];
    childHandler(): ChannelHandler;
    childHandler(arg0: ChannelHandler): ServerBootstrap;
    childOption<T extends unknown>(arg0: ChannelOption<T>, arg1: T): ServerBootstrap;
    childOptions(): Map<ChannelOption<Object>, Object>;
    clone(): ServerBootstrap;
    config(): ServerBootstrapConfig;
    group(): (Object | null)[];
    group(arg0: (Object | null)[]): ServerBootstrap;
    group(arg0: (Object | null)[], arg1: (Object | null)[]): ServerBootstrap;
    init(arg0: Channel): void;
    validate(): ServerBootstrap;
}