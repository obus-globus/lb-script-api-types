import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientConfigurationNetworking$ConfigurationPayloadHandler } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationNetworking$ConfigurationPayloadHandler.d.ts'
import type { ClientConfigurationNetworking$Context } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationNetworking$Context.d.ts'
import type { PacketSender } from '../../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { CustomPacketPayload } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientConfigurationNetworking extends Object {
    static canSend(paramarg0: CustomPacketPayload$Type<any>): boolean;
    static canSend(paramarg0: Identifier): boolean;
    static getGlobalReceivers(): Identifier[];
    static getReceived(): Identifier[];
    static getSendable(): Identifier[];
    static getSender(): PacketSender;
    static registerGlobalReceiver<T extends CustomPacketPayload>(paramarg0: CustomPacketPayload$Type<T>, paramarg1: (param0: T, param1: ClientConfigurationNetworking$Context) => void): boolean;
    static registerReceiver<T extends CustomPacketPayload>(paramarg0: CustomPacketPayload$Type<T>, paramarg1: (param0: T, param1: ClientConfigurationNetworking$Context) => void): boolean;
    static send(paramarg0: CustomPacketPayload): void;
    static unregisterGlobalReceiver(paramarg0: CustomPacketPayload$Type<any>): (param0: Object, param1: ClientConfigurationNetworking$Context) => void;
    static unregisterReceiver(paramarg0: Identifier): (param0: Object, param1: ClientConfigurationNetworking$Context) => void;
    private constructor()
}