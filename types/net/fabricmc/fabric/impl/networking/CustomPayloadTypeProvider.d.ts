import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { CustomPacketPayload } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { CustomPacketPayload$TypeAndCodec } from '../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$TypeAndCodec.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export interface CustomPayloadTypeProvider<B extends FriendlyByteBuf> extends Object{
    get(arg0: B, arg1: Identifier): CustomPacketPayload$TypeAndCodec<B, CustomPacketPayload>;
}