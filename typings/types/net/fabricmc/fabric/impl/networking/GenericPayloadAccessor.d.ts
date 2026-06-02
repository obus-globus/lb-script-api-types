import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CustomPacketPayload } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
export interface GenericPayloadAccessor extends Object{
    fabric_payload(): CustomPacketPayload;
}