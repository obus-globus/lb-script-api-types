import type { Object } from '../../../../../../../java/lang/Object.d.ts'
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
    static createServerboundPacket(paramarg0: Object | null): Packet<ServerCommonPacketListener>;
    static getGlobalReceivers(): Identifier[];
    static getReceived(): Identifier[];
    static getSendable(): Identifier[];
    static getSender(): PacketSender;
    static registerGlobalReceiver(paramarg0: CustomPacketPayload$Type<Object>, paramarg1: (param0: Object | null, param1: Object | null) => void): boolean;
    static registerReceiver(paramarg0: CustomPacketPayload$Type<Object>, paramarg1: (param0: Object | null, param1: Object | null) => void): boolean;
    static send(paramarg0: CustomPacketPayload): void;
    static unregisterGlobalReceiver(paramarg0: Identifier): (param0: Object | null, param1: Object | null) => void;
    static unregisterReceiver(paramarg0: Identifier): (param0: Object | null, param1: Object | null) => void;
    private constructor()
}