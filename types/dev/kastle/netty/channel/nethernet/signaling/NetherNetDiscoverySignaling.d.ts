import type { NetherNetClientSignaling } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetClientSignaling.d.ts'
import type { NetherNetClientSignaling$NotFoundHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetClientSignaling$NotFoundHandler.d.ts'
import type { NetherNetDiscovery } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetDiscovery.d.ts'
import type { NetherNetServerSignaling } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetServerSignaling.d.ts'
import type { NetherNetServerSignaling$NewConnectionHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetServerSignaling$NewConnectionHandler.d.ts'
import type { NetherNetServerSignaling$PongData } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetServerSignaling$PongData.d.ts'
import type { NetherNetSignaling$IceServerInfo } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling$IceServerInfo.d.ts'
import type { NetherNetSignaling$SignalHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling$SignalHandler.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { SocketAddress } from '../../../../../../java/net/SocketAddress.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { AtomicReference } from '../../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NetherNetDiscoverySignaling extends Object implements NetherNetClientSignaling, NetherNetServerSignaling {
    constructor()
    constructor(arg0: number)
    constructor(arg0: number, arg1: InetSocketAddress)
    // private bindAddress: InetSocketAddress;
    // private discoveredServerId: AtomicReference<string>;
    // private discovery: NetherNetDiscovery;
    readonly localNetworkId: string;
    // private remoteAddress: InetSocketAddress;
    bind(arg0: SocketAddress): void;
    close(): void;
    connect(arg0: SocketAddress): CompletableFuture<NetherNetSignaling$IceServerInfo[]>;
    getIceServers(): NetherNetSignaling$IceServerInfo[];
    getLocalNetworkId(): string;
    removeSignalHandler(arg0: number): void;
    sendSignal(arg0: string, arg1: string): void;
    setAdvertisementData(arg0: NetherNetServerSignaling$PongData): void;
    setNewConnectionHandler(arg0: (param0: number, param1: string, param2: string) => void): void;
    setNotFoundHandler(arg0: (param0: string) => void): void;
    setSignalHandler(arg0: number, arg1: (param0: string) => void): void;
}