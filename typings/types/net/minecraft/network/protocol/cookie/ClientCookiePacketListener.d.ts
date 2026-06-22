import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientboundPacketListener } from '../../../../../net/minecraft/network/ClientboundPacketListener.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { PacketFlow } from '../../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { ClientboundCookieRequestPacket } from '../../../../../net/minecraft/network/protocol/cookie/ClientboundCookieRequestPacket.d.ts'
export interface ClientCookiePacketListener extends Object, ClientboundPacketListener{
    flow(): PacketFlow;
    handleRequestCookie(packet: ClientboundCookieRequestPacket): void;
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    protocol(): ConnectionProtocol;
}