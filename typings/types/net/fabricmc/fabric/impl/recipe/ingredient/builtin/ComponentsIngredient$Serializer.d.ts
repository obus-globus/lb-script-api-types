import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CustomIngredientSerializer } from '../../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredientSerializer.d.ts'
import type { ComponentsIngredient } from '../../../../../../../net/fabricmc/fabric/impl/recipe/ingredient/builtin/ComponentsIngredient.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ComponentsIngredient$Serializer extends Object implements CustomIngredientSerializer<ComponentsIngredient> {
    static get(paramarg0: Identifier): CustomIngredientSerializer<Object>;
    static register(paramarg0: CustomIngredientSerializer<Object>): void;
    private constructor()
    getCodec(): MapCodec<ComponentsIngredient>;
    getIdentifier(): Identifier;
    getStreamCodec(): StreamCodec<RegistryFriendlyByteBuf, ComponentsIngredient>;
}