import type { AbstractBootstrapConfig } from '../../../io/netty/bootstrap/AbstractBootstrapConfig.d.ts'
import type { ChannelFactory } from '../../../io/netty/bootstrap/ChannelFactory.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFactory as ChannelFactory_2 } from '../../../io/netty/channel/ChannelFactory.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelOption } from '../../../io/netty/channel/ChannelOption.d.ts'
import type { AttributeKey } from '../../../io/netty/util/AttributeKey.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../java/lang/ClassLoader.d.ts'
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export abstract class AbstractBootstrap<B extends AbstractBootstrap<B, C>, C extends Channel> extends Object implements Cloneable {
    constructor()
    constructor(arg0: AbstractBootstrap<B, C>)
    // private attrs: Map<AttributeKey<Object>, Object>;
    // private channelFactory: ChannelFactory<C>;
    // private extensionsClassLoader: ClassLoader;
    // private group: (Object | null)[];
    // private handler: ChannelHandler;
    // private localAddress: SocketAddress;
    // private options: Map<ChannelOption<Object>, Object>;
    attr<T extends Object | number | string | boolean>(arg0: AttributeKey<T>, arg1: T): B;
    attrs(): Map<AttributeKey<Object>, Object>;
    attrs0(): Map<AttributeKey<Object>, Object>;
    bind(): ChannelFuture;
    bind(arg0: InetAddress, arg1: number): ChannelFuture;
    bind(arg0: SocketAddress): ChannelFuture;
    bind(arg0: number): ChannelFuture;
    bind(arg0: string, arg1: number): ChannelFuture;
    channel(arg0: Class<C>): B;
    channelFactory(): ChannelFactory<C>;
    channelFactory(arg0: ChannelFactory<C>): B;
    channelFactory(arg0: ChannelFactory_2<C>): B;
    clone(): B;
    protected clone(): Object;
    config(): AbstractBootstrapConfig<B, C>;
    // private doBind(arg0: SocketAddress): ChannelFuture;
    extensionsClassLoader(arg0: ClassLoader): B;
    getInitializerExtensions(): E[];
    group(): (Object | null)[];
    group(arg0: (Object | null)[]): B;
    handler(): ChannelHandler;
    handler(arg0: ChannelHandler): B;
    init(arg0: Channel): void;
    initAndRegister(): ChannelFuture;
    localAddress(): SocketAddress;
    localAddress(arg0: InetAddress, arg1: number): B;
    localAddress(arg0: SocketAddress): B;
    localAddress(arg0: number): B;
    localAddress(arg0: string, arg1: number): B;
    newAttributesArray(): Map$Entry<AttributeKey<Object>, Object>[];
    newOptionsArray(): Map$Entry<ChannelOption<Object>, Object>[];
    option<T extends Object | number | string | boolean>(arg0: ChannelOption<T>, arg1: T): B;
    options(): Map<ChannelOption<Object>, Object>;
    options0(): Map<ChannelOption<Object>, Object>;
    register(): ChannelFuture;
    // private self(): B;
    toString(): string;
    validate(): B;
}