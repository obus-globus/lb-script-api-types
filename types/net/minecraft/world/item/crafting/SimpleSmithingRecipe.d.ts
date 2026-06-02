import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { PlacementInfo } from '../../../../../net/minecraft/world/item/crafting/PlacementInfo.d.ts'
import type { Recipe$CommonInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { RecipeBookCategory } from '../../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { RecipeType } from '../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { SmithingRecipe } from '../../../../../net/minecraft/world/item/crafting/SmithingRecipe.d.ts'
import type { SmithingRecipeInput } from '../../../../../net/minecraft/world/item/crafting/SmithingRecipeInput.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export abstract class SimpleSmithingRecipe extends Object implements SmithingRecipe {
    static CODEC: Codec<Object>;
    static KEY_CODEC: Codec<Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(commonInfo: Recipe$CommonInfo)
    // private commonInfo: Recipe$CommonInfo;
    // private placementInfo: PlacementInfo;
    createPlacementInfo(): PlacementInfo;
    getSerializer(): RecipeSerializer<SimpleSmithingRecipe>;
    getType(): RecipeType<SmithingRecipe>;
    group(): string;
    matches(input: SmithingRecipeInput, level: Level): boolean;
    placementInfo(): PlacementInfo;
    recipeBookCategory(): RecipeBookCategory;
    showNotification(): boolean;
}