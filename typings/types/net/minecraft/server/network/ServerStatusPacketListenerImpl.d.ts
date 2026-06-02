import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
import type { ConnectionProtocol } from '../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { ServerboundPingRequestPacket } from '../../../../net/minecraft/network/protocol/ping/ServerboundPingRequestPacket.d.ts'
import type { ServerStatus } from '../../../../net/minecraft/network/protocol/status/ServerStatus.d.ts'
import type { ServerStatusPacketListener } from '../../../../net/minecraft/network/protocol/status/ServerStatusPacketListener.d.ts'
import type { ServerboundStatusRequestPacket } from '../../../../net/minecraft/network/protocol/status/ServerboundStatusRequestPacket.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class ServerStatusPacketListenerImpl extends Object implements ServerStatusPacketListener {
    static LOGGER: Logger;
    constructor(status: ServerStatus, connection: Connection)
    // private connection: Connection;
    // private hasRequestedStatus: boolean;
    // private status: ServerStatus;
    handlePingRequest(packet: ServerboundPingRequestPacket): void;
    handleStatusRequest(packet: ServerboundStatusRequestPacket): void;
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    protocol(): ConnectionProtocol;
}