import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerPlayNetworking$Context } from '../../../../../../net/fabricmc/fabric/api/networking/v1/ServerPlayNetworking$Context.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
export interface ServerPlayNetworking$PlayPayloadHandler<T extends CustomPacketPayload> extends Object{
    receive(arg0: T, arg1: ServerPlayNetworking$Context): void;
}