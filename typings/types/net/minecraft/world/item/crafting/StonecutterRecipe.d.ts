import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { Recipe$CommonInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { RecipeBookCategory } from '../../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { RecipeType } from '../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { SingleItemRecipe } from '../../../../../net/minecraft/world/item/crafting/SingleItemRecipe.d.ts'
import type { SingleItemRecipe$Factory } from '../../../../../net/minecraft/world/item/crafting/SingleItemRecipe$Factory.d.ts'
import type { RecipeDisplay } from '../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
import type { SlotDisplay } from '../../../../../net/minecraft/world/item/crafting/display/SlotDisplay.d.ts'
export class StonecutterRecipe extends SingleItemRecipe {
    static CODEC: Codec<Recipe<Object>>;
    static KEY_CODEC: Codec<ResourceKey<Recipe<Object>>>;
    static MAP_CODEC: MapCodec<StonecutterRecipe>;
    static SERIALIZER: RecipeSerializer<StonecutterRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Recipe<Object>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, StonecutterRecipe>;
    static simpleMapCodec(paramfactory: (param0: Recipe$CommonInfo, param1: Ingredient, param2: ItemStackTemplate) => SingleItemRecipe | null): MapCodec<SingleItemRecipe>;
    static simpleStreamCodec(paramfactory: (param0: Recipe$CommonInfo, param1: Ingredient, param2: ItemStackTemplate) => SingleItemRecipe | null): StreamCodec<RegistryFriendlyByteBuf, SingleItemRecipe>;
    constructor(commonInfo: Recipe$CommonInfo, ingredient: Ingredient, result: ItemStackTemplate)
    display(): RecipeDisplay[];
    getSerializer(): RecipeSerializer<StonecutterRecipe>;
    getType(): RecipeType<StonecutterRecipe>;
    group(): string;
    recipeBookCategory(): RecipeBookCategory;
    resultDisplay(): SlotDisplay;
}