import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { CraftingInput } from '../../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
import type { CustomRecipe } from '../../../../../net/minecraft/world/item/crafting/CustomRecipe.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class BannerDuplicateRecipe extends CustomRecipe {
    static CODEC: Codec<Recipe<any>>;
    static KEY_CODEC: Codec<ResourceKey<Recipe<any>>>;
    static MAP_CODEC: MapCodec<BannerDuplicateRecipe>;
    static SERIALIZER: RecipeSerializer<BannerDuplicateRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, BannerDuplicateRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Recipe<any>>;
    constructor(banner: Ingredient, result: ItemStackTemplate)
    // private banner: Ingredient;
    // private result: ItemStackTemplate;
    assemble(input: CraftingInput): ItemStack;
    getRemainingItems(input: CraftingInput): ItemStack[];
    getSerializer(): RecipeSerializer<BannerDuplicateRecipe>;
    matches(input: CraftingInput, level: Level): boolean;
}