import type { IntSupplier } from '../../../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { CustomPacketPayload$Type } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$Type.d.ts'
import type { CustomPacketPayload$TypeAndCodec } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload$TypeAndCodec.d.ts'
export interface PayloadTypeRegistry<B extends FriendlyByteBuf> extends Object{
    register(arg0: CustomPacketPayload$Type<T>, arg1: StreamCodec<B, T>): CustomPacketPayload$TypeAndCodec<B, T>;
    registerLarge(arg0: CustomPacketPayload$Type<T>, arg1: StreamCodec<B, T>, arg2: () => kotlin.Int): CustomPacketPayload$TypeAndCodec<B, T>;
    registerLarge(arg0: CustomPacketPayload$Type<T>, arg1: StreamCodec<B, T>, arg2: number): CustomPacketPayload$TypeAndCodec<B, T>;
}