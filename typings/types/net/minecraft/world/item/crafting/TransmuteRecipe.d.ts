import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { MinMaxBounds$Ints } from '../../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
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
export class TransmuteRecipe extends NormalCraftingRecipe {
    static CODEC: Codec<Recipe<any>>;
    static DEFAULT_MATERIAL_COUNT: MinMaxBounds$Ints;
    static FULL_RANGE_MATERIAL_COUNT: MinMaxBounds$Ints;
    static KEY_CODEC: Codec<ResourceKey<Recipe<any>>>;
    static MAP_CODEC: MapCodec<TransmuteRecipe>;
    static MATERIAL_COUNT_BOUNDS: Codec<MinMaxBounds$Ints>;
    static SERIALIZER: RecipeSerializer<TransmuteRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Recipe<any>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, TransmuteRecipe>;
    static createWithOriginalComponents(paramtarget: ItemStackTemplate, paraminput: ItemStack): ItemStack;
    static createWithOriginalComponents(paramtarget: ItemStackTemplate, paraminput: ItemStack, paramextraCount: number): ItemStack;
    constructor(commonInfo: Recipe$CommonInfo, bookInfo: CraftingRecipe$CraftingBookInfo, input: Ingredient, material: Ingredient, materialCount: MinMaxBounds$Ints, result: ItemStackTemplate, addMaterialCountToResult: boolean)
    // private addMaterialCountToResult: boolean;
    // private input: Ingredient;
    // private material: Ingredient;
    // private materialCount: MinMaxBounds$Ints;
    // private result: ItemStackTemplate;
    assemble(input: CraftingInput): ItemStack;
    // private computeResult(inputIngredient: ItemStack, materialCount: number): ItemStack;
    // private computeResultSize(materialCount: number): number;
    createPlacementInfo(): PlacementInfo;
    display(): RecipeDisplay[];
    getSerializer(): RecipeSerializer<TransmuteRecipe>;
    matches(input: CraftingInput, level: Level): boolean;
    // private maxMaterialCount(): number;
    // private minMaterialCount(): number;
}