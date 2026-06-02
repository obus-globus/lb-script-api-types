import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CustomIngredientSerializer } from '../../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredientSerializer.d.ts'
import type { CombinedIngredient } from '../../../../../../../net/fabricmc/fabric/impl/recipe/ingredient/builtin/CombinedIngredient.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Ingredient } from '../../../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
export class CombinedIngredient$Serializer<I extends CombinedIngredient> extends Object implements CustomIngredientSerializer<I> {
    static get(paramarg0: Identifier): CustomIngredientSerializer<Object>;
    static register(paramarg0: CustomIngredientSerializer<Object>): void;
    constructor(arg0: Identifier, arg1: (param0: Ingredient[]) => I, arg2: MapCodec<I>)
    readonly codec: MapCodec<I>;
    readonly identifier: Identifier;
    readonly streamCodec: StreamCodec<RegistryFriendlyByteBuf, I>;
    getCodec(): MapCodec<I>;
    getIdentifier(): Identifier;
    getStreamCodec(): StreamCodec<RegistryFriendlyByteBuf, I>;
}