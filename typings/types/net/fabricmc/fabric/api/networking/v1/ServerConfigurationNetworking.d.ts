import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { ServerConfigurationNetworking$ConfigurationPacketHandler } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerConfigurationNetworking$ConfigurationPacketHandler.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ClientCommonPacketListener } from '../../../../../../net/minecraft/network/protocol/common/ClientCommonPacketListener.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MinecraftServer } from '../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { ServerConfigurationPacketListenerImpl } from '../../../../../../net/minecraft/server/network/ServerConfigurationPacketListenerImpl.d.ts'
export class ServerConfigurationNetworking extends Object {
    static canSend(paramarg0: ServerConfigurationPacketListenerImpl, paramarg1: CustomPacketPayload$Type<Object>): boolean;
    static canSend(paramarg0: ServerConfigurationPacketListenerImpl, paramarg1: Identifier): boolean;
    static createClientboundPacket(paramarg0: CustomPacketPayload): Packet<ClientCommonPacketListener>;
    static getGlobalReceivers(): Identifier[];
    static getReceived(paramarg0: ServerConfigurationPacketListenerImpl): Identifier[];
    static getSendable(paramarg0: ServerConfigurationPacketListenerImpl): Identifier[];
    static getSender(paramarg0: ServerConfigurationPacketListenerImpl): PacketSender;
    static getServer(paramarg0: ServerConfigurationPacketListenerImpl): MinecraftServer;
    static isReconfiguring(paramarg0: ServerConfigurationPacketListenerImpl): boolean;
    static registerGlobalReceiver(paramarg0: CustomPacketPayload$Type<Object>, paramarg1: (param0: Object | null, param1: Object | null) => void): boolean;
    static registerReceiver(paramarg0: ServerConfigurationPacketListenerImpl, paramarg1: CustomPacketPayload$Type<Object>, paramarg2: (param0: Object | null, param1: Object | null) => void): boolean;
    static send(paramarg0: ServerConfigurationPacketListenerImpl, paramarg1: CustomPacketPayload): void;
    static unregisterGlobalReceiver(paramarg0: Identifier): (param0: Object | null, param1: Object | null) => void;
    static unregisterReceiver(paramarg0: ServerConfigurationPacketListenerImpl, paramarg1: Identifier): (param0: Object | null, param1: Object | null) => void;
    private constructor()
}