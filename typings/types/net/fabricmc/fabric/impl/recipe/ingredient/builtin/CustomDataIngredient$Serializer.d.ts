import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CustomIngredientSerializer } from '../../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredientSerializer.d.ts'
import type { CustomDataIngredient } from '../../../../../../../net/fabricmc/fabric/impl/recipe/ingredient/builtin/CustomDataIngredient.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class CustomDataIngredient$Serializer extends Object implements CustomIngredientSerializer<CustomDataIngredient> {
    static get(paramarg0: Identifier): CustomIngredientSerializer<any>;
    static register(paramarg0: CustomIngredientSerializer<any>): void;
    private constructor()
    getCodec(): MapCodec<CustomDataIngredient>;
    getIdentifier(): Identifier;
    getStreamCodec(): StreamCodec<RegistryFriendlyByteBuf, CustomDataIngredient>;
}