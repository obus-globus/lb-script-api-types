import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { CraftingInput } from '../../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
import type { CraftingRecipe$CraftingBookInfo } from '../../../../../net/minecraft/world/item/crafting/CraftingRecipe$CraftingBookInfo.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { NormalCraftingRecipe } from '../../../../../net/minecraft/world/item/crafting/NormalCraftingRecipe.d.ts'
import type { PlacementInfo } from '../../../../../net/minecraft/world/item/crafting/PlacementInfo.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { Recipe$CommonInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { ShapedRecipePattern } from '../../../../../net/minecraft/world/item/crafting/ShapedRecipePattern.d.ts'
import type { RecipeDisplay } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class ShapedRecipe extends NormalCraftingRecipe {
    static CODEC: Codec<Recipe<any>>;
    static KEY_CODEC: Codec<ResourceKey<Recipe<any>>>;
    static MAP_CODEC: MapCodec<ShapedRecipe>;
    static SERIALIZER: RecipeSerializer<ShapedRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Recipe<any>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ShapedRecipe>;
    constructor(commonInfo: Recipe$CommonInfo, bookInfo: CraftingRecipe$CraftingBookInfo, pattern: ShapedRecipePattern, result: ItemStackTemplate)
    // private pattern: ShapedRecipePattern;
    // private result: ItemStackTemplate;
    assemble(input: CraftingInput): ItemStack;
    createPlacementInfo(): PlacementInfo;
    display(): RecipeDisplay[];
    getHeight(): number;
    getIngredients(): Optional<Ingredient>[];
    getSerializer(): RecipeSerializer<ShapedRecipe>;
    getWidth(): number;
    matches(input: CraftingInput, level: Level): boolean;
}