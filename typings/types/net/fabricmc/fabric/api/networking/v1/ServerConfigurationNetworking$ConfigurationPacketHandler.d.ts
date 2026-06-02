import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerConfigurationNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerConfigurationNetworking$Context.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
export interface ServerConfigurationNetworking$ConfigurationPacketHandler<T extends CustomPacketPayload> extends Object{
    receive(arg0: T, arg1: ServerConfigurationNetworking$Context): void;
}