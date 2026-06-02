import type { AbstractBootstrap } from '../../../io/netty/bootstrap/AbstractBootstrap.d.ts'
import type { Bootstrap$ExternalAddressResolver } from '../../../io/netty/bootstrap/Bootstrap$ExternalAddressResolver.d.ts'
import type { BootstrapConfig } from '../../../io/netty/bootstrap/BootstrapConfig.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { AddressResolverGroup } from '../../../io/netty/resolver/AddressResolverGroup.d.ts'
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Bootstrap extends AbstractBootstrap<Bootstrap, Channel> {
    constructor()
    private constructor(arg0: Bootstrap)
    // private config: BootstrapConfig;
    // private disableResolver: boolean;
    // private externalResolver: Bootstrap$ExternalAddressResolver;
    // private remoteAddress: SocketAddress;
    clone(): Bootstrap;
    clone(arg0: (Object | null)[]): Bootstrap;
    config(): BootstrapConfig;
    connect(): ChannelFuture;
    connect(arg0: InetAddress, arg1: number): ChannelFuture;
    connect(arg0: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
    connect(arg0: string, arg1: number): ChannelFuture;
    disableResolver(): Bootstrap;
    // private doResolveAndConnect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
    // private doResolveAndConnect0(arg0: Channel, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): ChannelFuture;
    init(arg0: Channel): void;
    remoteAddress(): SocketAddress;
    remoteAddress(arg0: InetAddress, arg1: number): Bootstrap;
    remoteAddress(arg0: SocketAddress): Bootstrap;
    remoteAddress(arg0: string, arg1: number): Bootstrap;
    resolver(): AddressResolverGroup<Object>;
    resolver(arg0: AddressResolverGroup<Object>): Bootstrap;
    validate(): Bootstrap;
}