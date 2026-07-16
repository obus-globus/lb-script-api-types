import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { PlacementInfo } from '../../../../../net/minecraft/world/item/crafting/PlacementInfo.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { Recipe$CommonInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { SimpleSmithingRecipe } from '../../../../../net/minecraft/world/item/crafting/SimpleSmithingRecipe.d.ts'
import type { SmithingRecipeInput } from '../../../../../net/minecraft/world/item/crafting/SmithingRecipeInput.d.ts'
import type { RecipeDisplay } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
import type { TrimPattern } from '../../../../../net/minecraft/world/item/equipment/trim/TrimPattern.d.ts'
export class SmithingTrimRecipe extends SimpleSmithingRecipe {
    static CODEC: Codec<Recipe<any>>;
    static KEY_CODEC: Codec<ResourceKey<Recipe<any>>>;
    static MAP_CODEC: MapCodec<SmithingTrimRecipe>;
    static SERIALIZER: RecipeSerializer<SmithingTrimRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, SmithingTrimRecipe>;
    static applyTrim(parambaseItem: ItemStack, parammaterialItem: ItemStack, parampattern: Holder<TrimPattern>): ItemStack;
    constructor(commonInfo: Recipe$CommonInfo, template: Ingredient, base: Ingredient, addition: Ingredient, pattern: Holder<TrimPattern>)
    // private addition: Ingredient;
    // private base: Ingredient;
    // private pattern: Holder<TrimPattern>;
    // private template: Ingredient;
    additionIngredient(): Optional<Ingredient>;
    assemble(input: SmithingRecipeInput): ItemStack;
    baseIngredient(): Ingredient;
    createPlacementInfo(): PlacementInfo;
    display(): RecipeDisplay[];
    getSerializer(): RecipeSerializer<SmithingTrimRecipe>;
    templateIngredient(): Optional<Ingredient>;
}