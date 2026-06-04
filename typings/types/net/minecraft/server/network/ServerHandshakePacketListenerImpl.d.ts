import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketContext } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContext.d.ts'
import type { PacketContextProvider } from '../../../../net/fabricmc/fabric/api/networking/v1/context/PacketContextProvider.d.ts'
import type { Connection } from '../../../../net/minecraft/network/Connection.d.ts'
import type { ConnectionProtocol } from '../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { ClientIntentionPacket } from '../../../../net/minecraft/network/protocol/handshake/ClientIntentionPacket.d.ts'
import type { ServerHandshakePacketListener } from '../../../../net/minecraft/network/protocol/handshake/ServerHandshakePacketListener.d.ts'
import type { MinecraftServer } from '../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class ServerHandshakePacketListenerImpl extends Object implements PacketContextProvider, ServerHandshakePacketListener {
    static LOGGER: Logger;
    constructor(server: MinecraftServer, connection: Connection)
    // private connection: Connection;
    // private server: MinecraftServer;
    // private beginLogin(packet: ClientIntentionPacket, transfer: boolean): void;
    getPacketContext(): PacketContext;
    handleIntention(packet: ClientIntentionPacket): void;
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    protocol(): ConnectionProtocol;
}