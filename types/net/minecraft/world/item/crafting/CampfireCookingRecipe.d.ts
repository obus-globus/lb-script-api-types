import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { AbstractCookingRecipe } from '../../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe.d.ts'
import type { AbstractCookingRecipe$CookingBookInfo } from '../../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe$CookingBookInfo.d.ts'
import type { AbstractCookingRecipe$Factory } from '../../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe$Factory.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe$CommonInfo } from '../../../../../net/minecraft/world/item/crafting/Recipe$CommonInfo.d.ts'
import type { RecipeBookCategory } from '../../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { RecipeType } from '../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { SingleItemRecipe$Factory } from '../../../../../net/minecraft/world/item/crafting/SingleItemRecipe$Factory.d.ts'
export class CampfireCookingRecipe extends AbstractCookingRecipe {
    static CODEC: Codec<Object>;
    static KEY_CODEC: Codec<Object>;
    static MAP_CODEC: MapCodec<CampfireCookingRecipe>;
    static SERIALIZER: RecipeSerializer<CampfireCookingRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, CampfireCookingRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static cookingMapCodec(paramfactory: (param0: Object | null, param1: Recipe$CommonInfo, param2: AbstractCookingRecipe$CookingBookInfo, param3: Ingredient, param4: ItemStackTemplate, param5: number) => unknown, paramdefaultCookingTime: number): MapCodec<Object>;
    static cookingStreamCodec(paramfactory: (param0: Object | null, param1: Recipe$CommonInfo, param2: AbstractCookingRecipe$CookingBookInfo, param3: Ingredient, param4: ItemStackTemplate, param5: number) => unknown): StreamCodec<RegistryFriendlyByteBuf, Object>;
    static simpleMapCodec(paramfactory: (param0: Object | null, param1: Recipe$CommonInfo, param2: Ingredient) => unknown): MapCodec<Object>;
    static simpleStreamCodec(paramfactory: (param0: Object | null, param1: Recipe$CommonInfo, param2: Ingredient) => unknown): StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(commonInfo: Recipe$CommonInfo, bookInfo: AbstractCookingRecipe$CookingBookInfo, ingredient: Ingredient, result: ItemStackTemplate, experience: number, cookingTime: number)
    furnaceIcon(): Item;
    getSerializer(): RecipeSerializer<CampfireCookingRecipe>;
    getType(): RecipeType<CampfireCookingRecipe>;
    recipeBookCategory(): RecipeBookCategory;
}