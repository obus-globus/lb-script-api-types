import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CustomPayloadTypeProvider } from '../../../../../net/fabricmc/fabric/impl/networking/CustomPayloadTypeProvider.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export interface FabricCustomPayloadStreamCodec<B extends FriendlyByteBuf> extends Object{
    fabric_setCustomPayloadTypeProvider(arg0: CustomPayloadTypeProvider<B>): void;
}