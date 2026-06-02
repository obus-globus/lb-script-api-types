import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientPlayNetworking$Context } from '../../../../../../../net/fabricmc/fabric/api/client/networking/v1/ClientPlayNetworking$Context.d.ts'
import type { CustomPacketPayload } from '../../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
export interface ClientPlayNetworking$PlayPayloadHandler<T extends CustomPacketPayload> extends Object{
    receive(arg0: T, arg1: ClientPlayNetworking$Context): void;
}