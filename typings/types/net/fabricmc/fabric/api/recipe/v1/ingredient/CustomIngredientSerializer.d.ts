import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CustomIngredient } from '../../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredient.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface CustomIngredientSerializer<T extends CustomIngredient> extends Object{
    getCodec(): MapCodec<T>;
    getIdentifier(): Identifier;
    getStreamCodec(): StreamCodec<RegistryFriendlyByteBuf, T>;
}