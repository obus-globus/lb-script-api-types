import type { NetherNetClientSignaling$NotFoundHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetClientSignaling$NotFoundHandler.d.ts'
import type { NetherNetSignaling } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling.d.ts'
import type { NetherNetSignaling$IceServerInfo } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling$IceServerInfo.d.ts'
import type { SocketAddress } from '../../../../../../java/net/SocketAddress.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface NetherNetClientSignaling extends NetherNetSignaling, Object {
    connect(arg0: SocketAddress): CompletableFuture<NetherNetSignaling$IceServerInfo[]>;
    setNotFoundHandler(arg0: (param0: string) => void): void;
}