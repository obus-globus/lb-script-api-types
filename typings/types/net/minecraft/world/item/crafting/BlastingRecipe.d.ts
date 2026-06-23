import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { AbstractCookingRecipe } from '../../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe.d.ts'
import type { AbstractCookingRecipe$CookingBookInfo } from '../../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe$CookingBookInfo.d.ts'
import type { AbstractCookingRecipe$Factory } from '../../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe$Factory.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { Recipe$CommonInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { RecipeBookCategory } from '../../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { RecipeType } from '../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { SingleItemRecipe } from '../../../../../net/minecraft/world/item/crafting/SingleItemRecipe.d.ts'
import type { SingleItemRecipe$Factory } from '../../../../../net/minecraft/world/item/crafting/SingleItemRecipe$Factory.d.ts'
export class BlastingRecipe extends AbstractCookingRecipe {
    static CODEC: Codec<Recipe<any>>;
    static KEY_CODEC: Codec<ResourceKey<Recipe<any>>>;
    static MAP_CODEC: MapCodec<BlastingRecipe>;
    static SERIALIZER: RecipeSerializer<BlastingRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, BlastingRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Recipe<any>>;
    static cookingMapCodec(paramfactory: (param0: Recipe$CommonInfo, param1: AbstractCookingRecipe$CookingBookInfo, param2: Ingredient, param3: ItemStackTemplate, param4: number, param5: number) => AbstractCookingRecipe | null, paramdefaultCookingTime: number): MapCodec<AbstractCookingRecipe>;
    static cookingStreamCodec(paramfactory: (param0: Recipe$CommonInfo, param1: AbstractCookingRecipe$CookingBookInfo, param2: Ingredient, param3: ItemStackTemplate, param4: number, param5: number) => AbstractCookingRecipe | null): StreamCodec<RegistryFriendlyByteBuf, AbstractCookingRecipe>;
    static simpleMapCodec(paramfactory: (param0: Recipe$CommonInfo, param1: Ingredient, param2: ItemStackTemplate) => SingleItemRecipe | null): MapCodec<SingleItemRecipe>;
    static simpleStreamCodec(paramfactory: (param0: Recipe$CommonInfo, param1: Ingredient, param2: ItemStackTemplate) => SingleItemRecipe | null): StreamCodec<RegistryFriendlyByteBuf, SingleItemRecipe>;
    constructor(commonInfo: Recipe$CommonInfo, bookInfo: AbstractCookingRecipe$CookingBookInfo, ingredient: Ingredient, result: ItemStackTemplate, experience: number, cookingTime: number)
    furnaceIcon(): Item;
    getSerializer(): RecipeSerializer<BlastingRecipe>;
    getType(): RecipeType<BlastingRecipe>;
    recipeBookCategory(): RecipeBookCategory;
}