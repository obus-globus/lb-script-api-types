import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientConfigurationNetworking$Context } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationNetworking$Context.d.ts'
import type { CustomPacketPayload } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
export interface ClientConfigurationNetworking$ConfigurationPayloadHandler<T extends CustomPacketPayload> extends Object{
    receive(arg0: T, arg1: ClientConfigurationNetworking$Context): void;
}