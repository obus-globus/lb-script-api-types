import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { ServerCookiePacketListener } from '../../../../../net/minecraft/network/protocol/cookie/ServerCookiePacketListener.d.ts'
import type { ServerboundCookieResponsePacket } from '../../../../../net/minecraft/network/protocol/cookie/ServerboundCookieResponsePacket.d.ts'
import type { ServerboundCustomQueryAnswerPacket } from '../../../../../net/minecraft/network/protocol/login/ServerboundCustomQueryAnswerPacket.d.ts'
import type { ServerboundHelloPacket } from '../../../../../net/minecraft/network/protocol/login/ServerboundHelloPacket.d.ts'
import type { ServerboundKeyPacket } from '../../../../../net/minecraft/network/protocol/login/ServerboundKeyPacket.d.ts'
import type { ServerboundLoginAcknowledgedPacket } from '../../../../../net/minecraft/network/protocol/login/ServerboundLoginAcknowledgedPacket.d.ts'
export interface ServerLoginPacketListener extends Object, ServerCookiePacketListener{
    handleCookieResponse(packet: ServerboundCookieResponsePacket): void;
    handleCustomQueryPacket(packet: ServerboundCustomQueryAnswerPacket): void;
    handleHello(packet: ServerboundHelloPacket): void;
    handleKey(packet: ServerboundKeyPacket): void;
    handleLoginAcknowledgement(packet: ServerboundLoginAcknowledgedPacket): void;
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    protocol(): ConnectionProtocol;
}