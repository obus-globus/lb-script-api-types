import type { DefaultNetherServerChannelConfig } from '../../../../../dev/kastle/netty/channel/nethernet/config/DefaultNetherServerChannelConfig.d.ts'
import type { NetherNetServerSignaling } from '../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetServerSignaling.d.ts'
import type { PeerConnectionFactory } from '../../../../../dev/kastle/webrtc/PeerConnectionFactory.d.ts'
import type { AbstractServerChannel } from '../../../../../io/netty/channel/AbstractServerChannel.d.ts'
import type { ChannelConfig } from '../../../../../io/netty/channel/ChannelConfig.d.ts'
import type { ChannelMetadata } from '../../../../../io/netty/channel/ChannelMetadata.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NetherNetServerChannel extends AbstractServerChannel {
    constructor(arg0: NetherNetServerSignaling)
    constructor(arg0: PeerConnectionFactory, arg1: NetherNetServerSignaling)
    // private config: DefaultNetherServerChannelConfig;
    // private factory: PeerConnectionFactory;
    // private localAddress: InetSocketAddress;
    readonly open: boolean;
    // private signaling: NetherNetServerSignaling;
    acceptConnection(arg0: number, arg1: string, arg2: string): void;
    config(): ChannelConfig;
    doBeginRead(): void;
    doBind(arg0: SocketAddress): void;
    doClose(): void;
    isActive(): boolean;
    isCompatible(arg0: (Object | null)[]): boolean;
    isOpen(): boolean;
    localAddress0(): SocketAddress;
    metadata(): ChannelMetadata;
}