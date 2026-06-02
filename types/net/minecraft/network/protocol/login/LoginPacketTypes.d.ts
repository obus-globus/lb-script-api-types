import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientboundCustomQueryPacket } from '../../../../../net/minecraft/network/protocol/login/ClientboundCustomQueryPacket.d.ts'
import type { ClientboundHelloPacket } from '../../../../../net/minecraft/network/protocol/login/ClientboundHelloPacket.d.ts'
import type { ClientboundLoginCompressionPacket } from '../../../../../net/minecraft/network/protocol/login/ClientboundLoginCompressionPacket.d.ts'
import type { ClientboundLoginDisconnectPacket } from '../../../../../net/minecraft/network/protocol/login/ClientboundLoginDisconnectPacket.d.ts'
import type { ClientboundLoginFinishedPacket } from '../../../../../net/minecraft/network/protocol/login/ClientboundLoginFinishedPacket.d.ts'
import type { ServerboundCustomQueryAnswerPacket } from '../../../../../net/minecraft/network/protocol/login/ServerboundCustomQueryAnswerPacket.d.ts'
import type { ServerboundHelloPacket } from '../../../../../net/minecraft/network/protocol/login/ServerboundHelloPacket.d.ts'
import type { ServerboundKeyPacket } from '../../../../../net/minecraft/network/protocol/login/ServerboundKeyPacket.d.ts'
import type { ServerboundLoginAcknowledgedPacket } from '../../../../../net/minecraft/network/protocol/login/ServerboundLoginAcknowledgedPacket.d.ts'
export class LoginPacketTypes extends Object {
    static CLIENTBOUND_CUSTOM_QUERY: PacketType<ClientboundCustomQueryPacket>;
    static CLIENTBOUND_HELLO: PacketType<ClientboundHelloPacket>;
    static CLIENTBOUND_LOGIN_COMPRESSION: PacketType<ClientboundLoginCompressionPacket>;
    static CLIENTBOUND_LOGIN_DISCONNECT: PacketType<ClientboundLoginDisconnectPacket>;
    static CLIENTBOUND_LOGIN_FINISHED: PacketType<ClientboundLoginFinishedPacket>;
    static SERVERBOUND_CUSTOM_QUERY_ANSWER: PacketType<ServerboundCustomQueryAnswerPacket>;
    static SERVERBOUND_HELLO: PacketType<ServerboundHelloPacket>;
    static SERVERBOUND_KEY: PacketType<ServerboundKeyPacket>;
    static SERVERBOUND_LOGIN_ACKNOWLEDGED: PacketType<ServerboundLoginAcknowledgedPacket>;
    constructor()
}