import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
import type { RecipeDisplay } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class ImbueRecipe extends NormalCraftingRecipe {
    static CODEC: Codec<Recipe<Object>>;
    static KEY_CODEC: Codec<ResourceKey<Recipe<Object>>>;
    static MAP_CODEC: MapCodec<ImbueRecipe>;
    static SERIALIZER: RecipeSerializer<ImbueRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ImbueRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Recipe<Object>>;
    constructor(commonInfo: Recipe$CommonInfo, bookInfo: CraftingRecipe$CraftingBookInfo, source: Ingredient, material: Ingredient, result: ItemStackTemplate)
    // private material: Ingredient;
    // private result: ItemStackTemplate;
    // private source: Ingredient;
    assemble(input: CraftingInput): ItemStack;
    createPlacementInfo(): PlacementInfo;
    display(): RecipeDisplay[];
    getSerializer(): RecipeSerializer<ImbueRecipe>;
    matches(input: CraftingInput, level: Level): boolean;
}