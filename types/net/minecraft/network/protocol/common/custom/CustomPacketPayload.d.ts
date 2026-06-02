import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
export interface CustomPacketPayload extends Object{
    type(): CustomPacketPayload$Type<CustomPacketPayload>;
}