import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { ClientCookiePacketListener } from '../../../../../net/minecraft/network/protocol/cookie/ClientCookiePacketListener.d.ts'
import type { ClientboundCookieRequestPacket } from '../../../../../net/minecraft/network/protocol/cookie/ClientboundCookieRequestPacket.d.ts'
import type { ClientboundCustomQueryPacket } from '../../../../../net/minecraft/network/protocol/login/ClientboundCustomQueryPacket.d.ts'
import type { ClientboundHelloPacket } from '../../../../../net/minecraft/network/protocol/login/ClientboundHelloPacket.d.ts'
import type { ClientboundLoginCompressionPacket } from '../../../../../net/minecraft/network/protocol/login/ClientboundLoginCompressionPacket.d.ts'
import type { ClientboundLoginDisconnectPacket } from '../../../../../net/minecraft/network/protocol/login/ClientboundLoginDisconnectPacket.d.ts'
import type { ClientboundLoginFinishedPacket } from '../../../../../net/minecraft/network/protocol/login/ClientboundLoginFinishedPacket.d.ts'
export interface ClientLoginPacketListener extends Object, ClientCookiePacketListener{
    handleCompression(packet: ClientboundLoginCompressionPacket): void;
    handleCustomQuery(packet: ClientboundCustomQueryPacket): void;
    handleDisconnect(packet: ClientboundLoginDisconnectPacket): void;
    handleHello(packet: ClientboundHelloPacket): void;
    handleLoginFinished(packet: ClientboundLoginFinishedPacket): void;
    handleRequestCookie(packet: ClientboundCookieRequestPacket): void;
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    protocol(): ConnectionProtocol;
}