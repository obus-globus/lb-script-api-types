import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../../net/minecraft/advancements/criterion/MinMaxBounds$Ints.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { WrittenBookContent } from '../../../../../net/minecraft/world/item/component/WrittenBookContent.d.ts'
import type { CraftingInput } from '../../../../../net/minecraft/world/item/crafting/CraftingInput.d.ts'
import type { CustomRecipe } from '../../../../../net/minecraft/world/item/crafting/CustomRecipe.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class BookCloningRecipe extends CustomRecipe {
    static ALLOWED_BOOK_GENERATION_RANGES: MinMaxBounds$Ints;
    static CODEC: Codec<Object>;
    static DEFAULT_BOOK_GENERATION_RANGES: MinMaxBounds$Ints;
    static KEY_CODEC: Codec<Object>;
    static MAP_CODEC: MapCodec<BookCloningRecipe>;
    static SERIALIZER: RecipeSerializer<BookCloningRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, BookCloningRecipe>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(source: Ingredient, material: Ingredient, allowedGenerations: MinMaxBounds$Ints, result: ItemStackTemplate)
    // private allowedGenerations: MinMaxBounds$Ints;
    // private material: Ingredient;
    // private result: ItemStackTemplate;
    // private source: Ingredient;
    assemble(input: CraftingInput): ItemStack;
    // private canCraftCopy(writtenBookContent: WrittenBookContent): boolean;
    getRemainingItems(input: CraftingInput): ItemStack[];
    getSerializer(): RecipeSerializer<BookCloningRecipe>;
    matches(input: CraftingInput, level: Level): boolean;
}