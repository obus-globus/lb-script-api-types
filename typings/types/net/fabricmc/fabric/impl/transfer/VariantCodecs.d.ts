import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FluidVariant } from '../../../../../net/fabricmc/fabric/api/transfer/v1/fluid/FluidVariant.d.ts'
import type { ItemVariant } from '../../../../../net/fabricmc/fabric/api/transfer/v1/item/ItemVariant.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class VariantCodecs extends Object {
    static FLUID_CODEC: Codec<FluidVariant>;
    static FLUID_PACKET_CODEC: StreamCodec<RegistryFriendlyByteBuf, FluidVariant>;
    static ITEM_CODEC: Codec<ItemVariant>;
    static ITEM_PACKET_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemVariant>;
    constructor()
}