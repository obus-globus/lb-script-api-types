import type { JavaMap } from '../../../JavaMap.d.ts'
import type { AbstractBootstrap } from '../../../io/netty/bootstrap/AbstractBootstrap.d.ts'
import type { ChannelFactory } from '../../../io/netty/bootstrap/ChannelFactory.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelOption } from '../../../io/netty/channel/ChannelOption.d.ts'
import type { AttributeKey } from '../../../io/netty/util/AttributeKey.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractBootstrapConfig<B extends AbstractBootstrap<B, C>, C extends Channel> extends Object {
    constructor(arg0: B)
    // private bootstrap: B;
    attrs(): JavaMap<AttributeKey<Object>, Object>;
    channelFactory(): ChannelFactory<C>;
    group(): (Object | null)[];
    handler(): ChannelHandler;
    localAddress(): SocketAddress;
    options(): JavaMap<ChannelOption<Object>, Object>;
    toString(): string;
}