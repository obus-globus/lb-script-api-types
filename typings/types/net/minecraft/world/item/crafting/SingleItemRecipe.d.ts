import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { PlacementInfo } from '../../../../../net/minecraft/world/item/crafting/PlacementInfo.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { Recipe$CommonInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { RecipeType } from '../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { SingleItemRecipe$Factory } from '../../../../../net/minecraft/world/item/crafting/SingleItemRecipe$Factory.d.ts'
import type { SingleRecipeInput } from '../../../../../net/minecraft/world/item/crafting/SingleRecipeInput.d.ts'
import type { RecipeDisplay } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export abstract class SingleItemRecipe extends Object implements Recipe<SingleRecipeInput> {
    static CODEC: Codec<Recipe<any>>;
    static KEY_CODEC: Codec<ResourceKey<Recipe<any>>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Recipe<any>>;
    static simpleMapCodec(paramfactory: (param0: Recipe$CommonInfo, param1: Ingredient, param2: ItemStackTemplate) => SingleItemRecipe | null): MapCodec<SingleItemRecipe>;
    static simpleStreamCodec(paramfactory: (param0: Recipe$CommonInfo, param1: Ingredient, param2: ItemStackTemplate) => SingleItemRecipe | null): StreamCodec<RegistryFriendlyByteBuf, SingleItemRecipe>;
    constructor(commonInfo: Recipe$CommonInfo, input: Ingredient, result: ItemStackTemplate)
    // private commonInfo: Recipe$CommonInfo;
    // private input: Ingredient;
    // private placementInfo: PlacementInfo;
    // private result: ItemStackTemplate;
    assemble(input: SingleRecipeInput): ItemStack;
    display(): RecipeDisplay[];
    getSerializer(): RecipeSerializer<SingleItemRecipe>;
    getType(): RecipeType<SingleItemRecipe>;
    input(): Ingredient;
    isSpecial(): boolean;
    matches(input: SingleRecipeInput, level: Level): boolean;
    placementInfo(): PlacementInfo;
    result(): ItemStackTemplate;
    showNotification(): boolean;
}