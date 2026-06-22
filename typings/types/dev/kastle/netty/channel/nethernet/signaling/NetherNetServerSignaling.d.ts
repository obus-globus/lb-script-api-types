import type { NetherNetServerSignaling$NewConnectionHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetServerSignaling$NewConnectionHandler.d.ts'
import type { NetherNetServerSignaling$PongData } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetServerSignaling$PongData.d.ts'
import type { NetherNetSignaling } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling.d.ts'
import type { NetherNetSignaling$IceServerInfo } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling$IceServerInfo.d.ts'
import type { NetherNetSignaling$SignalHandler } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/NetherNetSignaling$SignalHandler.d.ts'
import type { SocketAddress } from '../../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface NetherNetServerSignaling extends NetherNetSignaling, Object {
    bind(arg0: SocketAddress): void;
    close(): void;
    getIceServers(): NetherNetSignaling$IceServerInfo[];
    getLocalNetworkId(): string;
    removeSignalHandler(arg0: number): void;
    sendSignal(arg0: string, arg1: string): void;
    setAdvertisementData(arg0: NetherNetServerSignaling$PongData): void;
    setNewConnectionHandler(arg0: (param0: number, param1: string, param2: string) => void): void;
    setSignalHandler(arg0: number, arg1: (param0: string) => void): void;
}