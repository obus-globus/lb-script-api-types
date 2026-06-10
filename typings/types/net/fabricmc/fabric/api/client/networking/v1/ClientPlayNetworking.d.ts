import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientPlayNetworking$Context } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context.d.ts'
import type { ClientPlayNetworking$PlayPayloadHandler } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$PlayPayloadHandler.d.ts'
import type { PacketSender } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { Packet } from '../../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ServerCommonPacketListener } from '../../../../../../../net/minecraft/network/protocol/common/ServerCommonPacketListener.d.ts'
import type { CustomPacketPayload } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientPlayNetworking extends Object {
    static canSend(paramarg0: CustomPacketPayload$Type<Object>): boolean;
    static canSend(paramarg0: Identifier): boolean;
    static createServerboundPacket(paramarg0: CustomPacketPayload | null): Packet<ServerCommonPacketListener>;
    static getGlobalReceivers(): Identifier[];
    static getReceived(): Identifier[];
    static getSendable(): Identifier[];
    static getSender(): PacketSender;
    static registerGlobalReceiver(paramarg0: CustomPacketPayload$Type<CustomPacketPayload>, paramarg1: (param0: CustomPacketPayload | null, param1: ClientPlayNetworking$Context) => void): boolean;
    static registerReceiver(paramarg0: CustomPacketPayload$Type<CustomPacketPayload>, paramarg1: (param0: CustomPacketPayload | null, param1: ClientPlayNetworking$Context) => void): boolean;
    static send(paramarg0: CustomPacketPayload): void;
    static unregisterGlobalReceiver(paramarg0: Identifier): (param0: Object, param1: ClientPlayNetworking$Context) => void;
    static unregisterReceiver(paramarg0: Identifier): (param0: Object, param1: ClientPlayNetworking$Context) => void;
    private constructor()
}