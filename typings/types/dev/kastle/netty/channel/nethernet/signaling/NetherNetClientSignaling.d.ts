import type { NetherNetClientSignaling$NotFoundHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetClientSignaling$NotFoundHandler.d.ts'
import type { NetherNetSignaling } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling.d.ts'
import type { NetherNetSignaling$IceServerInfo } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling$IceServerInfo.d.ts'
import type { NetherNetSignaling$SignalHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling$SignalHandler.d.ts'
import type { SocketAddress } from '../../../../../../java/net/SocketAddress.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface NetherNetClientSignaling extends NetherNetSignaling, Object {
    close(): void;
    connect(arg0: SocketAddress): CompletableFuture<NetherNetSignaling$IceServerInfo[]>;
    getLocalNetworkId(): string;
    removeSignalHandler(arg0: number): void;
    sendSignal(arg0: string, arg1: string): void;
    setNotFoundHandler(arg0: (param0: string) => void): void;
    setSignalHandler(arg0: number, arg1: (param0: string) => void): void;
}