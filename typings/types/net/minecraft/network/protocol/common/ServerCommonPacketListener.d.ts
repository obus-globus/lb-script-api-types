import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { ServerboundClientInformationPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundClientInformationPacket.d.ts'
import type { ServerboundCustomClickActionPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundCustomClickActionPacket.d.ts'
import type { ServerboundCustomPayloadPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundCustomPayloadPacket.d.ts'
import type { ServerboundKeepAlivePacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundKeepAlivePacket.d.ts'
import type { ServerboundPongPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundPongPacket.d.ts'
import type { ServerboundResourcePackPacket } from '../../../../../net/minecraft/network/protocol/common/ServerboundResourcePackPacket.d.ts'
import type { ServerCookiePacketListener } from '../../../../../net/minecraft/network/protocol/cookie/ServerCookiePacketListener.d.ts'
import type { ServerboundCookieResponsePacket } from '../../../../../net/minecraft/network/protocol/cookie/ServerboundCookieResponsePacket.d.ts'
export interface ServerCommonPacketListener extends Object, ServerCookiePacketListener{
    handleClientInformation(packet: ServerboundClientInformationPacket): void;
    handleCookieResponse(packet: ServerboundCookieResponsePacket): void;
    handleCustomClickAction(packet: ServerboundCustomClickActionPacket): void;
    handleCustomPayload(packet: ServerboundCustomPayloadPacket): void;
    handleKeepAlive(packet: ServerboundKeepAlivePacket): void;
    handlePong(serverboundPongPacket: ServerboundPongPacket): void;
    handleResourcePackResponse(packet: ServerboundResourcePackPacket): void;
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    protocol(): ConnectionProtocol;
}