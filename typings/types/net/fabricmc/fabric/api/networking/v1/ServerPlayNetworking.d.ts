import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { ServerPlayNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerPlayNetworking$Context.d.ts'
import type { ServerPlayNetworking$PlayPayloadHandler } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerPlayNetworking$PlayPayloadHandler.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientCommonPacketListener } from '../../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerPlayer } from '../../../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ServerGamePacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerGamePacketListenerImpl.d.ts'
export class ServerPlayNetworking extends Object {
    static canSend(paramarg0: ServerPlayer, paramarg1: CustomPacketPayload$Type<any>): boolean;
    static canSend(paramarg0: ServerPlayer, paramarg1: Identifier): boolean;
    static canSend(paramarg0: ServerGamePacketListenerImpl, paramarg1: CustomPacketPayload$Type<any>): boolean;
    static canSend(paramarg0: ServerGamePacketListenerImpl, paramarg1: Identifier): boolean;
    static createClientboundPacket(paramarg0: CustomPacketPayload | null): Packet<ClientCommonPacketListener>;
    static getGlobalReceivers(): Identifier[];
    static getReceived(paramarg0: ServerPlayer): Identifier[];
    static getReceived(paramarg0: ServerGamePacketListenerImpl): Identifier[];
    static getSendable(paramarg0: ServerPlayer): Identifier[];
    static getSendable(paramarg0: ServerGamePacketListenerImpl): Identifier[];
    static getSender(paramarg0: ServerPlayer): PacketSender;
    static getSender(paramarg0: ServerGamePacketListenerImpl): PacketSender;
    static reconfigure(paramarg0: ServerPlayer): void;
    static reconfigure(paramarg0: ServerGamePacketListenerImpl): void;
    static registerGlobalReceiver(paramarg0: CustomPacketPayload$Type<CustomPacketPayload>, paramarg1: (param0: CustomPacketPayload | null, param1: ServerPlayNetworking$Context) => void): boolean;
    static registerReceiver(paramarg0: ServerGamePacketListenerImpl, paramarg1: CustomPacketPayload$Type<CustomPacketPayload>, paramarg2: (param0: CustomPacketPayload | null, param1: ServerPlayNetworking$Context) => void): boolean;
    static send(paramarg0: ServerPlayer, paramarg1: CustomPacketPayload): void;
    static unregisterGlobalReceiver(paramarg0: Identifier): (param0: Object, param1: ServerPlayNetworking$Context) => void;
    static unregisterReceiver(paramarg0: ServerGamePacketListenerImpl, paramarg1: Identifier): (param0: Object, param1: ServerPlayNetworking$Context) => void;
    private constructor()
}