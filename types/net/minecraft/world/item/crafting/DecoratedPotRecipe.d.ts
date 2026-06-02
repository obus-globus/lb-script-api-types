import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { CraftingInput } from '../../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
import type { CustomRecipe } from '../../../../../net/minecraft/world/item/crafting/CustomRecipe.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class DecoratedPotRecipe extends CustomRecipe {
    static CODEC: Codec<Object>;
    static KEY_CODEC: Codec<Object>;
    static MAP_CODEC: MapCodec<DecoratedPotRecipe>;
    static SERIALIZER: RecipeSerializer<DecoratedPotRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DecoratedPotRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(wallPattern: Ingredient, result: ItemStackTemplate)
    constructor(backPattern: Ingredient, leftPattern: Ingredient, rightPattern: Ingredient, frontPattern: Ingredient, result: ItemStackTemplate)
    // private backPattern: Ingredient;
    // private frontPattern: Ingredient;
    // private leftPattern: Ingredient;
    // private result: ItemStackTemplate;
    // private rightPattern: Ingredient;
    assemble(input: CraftingInput): ItemStack;
    getSerializer(): RecipeSerializer<DecoratedPotRecipe>;
    matches(input: CraftingInput, level: Level): boolean;
}