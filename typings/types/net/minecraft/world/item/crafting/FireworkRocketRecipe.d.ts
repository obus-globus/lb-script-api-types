import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
export class FireworkRocketRecipe extends CustomRecipe {
    static CODEC: Codec<Recipe<Object>>;
    static KEY_CODEC: Codec<ResourceKey<Recipe<Object>>>;
    static MAP_CODEC: MapCodec<FireworkRocketRecipe>;
    static SERIALIZER: RecipeSerializer<FireworkRocketRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, FireworkRocketRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Recipe<Object>>;
    constructor(shell: Ingredient, fuel: Ingredient, star: Ingredient, result: ItemStackTemplate)
    // private fuel: Ingredient;
    // private result: ItemStackTemplate;
    // private shell: Ingredient;
    // private star: Ingredient;
    assemble(input: CraftingInput): ItemStack;
    getSerializer(): RecipeSerializer<FireworkRocketRecipe>;
    matches(input: CraftingInput, level: Level): boolean;
}